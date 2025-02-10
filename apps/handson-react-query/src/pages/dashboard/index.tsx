import React from 'react';
import LoopComponent from './components/LoopComponent';
import GuidComponent from './components/GuidComponent';

const Dashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p>Welcome to the dashboard.</p>

      <h2>Testing loop queries using useQuery</h2>
      <LoopComponent />

      <h2>Testing query invalidation using useQuery</h2>
      <GuidComponent />
    </div>
  );
};

export default Dashboard;