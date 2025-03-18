
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, List, BookText, Send } from 'lucide-react';
import { FontPreference } from '../reader/ReaderInterface';
import { Textarea } from '@/components/ui/textarea';

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
  const [userQuery, setUserQuery] = useState('');
  const [responses, setResponses] = useState<{question: string, answer: string}[]>([]);
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
      
      // Extract file extension to customize the response
      const extension = file.name.split('.').pop()?.toLowerCase();
      
      setTimeout(() => {
        setDocument({
          id: '1',
          name: file.name,
          content: 'Uploaded document content would be processed here...'
        });
        
        // Generate suggestions based on file type
        if (extension === 'pptx' || extension === 'ppt') {
          setSuggestions([
            {
              id: '1',
              title: 'Opening statements',
              points: [
                'Begin with the surprising statistic that 1 in 5 people have dyslexia - this will grab attention',
                'Share a brief personal connection to accessibility challenges',
                'Clearly state your presentation goal: "Today I'll show how DysCover makes information accessible to everyone"'
              ]
            },
            {
              id: '2',
              title: 'Key presentation points',
              points: [
                'When discussing the Reading Assistant, emphasize how it transforms complex documents into accessible formats',
                'For the Writing Assistant, showcase the before/after example on slide 7',
                'The Speaking Assistant section should include a live demonstration of the prompting feature',
                'Address the common objection about cost by highlighting the free tier options'
              ]
            },
            {
              id: '3',
              title: 'Closing and call to action',
              points: [
                'Recap the three main benefits: reading assistance, writing improvement, and speaking support',
                'Invite audience to sign up for the beta program using the QR code',
                'End with the inclusive vision statement: "Information accessibility isn't just for some - it's for everyone"'
              ]
            }
          ]);
        } else if (extension === 'docx' || extension === 'doc') {
          setSuggestions([
            {
              id: '1',
              title: 'Key discussion points',
              points: [
                'Open by referencing the accessibility statistics from page 3 of your document',
                'Explain how the technical specifications on page 5 translate to real user benefits',
                'Discuss the implementation timeline with focus on the quick-win features',
                'Address the budget considerations with the ROI data from page 12'
              ]
            },
            {
              id: '2',
              title: 'Supporting evidence to mention',
              points: [
                'The user testing results show a 42% improvement in reading comprehension',
                'Quote the testimonial from Dr. Johnson about educational applications',
                'Reference the case study of implementation at Northeast University',
                'Share the accessibility compliance standards met by the platform'
              ]
            },
            {
              id: '3',
              title: 'Response preparation for questions',
              points: [
                'For technical questions, refer to the architecture diagram on page 8',
                'If asked about deployment timeline, reference the phased approach in section 4',
                'Have the competitor comparison chart ready to display if asked about alternatives',
                'Be prepared to elaborate on the customization options for enterprise clients'
              ]
            }
          ]);
        } else if (extension === 'pdf') {
          setSuggestions([
            {
              id: '1',
              title: 'Main talking points from the report',
              points: [
                'Highlight the key finding that dyslexia-friendly interfaces improved user retention by 37%',
                'Explain the three core technology innovations described in section 2',
                'Discuss the market opportunity using the geographical data from page 15',
                'Present the funding requirements with reference to the ROI projections'
              ]
            },
            {
              id: '2',
              title: 'Visual elements to reference',
              points: [
                'When discussing user demographics, point to the pie chart on page 7',
                'Use the before/after screenshots to demonstrate the interface improvements',
                'The timeline infographic on page 19 shows development milestones clearly',
                'The feature comparison table provides strong competitive positioning'
              ]
            },
            {
              id: '3',
              title: 'Strategic emphasis points',
              points: [
                'Stress the proprietary algorithm that differentiates our approach from competitors',
                'Emphasize the cross-platform compatibility as a major selling point',
                'Highlight the partnership opportunities outlined in the appendix',
                'Conclude with the three-year growth projections from the executive summary'
              ]
            }
          ]);
        } else {
          setSuggestions([
            {
              id: '1',
              title: 'General presentation structure',
              points: [
                'Begin with a compelling statement about accessibility challenges in digital content',
                'Structure your talk around the three core benefits: comprehension, confidence, and convenience',
                'Include a brief demonstration of at least one feature in action',
                'End with a clear invitation to try the platform'
              ]
            },
            {
              id: '2',
              title: 'Engagement techniques',
              points: [
                'Ask the audience a question about their experience with accessibility tools',
                'Include a brief interactive moment where attendees can experience a simulation',
                'Share a brief success story that illustrates the impact',
                'Use comparisons to familiar technologies to help explain new concepts'
              ]
            },
            {
              id: '3',
              title: 'Technical aspects to cover',
              points: [
                'Briefly explain how the dyslexia-friendly font and color options were selected',
                'Touch on the voice recognition technology that powers the speech features',
                'Mention the AI summarization capabilities without getting too technical',
                'Highlight the customization options available to different users'
              ]
            }
          ]);
        }
        
        setIsLoading(false);
      }, 2000);
      
      // Reset the input
      e.target.value = '';
    }
  };
  
  const handleQuerySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;
    
    const question = userQuery;
    setUserQuery('');
    setIsLoading(true);
    
    // Generate a response based on the user's query
    setTimeout(() => {
      let answer = '';
      
      if (question.toLowerCase().includes('script') || question.toLowerCase().includes('talk')) {
        answer = "Here's a sample script section based on your document:\n\n\"Today I'm excited to share how DysCover is transforming information accessibility. Our three-part solution addresses reading challenges with customizable interfaces, improves writing with targeted feedback, and supports verbal communication with real-time assistance. As you can see from the research data, these tools have demonstrated a 40% improvement in information processing for users with dyslexia and learning differences.\"";
      } 
      else if (question.toLowerCase().includes('data') || question.toLowerCase().includes('statistics')) {
        answer = "Key statistics you might want to include:\n\n• 15-20% of the population has some form of dyslexia or reading difference\n• Users reported 42% less reading fatigue with customized text display\n• Writing assistance improved professional communication scores by 38%\n• 87% of beta testers reported feeling more confident in professional settings\n\nThese numbers can be powerful when explaining the impact of the solution.";
      }
      else if (question.toLowerCase().includes('example') || question.toLowerCase().includes('demonstration')) {
        answer = "For an effective demonstration:\n\n1. Show a complex document before and after processing through the Reading Assistant\n2. Highlight the voice features by narrating a paragraph and showing the transcription\n3. Demonstrate the Live Assistant by pretending to lose your train of thought, then pressing the prompt button\n\nA visual comparison is particularly effective for audiences to understand the value.";
      }
      else {
        answer = "Based on your document and question, I suggest:\n\n• Frame your presentation around the key challenge of information accessibility in professional settings\n• Use the structure suggested in the talking points, with personal anecdotes to illustrate each feature\n• When discussing the technical aspects, use analogies to familiar technologies\n• Prepare 2-3 specific examples of how the tool transforms difficult content into accessible formats\n\nWould you like me to elaborate on any specific part of your presentation?";
      }
      
      setResponses(prev => [...prev, {question, answer}]);
      setIsLoading(false);
    }, 1500);
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
          
          {/* Add ability for users to ask questions */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-heading font-semibold mb-4">
              Ask for More Guidance
            </h3>
            
            <form onSubmit={handleQuerySubmit} className="space-y-4">
              <Textarea
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder="Ask for specific advice like 'Help me create a script for the introduction' or 'What statistics should I emphasize?'"
                className="min-h-[100px] w-full"
              />
              <Button 
                type="submit" 
                disabled={isLoading || !userQuery.trim()} 
                className="flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                Get Advice
              </Button>
            </form>
            
            {/* Display responses to user queries */}
            {responses.length > 0 && (
              <div className="mt-6 space-y-4">
                {responses.map((item, index) => (
                  <div key={index} className="bg-white/60 rounded-lg p-4">
                    <p className="font-medium text-primary mb-2">Your question: {item.question}</p>
                    <div className="whitespace-pre-line">{item.answer}</div>
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
