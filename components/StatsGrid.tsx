
import React, { useEffect, useState } from 'react';

const StatsGrid: React.FC = () => {
  const [stats, setStats] = useState({ ideas: 2500, votes: 50000 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/public/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K+';
    }
    return num.toString();
  };

  return (
    <section className="bg-white dark:bg-[#121B35] py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-slate-50 dark:bg-[#182137] border border-gray-100 dark:border-transparent rounded-lg shadow-sm dark:shadow-xl animate-fade-in-up">
          <div className="text-indigo-600 dark:text-indigo-400 text-5xl mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
          </div>
          <p className="text-indigo-600 dark:text-indigo-400 text-4xl font-bold">{formatNumber(stats.ideas)}</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Ideas Validated</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-[#182137] border border-gray-100 dark:border-transparent rounded-lg shadow-sm dark:shadow-xl animate-fade-in-up delay-100">
          <div className="text-indigo-600 dark:text-indigo-400 text-5xl mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a3 3 0 015.356-1.857M17 20h2m-4 0H7m6 0h-2M4 12H2m10 0h10m-4 0h-2M4 18H2m10 0h10m-4 0h-2M4 6H2m10 0h10m-4 0h-2" /></svg>
          </div>
          <p className="text-indigo-600 dark:text-indigo-400 text-4xl font-bold">{formatNumber(stats.votes)}</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Votes & Feedback</p>
        </div>
        <div className="p-6 bg-slate-50 dark:bg-[#182137] border border-gray-100 dark:border-transparent rounded-lg shadow-sm dark:shadow-xl animate-fade-in-up delay-200">
          <div className="text-indigo-600 dark:text-indigo-400 text-5xl mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <p className="text-indigo-600 dark:text-indigo-400 text-4xl font-bold">78%</p>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Launch Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsGrid;
