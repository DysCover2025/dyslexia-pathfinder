
import React from 'react';
import { Message, FontPreference } from './ReaderInterface';

interface MessageListProps {
  messages: Message[];
  fontPreferences: FontPreference;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, fontPreferences }) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-6 mb-4">
      {messages.map(message => (
        <div 
          key={message.id} 
          className={`
            ${message.role === 'user' ? 'ml-auto' : 'mr-auto'} 
            ${message.role === 'assistant' ? 'bg-white/90' : 'bg-primary/10'} 
            ${message.role === 'system' ? 'mx-auto text-center italic' : ''}
            ${getFontClass(fontPreferences.fontFamily)}
            ${getFontSizeClass(fontPreferences.fontSize)}
            ${getLineSpacingClass(fontPreferences.lineSpacing)}
            ${getLetterSpacingClass(fontPreferences.letterSpacing)}
            max-w-3xl rounded-lg p-4 shadow-sm
          `}
        >
          {message.role === 'assistant' ? (
            <div className="space-y-2">
              {message.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ) : (
            <div>{message.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

// Utility functions for style classes
const getFontClass = (fontFamily: string): string => {
  switch (fontFamily) {
    case 'lexend':
      return 'font-["Lexend"]';
    case 'opendyslexic':
      return 'font-["OpenDyslexic"]';
    case 'system-ui':
      return 'font-sans';
    default:
      return 'font-["OpenDyslexic"]';
  }
};

const getFontSizeClass = (fontSize: string): string => {
  switch (fontSize) {
    case 'small': 
      return 'text-sm';
    case 'medium':
      return 'text-base';
    case 'large':
      return 'text-lg';
    case 'x-large':
      return 'text-xl';
    default:
      return 'text-base';
  }
};

const getLineSpacingClass = (lineSpacing: string): string => {
  switch (lineSpacing) {
    case 'normal':
      return 'leading-normal';
    case 'relaxed':
      return 'leading-relaxed';
    case 'loose':
      return 'leading-loose';
    default:
      return 'leading-relaxed';
  }
};

const getLetterSpacingClass = (letterSpacing: string): string => {
  switch (letterSpacing) {
    case 'normal':
      return 'tracking-normal';
    case 'wide':
      return 'tracking-wide';
    case 'wider':
      return 'tracking-wider';
    default:
      return 'tracking-wide';
  }
};
