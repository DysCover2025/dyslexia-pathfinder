
import React from 'react';
import { Layout } from '../components/Layout';
import WritingInterface from '../components/writing/WritingInterface';

const Writing = () => {
  return (
    <Layout activeTab="writing">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">DysCover Writing</h1>
        <p className="text-xl mb-8">
          Get professional writing feedback and grammar assistance tailored for dyslexia.
        </p>
        
        <WritingInterface />
      </div>
    </Layout>
  );
};

export default Writing;
