
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
  const [currentDocumentContext, setCurrentDocumentContext] = useState<string>('');
  
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
    
    // Determine if this is a follow-up question
    const isFollowUp = messages.length > 1;
    
    setTimeout(() => {
      let responseContent = '';
      
      // If we have a document context, make the response more specific to it
      if (currentDocumentContext) {
        if (content.toLowerCase().includes('summarize')) {
          responseContent = `Based on the document you uploaded, here's a simplified summary:\n\n• The document discusses ${currentDocumentContext}\n• Key points include customizable reading interfaces and accessibility features\n• Research shows these adaptations can significantly improve reading comprehension\n\nWould you like me to elaborate on any specific section?`;
        } else if (content.toLowerCase().includes('explain') || content.toLowerCase().includes('elaborate')) {
          responseContent = `Let me explain more about that topic from your document:\n\n1. The section you're asking about covers important accessibility features\n2. It mentions how customizable interfaces benefit users with different reading needs\n3. It provides data showing 30-40% improvements in reading comprehension with proper adaptations\n\nIs there something more specific you'd like to know about this section?`;
        } else {
          responseContent = `Regarding your question about "${content}", here's what I found in your document:\n\n• This relates to the section on page 2 about reading assistance technologies\n• The document highlights how personalized settings improve reading outcomes\n• It suggests that combining visual and audio features creates the best experience\n\nCan I help clarify anything else about this topic?`;
        }
      } else {
        // General response without document context
        if (content.toLowerCase().includes('summarize')) {
          responseContent = 'Here is a simplified summary of the text:\n\n• The main point is about improving reading accessibility for people with dyslexia\n• Key features include customizable fonts, color themes, and line spacing\n• Research shows that these adaptations can improve reading speed by up to 30%\n\nWould you like me to elaborate on any specific part?';
        } else if (content.toLowerCase().includes('explain') || content.toLowerCase().includes('elaborate')) {
          responseContent = 'Let me elaborate on that topic:\n\n1. Dyslexia affects approximately 15-20% of the population\n2. Common challenges include difficulty with word recognition, spelling, and decoding\n3. Visual adaptations like using OpenDyslexic font and cream backgrounds can significantly reduce reading strain\n\nDoes this help with your question?';
        } else {
          responseContent = `I understand you're asking about "${content}". Here's what I can tell you:\n\n• This topic relates to reading comprehension and accessibility\n• The key concepts are simplified into short, clear bullet points\n• Information is presented with adequate spacing between lines for easier tracking\n\nCan I help with anything specific about this topic?`;
        }
      }
      
      // For follow-up questions, make the response acknowledge the conversation context
      if (isFollowUp) {
        responseContent = `To follow up on your previous question, ${responseContent.toLowerCase()}`;
      }
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseContent
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
    
    // Set document context based on file name to simulate actual document analysis
    setCurrentDocumentContext(`"${file.name}" which appears to be about dyslexia-friendly reading technologies`);
    
    // Generate a detailed document analysis based on file type
    setTimeout(() => {
      let analysisContent = '';
      
      // Generate response based on file extension
      const extension = file.name.split('.').pop()?.toLowerCase();
      
      if (extension === 'pdf') {
        analysisContent = `I've analyzed the PDF document "${file.name}" and created this dyslexia-friendly summary:\n\n• The document contains approximately 15 pages of content\n• Main topic: Strategies for workplace accessibility\n• Key points:\n  - Section 1 discusses legal requirements for accommodations\n  - Section 2 provides practical implementation strategies\n  - Section 3 offers case studies of successful adaptations\n\nWould you like me to focus on a specific section or explain any concept in more detail?`;
      } else if (extension === 'docx' || extension === 'doc') {
        analysisContent = `I've analyzed the Word document "${file.name}" and broken it down into these key insights:\n\n• Document length: Medium (approximately 2,500 words)\n• Structure: 4 main sections with subsections\n• Core concepts:\n  - Definition and prevalence of learning differences\n  - Educational strategies that support diverse learners\n  - Technology tools for accessibility\n  - Community resources for further support\n\nIs there a particular aspect you'd like me to elaborate on?`;
      } else if (extension === 'txt') {
        analysisContent = `I've analyzed the text file "${file.name}" and simplified it into these digestible points:\n\n• Text content: Approximately 1,200 words\n• Reading level: Moderate complexity with some technical terms\n• Main arguments:\n  - Point 1: Universal design benefits everyone, not just those with identified needs\n  - Point 2: Small adjustments can make significant differences in accessibility\n  - Point 3: Technology integration should be purposeful rather than overwhelming\n\nLet me know if you'd like more details on any section!`;
      } else {
        analysisContent = `I've analyzed "${file.name}" and created this easy-to-follow summary:\n\n• Content overview: A detailed discussion on assistive technologies\n• Key takeaways:\n  - Modern solutions are becoming more integrated and less obtrusive\n  - Mobile applications now offer significant accessibility features\n  - Cost barriers are decreasing as more mainstream products include adaptive features\n\nWould you like me to break down any specific concept further?`;
      }
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: analysisContent
      };
      
      setMessages((prev) => [...prev, response]);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className={`h-[80vh] flex flex-col glass-panel rounded-2xl p-6 ${getColorClass(fontPreferences.colorTheme)}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-heading font-semibold">DysCover Reading</h2>
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
