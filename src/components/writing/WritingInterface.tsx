
import React, { useState, useRef } from 'react';
import { FileUpload } from '../reader/FileUpload';
import { MessageList } from '../reader/MessageList';
import { InputArea } from './InputArea';
import { FontSettings } from '../reader/FontSettings';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FontPreference } from '../reader/ReaderInterface';

export type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const WritingInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'system',
      content: 'Upload a document or enter text to get professional writing feedback.'
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
        content: 'Here is professional feedback on your writing:\n\n• Your text would sound more professional by using more formal language.\n• Consider revising this sentence: "I think that maybe we could possibly do this."\n• Grammar issue: There\'s a subject-verb agreement error in paragraph 2.\n• Suggested alternative: "This approach would be more effective for achieving our goals."'
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
        content: `I've analyzed ${file.name} and found ways to improve the writing:\n\n• The document has 3 grammar issues that need attention.\n• The introduction would be stronger with a clearer thesis statement.\n• Consider replacing casual phrases like "a lot" with specific quantities.\n• Highlighted sections with passive voice could be rewritten in active voice for more impact.`
      };
      setMessages((prev) => [...prev, response]);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className={`h-[80vh] flex flex-col glass-panel rounded-2xl p-6 ${getColorClass(fontPreferences.colorTheme)}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-heading font-semibold">Writing Assistant</h2>
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

export default WritingInterface;
