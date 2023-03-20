import React from "react";

type ButtonProps = {
  onClick?: () => void;
  className?: string;
  label?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  label,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 ${className}`}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;