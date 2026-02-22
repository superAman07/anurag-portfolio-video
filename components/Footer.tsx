import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-900/[0.06] bg-white py-6">
      <div className="mx-auto flex w-[100%] flex-col items-center px-6 lg:px-8">  
        <p className="text-sm text-brand-800 tracking-[-1px]">
          © {new Date().getFullYear()} Anurag Editz, All rights reserved ®
        </p>
      </div>
    </footer>
  );
};
