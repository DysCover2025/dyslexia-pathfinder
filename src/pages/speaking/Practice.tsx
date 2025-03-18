
import React from 'react';
import { Layout } from '../../components/Layout';
import PracticeMode from '../../components/speaking/PracticeMode';

const Practice = () => {
  return (
    <Layout activeTab="speaking">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Practice Mode</h1>
        <p className="text-xl mb-8">
          Upload your presentation materials to get suggested talking points and practice guidance.
        </p>
        
        <PracticeMode />
      </div>
    </Layout>
  );
};

export default Practice;
