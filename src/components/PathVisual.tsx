
import React from 'react';

export const PathVisual: React.FC = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* SVG path */}
        <svg 
          className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 z-0"
          viewBox="0 0 1200 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,50 C100,20 200,80 300,50 C400,20 500,80 600,50 C700,20 800,80 900,50 C1000,20 1100,80 1200,50" 
            stroke="hsl(var(--primary))" 
            strokeWidth="6" 
            strokeLinecap="round" 
            strokeDasharray="1000" 
            strokeDashoffset="1000" 
            className="animate-path-animation"
            pathLength="1000"
          />
        </svg>
        
        {/* Path steps */}
        <div className="relative z-10 flex justify-between">
          <div className="flex flex-col items-center">
            <div className="path-step animate-slide-up" style={{ animationDelay: '0.2s' }}>1</div>
            <p className="mt-3 font-heading animate-fade-in" style={{ animationDelay: '0.4s' }}>Assess</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="path-step animate-slide-up" style={{ animationDelay: '0.6s' }}>2</div>
            <p className="mt-3 font-heading animate-fade-in" style={{ animationDelay: '0.8s' }}>Learn</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="path-step animate-slide-up" style={{ animationDelay: '1s' }}>3</div>
            <p className="mt-3 font-heading animate-fade-in" style={{ animationDelay: '1.2s' }}>Practice</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="path-step animate-slide-up" style={{ animationDelay: '1.4s' }}>4</div>
            <p className="mt-3 font-heading animate-fade-in" style={{ animationDelay: '1.6s' }}>Master</p>
          </div>
        </div>
      </div>
    </div>
  );
};
