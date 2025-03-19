from PIL import ImageGrab
import mss
from PIL import Image
import numpy as np

def capture_screen():
    """
    Captures the entire screen using Pillow (PIL.ImageGrab) and returns a PIL Image object.

    Returns:
        PIL.Image: A PIL Image object of the screen capture.
    """
    try:
        screenshot = ImageGrab.grab()
        return screenshot
    except Exception as e:
        print(f"Screen capture with Pillow failed: {e}")
        return None

def capture_screen_mss():
    """
    Captures the primary monitor using mss for potentially faster capture and returns a PIL Image.

    Returns:
        PIL.Image: A PIL Image object of the screen capture from mss, or None on failure.
    """
    try:
        with mss.mss() as sct:
            monitor = sct.monitors[1]  # Primary monitor is usually index 1
            sct_img = sct.grab(monitor)
            img = Image.frombytes("RGB", sct_img.size, sct_img.bgra, "raw", "BGRX")
            return img
    except Exception as e:
        print(f"Screen capture with mss failed: {e}")
        return None


if __name__ == '__main__':
    # Example usage (for testing this module directly)
    pillow_screenshot = capture_screen()
    if pillow_screenshot:
        pillow_screenshot.save("pillow_screenshot.png") # Save for inspection
        print("Pillow screenshot saved as pillow_screenshot.png")
    else:
        print("Pillow screenshot capture failed.")

    mss_screenshot = capture_screen_mss()
    if mss_screenshot:
        mss_screenshot.save("mss_screenshot.png") # Save for inspection
        print("mss screenshot saved as mss_screenshot.png")
    else:
        print("mss screenshot capture failed.")
