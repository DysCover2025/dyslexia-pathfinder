
import React from 'react';
import { FontPreference } from './ReaderInterface';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';

interface FontSettingsProps {
  preferences: FontPreference;
  setPreferences: React.Dispatch<React.SetStateAction<FontPreference>>;
}

export const FontSettings: React.FC<FontSettingsProps> = ({ preferences, setPreferences }) => {
  const handleChange = (key: keyof FontPreference, value: any) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-4 space-y-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Reading Preferences</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Font</h4>
          <RadioGroup 
            value={preferences.fontFamily} 
            onValueChange={(value) => handleChange('fontFamily', value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="lexend" id="lexend" />
              <Label htmlFor="lexend" className="font-['Lexend']">Lexend (Dyslexia-friendly)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="opendyslexic" id="opendyslexic" />
              <Label htmlFor="opendyslexic" className="font-['OpenDyslexic']">OpenDyslexic</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="system-ui" id="system-ui" />
              <Label htmlFor="system-ui" className="font-sans">System Default</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Font Size</h4>
          <RadioGroup 
            value={preferences.fontSize} 
            onValueChange={(value) => handleChange('fontSize', value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="small" id="small" />
              <Label htmlFor="small" className="text-sm">Small</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="text-base">Medium</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="large" id="large" />
              <Label htmlFor="large" className="text-lg">Large</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="x-large" id="x-large" />
              <Label htmlFor="x-large" className="text-xl">Extra Large</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Line Spacing</h4>
          <RadioGroup 
            value={preferences.lineSpacing} 
            onValueChange={(value) => handleChange('lineSpacing', value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="normal" id="normal-line" />
              <Label htmlFor="normal-line" className="leading-normal">Normal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="relaxed" id="relaxed-line" />
              <Label htmlFor="relaxed-line" className="leading-relaxed">Relaxed</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="loose" id="loose-line" />
              <Label htmlFor="loose-line" className="leading-loose">Loose</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Letter Spacing</h4>
          <RadioGroup 
            value={preferences.letterSpacing} 
            onValueChange={(value) => handleChange('letterSpacing', value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="normal" id="normal-letter" />
              <Label htmlFor="normal-letter" className="tracking-normal">Normal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wide" id="wide-letter" />
              <Label htmlFor="wide-letter" className="tracking-wide">Wide</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="wider" id="wider-letter" />
              <Label htmlFor="wider-letter" className="tracking-wider">Wider</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Background Color</h4>
          <RadioGroup 
            value={preferences.colorTheme} 
            onValueChange={(value) => handleChange('colorTheme', value)}
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cream" id="cream" />
              <Label htmlFor="cream" className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#FEF7CD] mr-2 border border-gray-300"></span>
                Cream
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light-blue" id="light-blue" />
              <Label htmlFor="light-blue" className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#D3E4FD] mr-2 border border-gray-300"></span>
                Light Blue
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light-green" id="light-green" />
              <Label htmlFor="light-green" className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#F2FCE2] mr-2 border border-gray-300"></span>
                Light Green
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="light-yellow" id="light-yellow" />
              <Label htmlFor="light-yellow" className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-[#FFFACD] mr-2 border border-gray-300"></span>
                Light Yellow
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};
