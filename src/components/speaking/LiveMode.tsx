
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Mic, BrainCircuit, Image as ImageIcon, MicOff } from 'lucide-react';
import { FontPreference } from '../reader/ReaderInterface';

const LiveMode = () => {
  const [document, setDocument] = useState<File | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [promptImage, setPromptImage] = useState<string | null>(null);
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fontPreferences] = useState<FontPreference>({
    fontFamily: 'opendyslexic',
    fontSize: 'medium',
    lineSpacing: 'relaxed',
    letterSpacing: 'wide',
    colorTheme: 'cream'
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setDocument(files[0]);
      // Reset the input
      e.target.value = '';
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
  };

  const generatePrompt = () => {
    if (isGeneratingPrompt) return;
    
    setIsGeneratingPrompt(true);
    setPromptImage(null);
    
    // Simulate generating a prompt image
    setTimeout(() => {
      // In a real implementation, this would be a generated image relevant to the current topic
      setPromptImage('https://picsum.photos/600/400');
      setIsGeneratingPrompt(false);
    }, 2000);
  };

  return (
    <div className={`min-h-[80vh] glass-panel rounded-2xl p-6 ${getColorClass(fontPreferences.colorTheme)}`}>
      <h2 className="text-2xl font-heading font-semibold mb-6">Live Speaking Assistant</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/50 rounded-lg p-4">
            <h3 className="text-lg font-heading font-medium mb-3 flex items-center">
              <Upload className="w-5 h-5 mr-2" />
              Reference Materials
            </h3>
            
            {document ? (
              <div>
                <p className="mb-2">Uploaded: {document.name}</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Change File
                </Button>
              </div>
            ) : (
              <div>
                <p className="mb-3">Upload your presentation or notes as reference for better prompts.</p>
                <Button 
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Select File
                </Button>
              </div>
            )}
            
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept=".txt,.pdf,.doc,.docx,.ppt,.pptx"
            />
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <h3 className="text-lg font-heading font-medium mb-3 flex items-center">
              <Mic className="w-5 h-5 mr-2" />
              Speech Listening
            </h3>
            
            <div>
              <p className="mb-3">
                {isListening 
                  ? "Actively listening to your speech to provide contextual assistance when needed." 
                  : "Start the listener when you begin your presentation."}
              </p>
              <Button 
                variant={isListening ? "destructive" : "default"}
                onClick={toggleListening}
                className="w-full sm:w-auto"
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
            </div>
          </div>
          
          <div className="bg-white/50 rounded-lg p-4">
            <h3 className="text-lg font-heading font-medium mb-3 flex items-center">
              <BrainCircuit className="w-5 h-5 mr-2" />
              Prompt Assistance
            </h3>
            
            <div>
              <p className="mb-3">
                Lost your train of thought? Press the button below to generate a 
                visual prompt based on what you should be discussing.
              </p>
              <Button 
                onClick={generatePrompt}
                disabled={isGeneratingPrompt || !document}
                className="w-full sm:w-auto"
              >
                {isGeneratingPrompt ? (
                  "Generating..."
                ) : (
                  <>
                    <ImageIcon className="w-5 h-5 mr-2" />
                    Generate Visual Prompt
                  </>
                )}
              </Button>
              {!document && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please upload reference materials first.
                </p>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white/50 rounded-lg p-4 h-full">
            <h3 className="text-lg font-heading font-medium mb-3 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2" />
              Visual Prompt
            </h3>
            
            {promptImage ? (
              <div className="flex flex-col items-center">
                <img 
                  src={promptImage} 
                  alt="Visual prompt" 
                  className="rounded-lg mb-3 max-w-full max-h-[400px] object-contain" 
                />
                <p className="text-center">
                  This visual represents key points you should be discussing right now.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-[300px] text-center">
                <ImageIcon className="w-16 h-16 text-muted-foreground mb-4" />
                <p>
                  When you need a prompt, click the "Generate Visual Prompt" button 
                  to see a helpful image here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const getColorClass = (colorTheme: string): string => {
  switch (colorTheme) {
    case 'cream':
      return 'bg-[#FEF7CD]/80 text-gray-800';
    case 'light-blue':
      return 'bg-[#D3E4FD]/80 text-gray-800';
    case 'light-green':
      return 'bg-[#F2FCE2]/80 text-gray-800';
    case 'light-yellow':
      return 'bg-[#FFFACD]/80 text-gray-800';
    default:
      return 'bg-white/85 text-gray-800';
  }
};

export default LiveMode;
