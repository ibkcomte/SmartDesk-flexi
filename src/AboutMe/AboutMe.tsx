import React from 'react';
import { Code2, User } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24 font-sans text-slate-800">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          About <span className="text-[#88d317]">Me</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Text & CTA */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold leading-tight text-[#1e293b]">
            Passionate of building AI Products for problem solving
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            I'm a passionate AI developer focused on building useful tools. 
            I'm also learning project management and UI design to better plan, 
            structure, and design the tools I create.
          </p>
          
          <div className="text-slate-500 font-medium py-2">
            python, reactjs, fastapi
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-[#88d317] hover:bg-[#76b614] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-lime-100">
              Get in Touch
            </button>
            <button className="border-2 border-[#88d317] text-slate-800 hover:bg-[#f7fee7] px-8 py-3 rounded-full font-semibold transition-all">
              Download Cv
            </button>
          </div>
        </div>

        {/* Right Column: Service Cards */}
        <div className="space-y-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f7fee7] rounded-full flex items-center justify-center">
              <Code2 className="text-slate-800 w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">AI development</h4>
            <p className="text-slate-600 leading-relaxed">
              I build responsive user interfaces with HTML, CSS, JavaScript, and React, 
              and create powerful backend APIs using Python, FastAPI, and MySQL.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="w-12 h-12 bg-[#f7fee7] rounded-full flex items-center justify-center">
              <User className="text-slate-800 w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold">UI designs</h4>
            <p className="text-slate-600 leading-relaxed">
              I'm growing in AI development while learning project management and UI design. 
              I enjoy planning projects, designing user-friendly screens, and building tools 
              that solve real problems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;