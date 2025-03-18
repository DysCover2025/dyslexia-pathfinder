
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Mic, MicOff, Lightbulb, ImageIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const LiveMode = () => {
  const [isListening, setIsListening] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<string>('');
  const [promptImage, setPromptImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleListening = () => {
    setIsListening(!isListening);
    
    // Simulate speech recognition
    if (!isListening) {
      // Clear previous transcript when starting new recording
      setTranscript('');
      
      // Simulate receiving speech input over time
      const speechParts = [
        "So as I was explaining earlier, the key features of the DysCover platform include...",
        " customizable reading interfaces that adapt to individual needs...",
        " writing assistance with professional feedback...",
        " and um... the speaking support... with...",
      ];
      
      let currentText = '';
      speechParts.forEach((part, index) => {
        setTimeout(() => {
          currentText += part;
          setTranscript(currentText);
          
          // After the last part, simulate the user getting stuck
          if (index === speechParts.length - 1) {
            // Transcript remains showing the incomplete thought
          }
        }, (index + 1) * 2000);
      });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setUploadedFile(files[0]);
      // Reset the input
      e.target.value = '';
    }
  };

  const generatePrompt = () => {
    // Set loading state for prompt generation
    setCurrentPrompt("Generating prompt...");
    setPromptImage(null);
    
    // Simulate processing and generating a prompt
    setTimeout(() => {
      if (uploadedFile) {
        // Generate prompt based on uploaded content
        setCurrentPrompt("The speaking assistant provides real-time memory aid. Based on your presentation about DysCover, you were explaining the three core features. The third feature you were describing is the Speaking Assistant, which offers live prompting during presentations and meetings to help users who lose their train of thought.");
      } else {
        // Generate generic prompt based on transcript
        setCurrentPrompt("The speaking assistant helps when you lose your train of thought. You were discussing the speaking support feature. You could continue by explaining how it provides real-time prompts during presentations and captures key points for later reference.");
      }
      
      // Generate visual prompt
      setPromptImage('/placeholder.svg');
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] glass-panel rounded-2xl p-6 bg-[#FEF7CD]/80 text-gray-800">
      <h2 className="text-2xl font-heading font-semibold mb-6">Live Speaking Assistant</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-heading font-medium mb-4">Preparation</h3>
            <p className="mb-4">Upload your presentation materials for more targeted assistance during your talk.</p>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center"
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload Materials
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                className="hidden"
                accept=".txt,.pdf,.doc,.docx,.ppt,.pptx"
              />
              
              {uploadedFile && (
                <span className="text-sm text-green-600">
                  Uploaded: {uploadedFile.name}
                </span>
              )}
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-xl font-heading font-medium mb-4">Active Listening</h3>
            <p className="mb-4">Start the assistant to analyze your speech in real-time.</p>
            
            <Button 
              onClick={toggleListening}
              className={`flex items-center ${isListening ? 'bg-red-500 hover:bg-red-600' : ''}`}
            >
              {isListening ? (
                <>
                  <MicOff className="w-5 h-5 mr-2" />
                  Stop Listening
                </>
              ) : (
                <>
                  <Mic className="w-5 h-5 mr-2" />
                  Start Listening
                </>
              )}
            </Button>
            
            {isListening && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Currently hearing:</p>
                <div className="bg-white/70 rounded-lg p-3 min-h-[80px]">
                  {transcript || "Waiting for speech..."}
                </div>
              </div>
            )}
          </Card>
        </div>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-heading font-medium mb-4">Memory Assistance</h3>
            <p className="mb-4">
              Press the button when you need a prompt to continue your presentation.
            </p>
            
            <Button 
              onClick={generatePrompt}
              className="flex items-center w-full justify-center py-8"
              disabled={!isListening && !uploadedFile}
            >
              <Lightbulb className="w-6 h-6 mr-2" />
              <span className="text-lg">I Need a Prompt</span>
            </Button>
          </Card>
          
          {currentPrompt && (
            <Card className="p-6 bg-primary/10">
              <div className="flex items-start space-x-2 mb-4">
                <Lightbulb className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-xl font-heading font-medium">Your Prompt</h3>
              </div>
              
              <p className="mb-4 leading-relaxed tracking-wide">
                {currentPrompt}
              </p>
              
              {promptImage && (
                <div className="mt-4">
                  <div className="flex items-center mb-2">
                    <ImageIcon className="w-4 h-4 mr-2 text-primary" />
                    <span className="text-sm font-medium">Visual Prompt</span>
                  </div>
                  <div className="bg-white rounded-lg p-2">
                    <img 
                      src={promptImage} 
                      alt="Visual prompt" 
                      className="max-h-[200px] mx-auto"
                    />
                  </div>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveMode;
