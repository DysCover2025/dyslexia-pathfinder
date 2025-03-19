import pytesseract
from PIL import Image
from dyslexia_reader_app.core import screen_capture # Import screen_capture module

def perform_ocr(image):
    """
    Performs Optical Character Recognition (OCR) on a PIL Image.

    Args:
        image: A PIL Image object.

    Returns:
        str: The extracted text from the image, or None if OCR fails.
    """
    try:
        text = pytesseract.image_to_string(image)
        return text
    except Exception as e:
        print(f"OCR failed: {e}")  # Basic error logging - enhance this for production
        return None

if __name__ == '__main__':
    # --- Generate test_image.png by taking a screenshot ---
    print("Taking a screenshot to create test_image.png...")
    screenshot_image = screen_capture.capture_screen_mss() # Or use screen_capture.capture_screen()
    if screenshot_image:
        try:
            screenshot_image.save('test_image.png')
            print("Screenshot saved as test_image.png in the same directory.")
        except Exception as save_error:
            print(f"Error saving screenshot to test_image.png: {save_error}")
            screenshot_image = None # Ensure screenshot_image is None if saving failed
    else:
        print("Screenshot capture failed. Cannot create test_image.png.")

    if screenshot_image: # Only proceed with OCR test if screenshot was successfully captured and saved
        print("Performing OCR on the captured screenshot (test_image.png)...")
        extracted_text = perform_ocr(screenshot_image)
        if extracted_text:
            print("OCR Result from test_image.png:\n", extracted_text)
        else:
            print("No text extracted from the screenshot, or OCR failed.")
    else:
        print("Skipping OCR test because screenshot was not available.")
