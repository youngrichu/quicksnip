import { MouseEventHandler, ReactNode } from "react";

// TODO: separate LinkButton from Button for clarity

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  className?: string;
  isIcon?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const Button = ({
  as = "button",
  href,
  className,
  children,
  isIcon,
  onClick,
  ...props
}: ButtonProps) => {
  return as === "button" ? (
    <button
      className={`button ${isIcon ? "button--icon" : ""} ${className || ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  ) : (
    <a className={`button ${className || ""}`} href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;
