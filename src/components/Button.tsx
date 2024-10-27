import { ReactNode } from "react";

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  children: ReactNode;
  className?: string;
};

type IconButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({
  as = "button",
  href,
  className,
  children,
  ...props
}: ButtonProps) => {
  return as === "button" ? (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  ) : (
    <a className={`button ${className}`} href={href} {...props}>
      {children}
    </a>
  );
};

export const IconButton = ({
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button className={`button--icon ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
