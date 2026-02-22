import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-900/[0.06] bg-white py-2">
      <div className="mx-auto flex w-[100%] flex-col items-center px-6 lg:px-8">  
        <p className="text-lg text-brand-800 tracking-[-1px]">
          © {new Date().getFullYear()} AnonymousAnuraG, All rights reserved ®
        </p>
      </div>
    </footer>
  );
};
