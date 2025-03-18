
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, List, BookText } from 'lucide-react';
import { FontPreference } from '../reader/ReaderInterface';

type PracticeDocument = {
  id: string;
  name: string;
  content: string;
};

type Suggestion = {
  id: string;
  title: string;
  points: string[];
};

const PracticeMode = () => {
  const [document, setDocument] = useState<PracticeDocument | null>(null);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const file = files[0];
      
      // In a real implementation, you would parse the file content here
      // For this demo, we'll simulate the upload and analysis process
      setTimeout(() => {
        setDocument({
          id: '1',
          name: file.name,
          content: 'Simulated content of the uploaded document...'
        });
        
        setSuggestions([
          {
            id: '1',
            title: 'Opening statements',
            points: [
              'Begin with a compelling statistic about the market opportunity',
              'Share a brief personal story that connects to the problem you\'re solving',
              'Clearly state the main value proposition within the first minute'
            ]
          },
          {
            id: '2',
            title: 'Key presentation points',
            points: [
              'Highlight the three core features: accessibility, customization, user experience',
              'Present user testimonials to build credibility',
              'Demonstrate the app with a quick walkthrough of main functions',
              'Address potential objections proactively'
            ]
          },
          {
            id: '3',
            title: 'Closing and call to action',
            points: [
              'Summarize the key benefits and value proposition',
              'Provide clear next steps for interested partners or users',
              'End with an inspiring vision statement about the impact'
            ]
          }
        ]);
        
        setIsLoading(false);
      }, 2000);
      
      // Reset the input
      e.target.value = '';
    }
  };

  return (
    <div className={`min-h-[80vh] glass-panel rounded-2xl p-6 ${getColorClass(fontPreferences.colorTheme)}`}>
      <h2 className="text-2xl font-heading font-semibold mb-6">Practice Assistant</h2>
      
      {!document ? (
        <div className="flex flex-col items-center justify-center py-16">
          <Upload className="w-16 h-16 text-primary mb-4" />
          <h3 className="text-xl font-heading mb-4">Upload Your Presentation</h3>
          <p className="text-center mb-6 max-w-md">
            Upload your presentation slides, notes, or any materials to receive 
            suggested talking points and practice guidance.
          </p>
          <Button 
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-2"
          >
            Select File
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            className="hidden"
            accept=".txt,.pdf,.doc,.docx,.ppt,.pptx"
          />
        </div>
      ) : (
        <div className="space-y-8">
          <div className="mb-6">
            <h3 className="text-xl font-heading font-semibold mb-2">
              <BookText className="inline-block mr-2 h-5 w-5" />
              {document.name}
            </h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="mt-2"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload Different File
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
              accept=".txt,.pdf,.doc,.docx,.ppt,.pptx"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
              <List className="inline-block mr-2 h-5 w-5" />
              Suggested Talking Points
            </h3>
            
            {isLoading ? (
              <div className="text-center py-8">Loading suggestions...</div>
            ) : (
              <div className="space-y-6">
                {suggestions.map(section => (
                  <div key={section.id} className="bg-white/50 rounded-lg p-4">
                    <h4 className="text-lg font-heading font-medium mb-3">{section.title}</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {section.points.map((point, index) => (
                        <li key={index} className="leading-relaxed tracking-wide">{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
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

export default PracticeMode;
