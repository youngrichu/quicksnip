import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Logo = () => {
  return (
    <Link to={"/"} className="logo">
      <LogoIcon />
      <span>QuickSnip</span>
    </Link>
  );
};

export default Logo;
