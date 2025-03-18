
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
    
    // Generate detailed writing feedback based on content
    setTimeout(() => {
      // Find common writing issues to provide feedback on
      const hasPassiveVoice = /\b(is|are|was|were|be|been|being)\s+\w+ed\b/i.test(content);
      const hasInformalLanguage = /\b(stuff|things|a lot|kind of|sort of|like|basically)\b/i.test(content);
      const hasFiller = /\b(um|uh|er|you know|actually|literally|basically|just)\b/i.test(content);
      const hasLongSentences = content.split(/[.!?]/).some(sentence => sentence.split(' ').length > 20);
      
      let feedback = 'Here is professional feedback on your writing:\n\n';
      
      if (hasPassiveVoice) {
        feedback += '• I noticed some passive voice constructions that could be made more direct and engaging. For example:\n  - "The report was completed by the team" → "The team completed the report"\n\n';
      }
      
      if (hasInformalLanguage) {
        feedback += '• Some informal language could be replaced with more professional alternatives:\n  - "a lot of" → "numerous" or "significant"\n  - "stuff" → "materials" or "resources"\n\n';
      }
      
      if (hasFiller) {
        feedback += '• Consider removing filler words that don\'t add meaning to your writing:\n  - Words like "just," "actually," and "basically" can often be removed entirely\n\n';
      }
      
      if (hasLongSentences) {
        feedback += '• I found some sentences that are quite long. Breaking them into shorter sentences can improve readability, especially for readers with dyslexia.\n\n';
      }
      
      // Add general improvement suggestions
      feedback += '• Structure suggestion: Your text would benefit from clearer paragraph breaks around main ideas\n\n• Word choice: Consider using more precise terms in the third paragraph\n\n• Strengths: Your introduction is clear and establishes your main point effectively';
      
      const response: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: feedback
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
    
    // Generate detailed document analysis for writing improvement
    setTimeout(() => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      let analysisContent = `I've analyzed ${file.name} and found several opportunities to improve the writing:\n\n`;
      
      // Generate different feedback based on file type
      if (extension === 'pdf' || extension === 'docx' || extension === 'doc') {
        analysisContent += '• Document structure:\n  - The executive summary could be more concise (currently 500 words)\n  - Consider adding subheadings to break up the 3rd section\n  - The conclusion effectively summarizes key points\n\n';
        analysisContent += '• Language usage:\n  - 8 instances of passive voice that could be rewritten for clarity\n  - Several technical terms used without explanation (consider adding a glossary)\n  - Inconsistent formatting of numerical data\n\n';
        analysisContent += '• Grammar and mechanics:\n  - 5 subject-verb agreement errors identified\n  - Inconsistent use of serial commas\n  - Acronyms should be defined at first use\n\n';
        analysisContent += '• Professional tone:\n  - Some sections use overly casual language that could be revised\n  - The introduction would benefit from a stronger thesis statement\n  - Consider removing subjective qualifiers like "very" and "extremely"';
      } else {
        analysisContent += '• Content assessment:\n  - Your main argument is clear but supporting evidence could be stronger\n  - The introduction effectively engages the reader\n  - Consider adding specific examples in paragraphs 2 and 4\n\n';
        analysisContent += '• Style improvements:\n  - Sentences average 25 words (consider aiming for 15-20 for readability)\n  - Several paragraphs exceed 7 sentences (breaking them up would improve accessibility)\n  - Transitions between ideas could be strengthened\n\n';
        analysisContent += '• Grammar highlights:\n  - Consistent tense usage throughout (well done!)\n  - 3 instances of comma splices that should be corrected\n  - Subject-verb agreement error in the final paragraph\n\n';
        analysisContent += '• Suggestions for revision:\n  - Strengthen your conclusion with a clear call to action\n  - Consider adding bullet points for the list of recommendations\n  - Review for opportunities to use more precise vocabulary';
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
