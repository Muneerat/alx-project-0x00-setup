import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  styles,
  size = "medium",
  shape = "rounded-md",
}) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  return (
    <button
      className={`${sizeClasses[size]} ${shapeClasses[shape]} ${styles} bg-blue-500 text-white`}
    >
      {title}
    </button>
  );
};

export default Button;
