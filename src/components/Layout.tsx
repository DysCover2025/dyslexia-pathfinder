
import React from 'react';
import { Navigation } from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: 'home' | 'reading' | 'writing' | 'speaking';
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4 px-6 glass-panel z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-heading font-bold text-primary">
              DyslexiaPathfinder
            </h1>
          </div>
          <Navigation activeTab={activeTab} />
        </div>
      </header>
      <main className="flex-1 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      <footer className="w-full py-4 px-6 glass-panel mt-auto">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} DyslexiaPathfinder. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
