import Button from "../components/Button";
import { GitHubIcon } from "../components/Icons";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <Button as="link" href="https://github.com/dostonnabotov/quicksnip/">
          <GitHubIcon />
          <span>Add your snippet</span>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
