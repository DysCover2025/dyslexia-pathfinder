
import React from 'react';
import { Layout } from '../components/Layout';
import { PathVisual } from '../components/PathVisual';
import { ProfileSection } from '../components/ProfileSection';

const Index = () => {
  return (
    <Layout activeTab="home">
      <div className="space-y-8">
        <header className="text-center space-y-2 mb-12">
          <h1 className="text-4xl font-heading font-bold tracking-wide animate-fade-in">
            Welcome to Your Dyslexia Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Follow your personalized path to improve reading, writing, and speaking skills.
          </p>
        </header>
        
        <PathVisual />
        
        <ProfileSection />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* Reading Card */}
          <div className="glass-panel rounded-2xl p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '2s' }}>
            <h3 className="text-xl font-heading font-semibold mb-3">Reading Aid</h3>
            <p className="text-muted-foreground mb-4">
              Tools to help with text recognition, comprehension, and fluency.
            </p>
            <a 
              href="/reading" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Explore reading tools →
            </a>
          </div>
          
          {/* Writing Card */}
          <div className="glass-panel rounded-2xl p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '2.2s' }}>
            <h3 className="text-xl font-heading font-semibold mb-3">Writing Aid</h3>
            <p className="text-muted-foreground mb-4">
              Resources for spelling, grammar, and organizing your thoughts.
            </p>
            <a 
              href="/writing" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Explore writing tools →
            </a>
          </div>
          
          {/* Speaking Card */}
          <div className="glass-panel rounded-2xl p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300" style={{ animationDelay: '2.4s' }}>
            <h3 className="text-xl font-heading font-semibold mb-3">Speaking Aid</h3>
            <p className="text-muted-foreground mb-4">
              Exercises to improve verbal expression and communication.
            </p>
            <a 
              href="/speaking" 
              className="inline-block text-primary font-medium hover:underline"
            >
              Explore speaking tools →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
