import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Logo = () => {
  return (
    <a href="/" className="logo">
      <LogoIcon />
      <span>QuickSnip</span>
    </a>
  );
};

export default Logo;
