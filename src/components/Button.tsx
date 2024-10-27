import { ReactNode } from "react";

type ButtonProps = {
  as?: "button" | "link";
  href?: string;
  children: ReactNode;
};

const Button = ({ as = "button", href, children, ...props }: ButtonProps) => {
  return as === "button" ? (
    <button className="button" {...props}>
      {children}
    </button>
  ) : (
    <a className="button" href={href} {...props}>
      {children}
    </a>
  );
};

export default Button;
