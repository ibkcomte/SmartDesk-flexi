import React from "react";
interface SkillsItemProps {
  skill: string;
  percentage: number;
  description: string;
}

const SkillsItem: React.FC<SkillsItemProps> = ({ skill, percentage, description }) => {
  const markerPosition = `${percentage}%`;

  return (
    <div className="text-center">
      <div className="flex justify-between items-end mb-4 px-2">
        <h3 className="text-2xl font-bold text-gray-700">{skill}</h3>
        <span className="text-xl font-extrabold text-[#00CED1]">{percentage}%
        </span>
      </div>

       <p className="text-sm text-gray-500 mb-8 leading-relaxed px-2">{description}</p>
      
      <div className="relative h-px bg-gray-300 mx-auto w-full max-w-sm">
        <div
          className="absolute top-0 left-0 h-px bg-[#00CED1]"
          style={{ width: markerPosition }}
        ></div>

        
        <div
          className="absolute -top-2 w-4 h-4 rounded-full bg-[#00CED1] border-2 border-white shadow-md"
          style={{ left: markerPosition, transform: "translateX(-50%)" }}
        ></div>
      </div>
    </div>
  );
};

export default SkillsItem;