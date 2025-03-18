
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mic, Send, Upload, MicOff, Volume2, VolumeX } from 'lucide-react';

interface InputAreaProps {
  onSendMessage: (content: string) => void;
  onFileSelect: () => void;
  isProcessing: boolean;
}

export const InputArea: React.FC<InputAreaProps> = ({ 
  onSendMessage, 
  onFileSelect,
  isProcessing 
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSendMessage(inputValue);
    setInputValue('');
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simulate voice input for demo
      setTimeout(() => {
        setInputValue(prev => prev + 'Voice input would appear here for editing and feedback.');
        setIsListening(false);
      }, 3000);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      // Simulate reading for demo
      setTimeout(() => {
        setIsSpeaking(false);
      }, 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-auto">
      <div className="border rounded-lg focus-within:ring-2 focus-within:ring-primary focus-within:border-primary overflow-hidden">
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type or paste your text for professional writing feedback..."
          className="min-h-[100px] border-none focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
        />
        <div className="flex items-center justify-between p-2 bg-muted/30">
          <div className="flex space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={toggleListening}
              className={isListening ? 'bg-red-100' : ''}
            >
              {isListening ? (
                <MicOff className="w-5 h-5 mr-2" />
              ) : (
                <Mic className="w-5 h-5 mr-2" />
              )}
              {isListening ? 'Stop' : 'Voice'}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={toggleSpeaking}
              className={isSpeaking ? 'bg-blue-100' : ''}
            >
              {isSpeaking ? (
                <VolumeX className="w-5 h-5 mr-2" />
              ) : (
                <Volume2 className="w-5 h-5 mr-2" />
              )}
              {isSpeaking ? 'Stop' : 'Listen'}
            </Button>
            
            <Button 
              type="button" 
              variant="outline" 
              size="sm" 
              onClick={onFileSelect}
            >
              <Upload className="w-5 h-5 mr-2" />
              Upload
            </Button>
          </div>
          
          <Button 
            type="submit" 
            size="sm" 
            disabled={isProcessing || !inputValue.trim()}
          >
            <Send className="w-5 h-5 mr-2" />
            Get Feedback
          </Button>
        </div>
      </div>
    </form>
  );
};
