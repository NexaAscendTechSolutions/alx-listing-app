import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ label, onClick, type = "button" }) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default Button;
