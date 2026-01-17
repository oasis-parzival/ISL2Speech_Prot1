@echo off
echo Starting ISL Platform Development Environment...

:: 1. Start Backend Server
echo Starting Backend Server...
start "ISL Backend" "C:\Users\HP\AppData\Local\Programs\Python\Python310\python.exe" -m uvicorn backend.main:app --reload --host 0.0.0.0 --port 8000

:: 2. Start Frontend Server
echo Starting Frontend Server...
cd ISL_Platform-main
start "ISL Frontend" npm run dev

:: 3. Open Browser (Wait a few seconds for servers to initialize)
timeout /t 5
start http://localhost:5173/translator

echo Servers are running. Close the terminal windows to stop them.
pause
