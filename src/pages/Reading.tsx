
import React from 'react';
import { Layout } from '../components/Layout';
import ReaderInterface from '../components/reader/ReaderInterface';

const Reading = () => {
  return (
    <Layout activeTab="reading">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">DysCover Reading</h1>
        <p className="text-xl mb-8">
          Upload documents or chats to get dyslexia-friendly summaries and insights.
        </p>
        
        <ReaderInterface />
      </div>
    </Layout>
  );
};

export default Reading;
