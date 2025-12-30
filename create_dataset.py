import os
import pickle
import mediapipe as mp
import cv2

mp_hands = mp.solutions.hands
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles

hands = mp_hands.Hands(static_image_mode=True, min_detection_confidence=0.3)

DATA_DIR = './ISL_Dataset'

data = []
labels = []

# Loop through the folders
for dir_ in os.listdir(DATA_DIR):
    dir_path = os.path.join(DATA_DIR, dir_)
    if not os.path.isdir(dir_path): continue

    print(f"Processing class: {dir_}")
    
    for img_path in os.listdir(dir_path):
        video_path = os.path.join(dir_path, img_path)
        cap = cv2.VideoCapture(video_path)
        
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret: break

            frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            results = hands.process(frame_rgb)
            
            if results.multi_hand_landmarks:
                # ONLY use the first hand detected (1-Hand Version)
                hand_landmarks = results.multi_hand_landmarks[0]
                
                # --- IMPORTANT FIX: Reset these lists for every single frame! ---
                data_aux = []
                x_ = []
                y_ = []

                # 1. Collect all coordinates
                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    x_.append(x)
                    y_.append(y)

                # 2. Normalize (Subtract minimums)
                min_x = min(x_)
                min_y = min(y_)

                for i in range(len(hand_landmarks.landmark)):
                    x = hand_landmarks.landmark[i].x
                    y = hand_landmarks.landmark[i].y
                    data_aux.append(x - min_x)
                    data_aux.append(y - min_y)

                data.append(data_aux)
                labels.append(dir_)

        cap.release()

f = open('data.pickle', 'wb')
pickle.dump({'data': data, 'labels': labels}, f)
f.close()
print("SUCCESS! Dataset created.")