
import React from 'react';
import { Layout } from '../components/Layout';
import { Button } from '@/components/ui/button';
import { FileText, Mic } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Speaking = () => {
  const navigate = useNavigate();

  return (
    <Layout activeTab="speaking">
      <div className="section-content">
        <h1 className="text-3xl font-heading font-bold mb-6">Memory and Speech Assistant</h1>
        <p className="text-xl mb-8">
          Choose an option below to get assistance with presentations and speaking tasks.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-panel rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <FileText className="w-16 h-16 mb-4 text-primary" />
              <h2 className="text-2xl font-heading font-semibold mb-3">Practice Mode</h2>
              <p className="mb-6">
                Upload your presentation or meeting materials for script suggestions and talking points.
              </p>
              <Button 
                className="px-6 py-2 text-lg" 
                onClick={() => navigate('/speaking/practice')}
              >
                Start Practice
              </Button>
            </div>
          </div>
          
          <div className="glass-panel rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center text-center">
              <Mic className="w-16 h-16 mb-4 text-primary" />
              <h2 className="text-2xl font-heading font-semibold mb-3">Live Assistance</h2>
              <p className="mb-6">
                Get real-time prompts and support during live presentations or meetings.
              </p>
              <Button 
                className="px-6 py-2 text-lg" 
                onClick={() => navigate('/speaking/live')}
              >
                Start Live Mode
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Speaking;
