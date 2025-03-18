
import React, { useState, useRef } from 'react';
import { FileUpload } from './FileUpload';
import { MessageList } from './MessageList';
import { InputArea } from './InputArea';
import { FontSettings } from './FontSettings';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

export type FontPreference = {
  fontFamily: 'lexend' | 'opendyslexic' | 'system-ui';
  fontSize: 'small' | 'medium' | 'large' | 'x-large';
  lineSpacing: 'normal' | 'relaxed' | 'loose';
  letterSpacing: 'normal' | 'wide' | 'wider';
  colorTheme: 'cream' | 'light-blue' | 'light-green' | 'light-yellow';
};

const ReaderInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'system',
      content: 'Upload a document or ask me a question to get started.'
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [fontPreferences, setFontPreferences] = useState<FontPreference>({
    fontFamily: 'opendyslexic',
    fontSize: 'medium',
    lineSpacing: 'relaxed',
    letterSpacing: 'wide',
    colorTheme: 'cream'
  });
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;
    
    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content
    };
    
    setMessages((prev) => [...prev, newMessage]);
    setIsProcessing(true);
    
    // Simulate response for demonstration
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Here is a simplified summary of what you asked. I have made it easier to read by breaking it into short sentences and highlighting key points.'
      };
      setMessages((prev) => [...prev, response]);
      setIsProcessing(false);
    }, 1500);
  };

  const handleFileUpload = (file: File) => {
    const fileMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: `Uploaded: ${file.name}`
    };
    
    setMessages((prev) => [...prev, fileMessage]);
    setIsProcessing(true);
    
    // Simulate processing for demonstration
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I've analyzed ${file.name}. Here's a simplified summary broken down into key points for easier reading.`
      };
      setMessages((prev) => [...prev, response]);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className={`h-[80vh] flex flex-col glass-panel rounded-2xl p-6 ${getColorClass(fontPreferences.colorTheme)}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-heading font-semibold">Reading Assistant</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="flex gap-2">
              <Settings className="w-5 h-5" />
              <span>Customize</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <FontSettings 
              preferences={fontPreferences} 
              setPreferences={setFontPreferences} 
            />
          </SheetContent>
        </Sheet>
      </div>
      
      <MessageList 
        messages={messages} 
        fontPreferences={fontPreferences} 
      />
      
      <InputArea 
        onSendMessage={handleSendMessage}
        onFileSelect={() => fileInputRef.current?.click()}
        isProcessing={isProcessing}
      />
      
      <FileUpload 
        ref={fileInputRef}
        onFileUpload={handleFileUpload}
      />
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

export default ReaderInterface;
