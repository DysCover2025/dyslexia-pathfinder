
import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Pen, Mic, Home } from 'lucide-react';

interface NavigationProps {
  activeTab: 'home' | 'reading' | 'writing' | 'speaking';
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab }) => {
  return (
    <nav className="flex items-center space-x-1">
      <Link 
        to="/" 
        className={`tab-button flex items-center gap-2 ${activeTab === 'home' ? 'active' : ''}`}
      >
        <Home className="w-5 h-5" />
        <span>Home</span>
      </Link>
      <Link 
        to="/reading" 
        className={`tab-button flex items-center gap-2 ${activeTab === 'reading' ? 'active' : ''}`}
      >
        <Book className="w-5 h-5" />
        <span>Reading</span>
      </Link>
      <Link 
        to="/writing" 
        className={`tab-button flex items-center gap-2 ${activeTab === 'writing' ? 'active' : ''}`}
      >
        <Pen className="w-5 h-5" />
        <span>Writing</span>
      </Link>
      <Link 
        to="/speaking" 
        className={`tab-button flex items-center gap-2 ${activeTab === 'speaking' ? 'active' : ''}`}
      >
        <Mic className="w-5 h-5" />
        <span>Speaking</span>
      </Link>
    </nav>
  );
};
