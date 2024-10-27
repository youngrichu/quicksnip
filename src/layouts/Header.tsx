import Button from "../ui/Button";
import { GitHubIcon } from "../ui/Icons";
import Logo from "../ui/Logo";
import SearchInput from "../ui/SearchInput";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <Button as="link" href="https://google.com">
          <GitHubIcon />
          <span>Add your snippet</span>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
