import pyttsx3

engine = None  # Initialize engine globally (for potential reuse)

def initialize_tts():
    """
    Initializes the pyttsx3 text-to-speech engine.

    Returns:
        pyttsx3.Engine: The initialized TTS engine, or None on failure.
    """
    global engine
    try:
        engine = pyttsx3.init()
        return engine
    except Exception as e:
        print(f"TTS engine initialization failed: {e}")
        return None

def speak_text(text):
    """
    Speaks the given text using the initialized pyttsx3 engine.
    Make sure to call initialize_tts() before calling this function for the first time.

    Args:
        text (str): The text to speak.
    """
    global engine
    if engine is None:
        print("TTS engine not initialized. Call initialize_tts() first.")
        return

    try:
        engine.say(text)
        engine.runAndWait() # Block until speaking finishes
    except Exception as e:
        print(f"TTS speaking error: {e}")


if __name__ == '__main__':
    # Example usage (testing TTS directly)
    tts_engine = initialize_tts()
    if tts_engine:
        print("TTS Engine initialized successfully.")
        sample_text = "This is a test of the text to speech system."
        print(f"Speaking: '{sample_text}'")
        speak_text(sample_text)
    else:
        print("TTS Engine failed to initialize. Cannot test speaking.")
