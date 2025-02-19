import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
      {children}
      <Analytics />
      <SpeedInsights />
    </main>
  );
};

export default AboutLayout;