import classNames from "classnames";

interface ButtonProps {
  size: "small" | "medium" | "large";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ size, children, onClick }) => {
  const buttonClass = classNames(
    "px-3 py-1 bg-primary text-white hover:bg-primary  transition-colors rounded-full",
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
