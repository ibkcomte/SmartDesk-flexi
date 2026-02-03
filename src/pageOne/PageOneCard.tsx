import React from "react";

interface PageOneCardProps {
  name: string;
  role: string;
}

const PageOneCard: React.FC<PageOneCardProps> = ({ name,  }) => {
  return (
    <div className="max-w-md bg-white bright:bg-slate-900 flex flex-cols-6 flex-wrap rounded-3xl shadow-teal-50  border border-slate-100 transition-transform hover:scale-[1.02]">
      <div className="flex flex-col items-center text-center">
        <h3 className="font-bold text-[70px]">Hi, I'm</h3>
        <h2 className="text-[60px] font-extrabold tracking-tighter text-[#00CED1] dark:text-[#00b3b5]">
          {name}
        </h2>
        {/* <p className="text-black font-medium text-sm mb-4 uppercase tracking-widest">
          
        </p> */}
        <p className="text-black dark:text-slate-900 leading-relaxed text-md">
          A Frontend Developer who believes that code should be as predictable
          as it is powerful. My specialty lies in building dynamic user
          interfaces using React and TypeScript, ensuring that applications are
          not only fast but also rock-solid and scalable.
        </p>
      </div>
    </div>
  );
};

export default PageOneCard;
