import mediapipe as mp
import os
import sys

print(f"Python executable: {sys.executable}")
try:
    print(f"MediaPipe file: {mp.__file__}")
except:
    print("MediaPipe has no __file__")

try:
    print(f"MediaPipe path: {mp.__path__}")
except:
    print("MediaPipe has no __path__")

try:
    print(f"Available attributes: {dir(mp)}")
    print(mp.solutions)
    print("Success: mp.solutions found")
except AttributeError as e:
    print(f"Error: {e}")
