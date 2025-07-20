import React from "react";
import type { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`bg-blue-500 text-white ${styles}`}>{title}</button>
  );
};

export default Button;
