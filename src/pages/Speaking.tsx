
import React from 'react';
import { Layout } from '../components/Layout';

const Speaking = () => {
  return (
    <Layout activeTab="speaking">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Speaking Resources</h1>
        <p className="text-xl mb-8">
          Welcome to your personalized speaking assistance tools. Explore the features below
          designed specifically to help with verbal expression and communication.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Pronunciation Guide</h2>
            <p className="mb-4">
              Interactive tools to help practice and improve pronunciation of difficult words.
            </p>
            <button className="py-2 px-4 bg-primary text-primary-foreground rounded-lg">
              Coming Soon
            </button>
          </div>
          
          <div className="glass-panel rounded-2xl p-6">
            <h2 className="text-2xl font-heading font-semibold mb-3">Speech Exercises</h2>
            <p className="mb-4">
              Guided exercises to build confidence in verbal communication and expression.
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

export default Speaking;
