import { ReactNode } from "react";

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  className?: string;
  isIcon?: boolean;
  children: ReactNode;
};

const Button = ({
  as = "button",
  href,
  className,
  children,
  isIcon,
  ...props
}: ButtonProps) => {
  return as === "button" ? (
    <button
      className={`button ${isIcon ?? "button--icon"} ${className}`}
      {...props}
    >
      {children}
    </button>
  ) : (
    <a className={`button ${className}`} href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;
