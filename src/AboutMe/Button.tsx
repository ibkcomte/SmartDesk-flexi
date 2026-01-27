import React from "react";

interface ButtonProps {
  btnText: string;
  btnColor?: string;
  padding?: string;
  btnBgColor?: string;
  onClick?: () => void;
  className?: string;
}

// 2. Apply the interface to your component
const Button = ({
  btnText,
  btnColor = "text-white", // You can set default values here
  padding = "px-4 py-2",
  btnBgColor = "bg-blue-600",
  onClick,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`font-semibold rounded-md transition-all ${btnBgColor} ${padding} ${btnColor} ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
