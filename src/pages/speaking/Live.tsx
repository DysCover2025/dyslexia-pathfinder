
import React from 'react';
import { Layout } from '../../components/Layout';
import LiveMode from '../../components/speaking/LiveMode';

const Live = () => {
  return (
    <Layout activeTab="speaking">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Live Assistance</h1>
        <p className="text-xl mb-8">
          Get real-time prompts and support during live presentations or meetings.
        </p>
        
        <LiveMode />
      </div>
    </Layout>
  );
};

export default Live;
