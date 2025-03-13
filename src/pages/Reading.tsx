
import React from 'react';
import { Layout } from '../components/Layout';

const Reading = () => {
  return (
    <Layout activeTab="reading">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Reading Resources</h1>
        <p className="text-xl mb-8">
          Welcome to your personalized reading assistance tools. Explore the features below
          designed specifically to help with dyslexia-related reading challenges.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Text Reader</h2>
            <p className="mb-4">
              Our text-to-speech tool helps you process written content by hearing it read aloud.
            </p>
            <button className="py-2 px-4 bg-primary text-primary-foreground rounded-lg">
              Coming Soon
            </button>
          </div>
          
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Reading Exercises</h2>
            <p className="mb-4">
              Practice your reading skills with customized exercises that adapt to your level.
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

export default Reading;
