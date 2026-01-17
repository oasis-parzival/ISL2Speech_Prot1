import pickle
import cv2
import mediapipe as mp
import numpy as np
import pyttsx3
import threading
import time

# --- LOAD MODEL ---
model_dict = pickle.load(open('./model.p', 'rb'))
model = model_dict['model']

# --- SETUP VOICE ---
engine = pyttsx3.init()

def speak(text):
    try:
        engine.say(text)
        engine.runAndWait()
    except: pass

# --- SETUP CAMERA ---
cap = cv2.VideoCapture(0)
mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=False, min_detection_confidence=0.3)

last_prediction = ""
current_sign = ""
current_sign_start_time = 0

print("--------------------------------------------------")
print("  1-HAND ISL TRANSLATOR (RESTORED)")
print("  - Mirror Fix: ON")
print("  - Voice Spam Fix: ON")
print("  - Press 'q' to quit")
print("--------------------------------------------------")

while True:
    data_aux = []
    x_ = []
    y_ = []

    ret, frame = cap.read()
    if not ret: break

    # Mirror Frame
    frame = cv2.flip(frame, 1)

    H, W, _ = frame.shape
    frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
    results = hands.process(frame_rgb)

    if results.multi_hand_landmarks:
        # Only process FIRST hand
        hand_landmarks = results.multi_hand_landmarks[0]
        
        mp_drawing.draw_landmarks(frame, hand_landmarks, mp_hands.HAND_CONNECTIONS, 
                                  mp_drawing_styles.get_default_hand_landmarks_style(),
                                  mp_drawing_styles.get_default_hand_connections_style())

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

        # PREDICT (Expects 42 features)
        if len(data_aux) == 42:
            prediction = model.predict([np.asarray(data_aux)])
            predicted_word = prediction[0]

            # Visuals
            x1 = int(min(x_) * W) - 10
            y1 = int(min(y_) * H) - 10
            x2 = int(max(x_) * W) + 10
            y2 = int(max(y_) * H) + 10
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 0, 0), 4)
            cv2.putText(frame, predicted_word, (x1, y1 - 10), cv2.FONT_HERSHEY_SIMPLEX, 1.3, (0, 255, 0), 3, cv2.LINE_AA)

            # --- VOICE LOGIC ---
            if predicted_word != current_sign:
                current_sign = predicted_word
                current_sign_start_time = time.time()
            else:
                # Wait 0.5s to confirm sign
                if time.time() - current_sign_start_time > 0.5:
                    if predicted_word != last_prediction:
                        print(f"Sign Detected: {predicted_word}")
                        threading.Thread(target=speak, args=(predicted_word,)).start()
                        last_prediction = predicted_word

    cv2.imshow('ISL Realtime Translator', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()