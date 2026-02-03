import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#00CED1] py-3 px-6 overflow-hidden">
  
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-12 left-10 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-white rounded-full opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-8 right-10 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-10 right-12 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center relative z-10">
        {/* Copyright Text */}
        <div className="text-center text-[#062427] font-medium space-y-1">
          <p className="text-lg">© IbkCodes 2026</p>
          <p className="text-lg">All Rights Reserved</p>
        </div>

        <button 
          onClick={scrollToTop}
          className="mt-6 md:mt-0 animate-bounce md:absolute md:right-0 flex flex-col items-center group transition-transform hover:-translate-y-1"
        >
          <div className="bg-black/10 p-2 rounded-full mb-1 group-hover:bg-black/20 transition-colors">
            <ArrowUp size={24} className="text-[#062427]" />
          </div>
          <span className="text-sm font-semibold text-[#062427]">Back To Home</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;