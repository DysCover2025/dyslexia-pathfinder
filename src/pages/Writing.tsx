
import React from 'react';
import { Layout } from '../components/Layout';

const Writing = () => {
  return (
    <Layout activeTab="writing">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Writing Resources</h1>
        <p className="text-xl mb-8">
          Welcome to your personalized writing assistance tools. Explore the features below
          designed specifically to help with dyslexia-related writing challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Spelling Assistant</h2>
            <p className="mb-4">
              Get real-time spelling suggestions that understand common dyslexic spelling patterns.
            </p>
            <button className="py-2 px-4 bg-primary text-primary-foreground rounded-lg">
              Coming Soon
            </button>
          </div>
          
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Writing Organizer</h2>
            <p className="mb-4">
              Tools to help structure your thoughts and organize your writing effectively.
            </p>
            <button className="py-2 px-4 bg-primary text-primary-foreground rounded-lg">
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Writing;
