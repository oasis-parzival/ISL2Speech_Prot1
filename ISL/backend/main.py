import pickle
import cv2
import mediapipe as mp
import numpy as np
import base64
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import os

app = FastAPI()

# --- CORS SETUP ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- LOAD MODEL ---
MODEL_PATH = os.path.join(os.path.dirname(__file__), '../SignLanguageProject - Copy (2)/model.p')

try:
    model_dict = pickle.load(open(MODEL_PATH, 'rb'))
    model = model_dict['model']
    print(f"Model loaded successfully from {MODEL_PATH}")
except Exception as e:
    print(f"Error loading model from {MODEL_PATH}: {e}")
    model = None

# --- MEDIAPIPE SETUP ---
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

# --- MEDIAPIPE SETUP ---
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(
    static_image_mode=False, 
    min_detection_confidence=0.7, # High accuracy
    min_tracking_confidence=0.7,
    max_num_hands=1
)

def extract_features(hand_landmarks):
    data_aux = []
    x_ = []
    y_ = []

    for i in range(len(hand_landmarks.landmark)):
        x = hand_landmarks.landmark[i].x
        y = hand_landmarks.landmark[i].y
        x_.append(x)
        y_.append(y)

    min_x = min(x_)
    min_y = min(y_)

    for i in range(len(hand_landmarks.landmark)):
        x = hand_landmarks.landmark[i].x
        y = hand_landmarks.landmark[i].y
        data_aux.append(x - min_x)
        data_aux.append(y - min_y)
    
    return data_aux

import time

# Global variables
features_len = 42

@app.websocket("/ws/predict")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    print("Client connected to WebSocket")
    
    try:
        while True:
            # Receive frame as base64 string
            data = await websocket.receive_text()
            
            if not data:
                continue
                
            # Decode base64 image
            try:
                # Remove header if present
                if "base64," in data:
                    data = data.split("base64,")[1]
                
                img_bytes = base64.b64decode(data)
                np_arr = np.frombuffer(img_bytes, np.uint8)
                frame = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)

                if frame is None:
                    continue

                # Mirror Frame (Match inference.py logic)
                frame = cv2.flip(frame, 1)

                # Process frame
                H, W, _ = frame.shape
                frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
                results = hands.process(frame_rgb)

                prediction_result = ""
                confidence = 0.0

                if results.multi_hand_landmarks:
                    hand_landmarks = results.multi_hand_landmarks[0]
                    data_aux = extract_features(hand_landmarks)

                    if len(data_aux) == features_len and model:
                        try:
                            # Direct Immediate Prediction (Zero Latency)
                            # Confidence of 0.7 in MP ensures we only get good frames
                            prediction = model.predict([np.asarray(data_aux)])
                            prediction_result = prediction[0]
                            confidence = 1.0 
                        except Exception as e:
                            print(f"Prediction error: {e}")
                
                # Send response immediately
                await websocket.send_json({
                    "prediction": prediction_result,
                    "confidence": confidence
                })

            except Exception as e:
                print(f"Error processing frame: {e}")
                await websocket.send_json({"error": str(e)})
                
    except WebSocketDisconnect:
        print("Client disconnected")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
