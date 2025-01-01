import classNames from "classnames";

interface ButtonProps {
  size: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size, children, onClick }) => {
  const buttonClass = classNames(
    "px-3 py-1 bg-[#3B9B8B] text-white hover:bg-[#3B9B9C]  transition-colors rounded-full",
    {
      "text-sm": size === "small",
      "text-md": size === "medium",
      "text-lg": size === "large",
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
