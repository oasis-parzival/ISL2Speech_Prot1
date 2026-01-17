import subprocess
import sys
import importlib.util

def install(package):
    print(f"Installing {package}...")
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

def check_and_install_requirements():
    # Map import name to package name
    required_packages = {
        'fastapi': 'fastapi',
        'uvicorn': 'uvicorn',
        'cv2': 'opencv-python',
        'mediapipe': 'mediapipe',
        'numpy': 'numpy',
        'sklearn': 'scikit-learn',
        'python_multipart': 'python-multipart',
        'websockets': 'websockets'
    }

    for import_name, package_name in required_packages.items():
        if importlib.util.find_spec(import_name) is None:
            print(f"Package '{package_name}' (module '{import_name}') not found.")
            try:
                install(package_name)
            except subprocess.CalledProcessError as e:
                print(f"Failed to install {package_name}: {e}")
        else:
            print(f"Package '{package_name}' (module '{import_name}') is already installed.")

if __name__ == "__main__":
    print("Checking and installing dependencies...")
    check_and_install_requirements()
    print("Setup complete.")
