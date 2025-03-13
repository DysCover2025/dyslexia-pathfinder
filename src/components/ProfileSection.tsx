
import React from 'react';
import { User, BookOpen, Award, Clock } from 'lucide-react';

export const ProfileSection: React.FC = () => {
  return (
    <div className="w-full max-w-lg mx-auto glass-panel rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '1.8s' }}>
      <div className="flex items-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-10 h-10 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground">
            <span className="text-sm font-medium">+</span>
          </div>
        </div>
        <div className="ml-6">
          <h2 className="text-2xl font-heading font-semibold">Your Profile</h2>
          <p className="text-muted-foreground mt-1">Complete your journey</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl">
          <BookOpen className="w-8 h-8 text-primary mb-2" />
          <p className="text-sm text-center">12 Lessons Completed</p>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl">
          <Award className="w-8 h-8 text-primary mb-2" />
          <p className="text-sm text-center">5 Skills Mastered</p>
        </div>
        
        <div className="flex flex-col items-center p-4 bg-muted/50 rounded-xl">
          <Clock className="w-8 h-8 text-primary mb-2" />
          <p className="text-sm text-center">8h Learning Time</p>
        </div>
      </div>
      
      <div className="mt-6">
        <button className="w-full py-3 px-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-heading transition-colors duration-200 ease-in-out">
          Continue Your Journey
        </button>
      </div>
    </div>
  );
};
