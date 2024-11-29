import Logo from "../components/Logo";

const Footer = () => {
  return (
    <>
      <hr className="divider" />

      <footer className="footer">
        <div className="footer__content flow" data-flow-space="sm">
          <Logo />
          <p>
            <b>QuickSnip</b> is your go-to collection of handy code snippets,
            making repetitive tasks easier and faster for developers across
            different programming languages.
          </p>
          <p>
            Built by <a href="#">Technophile</a>, and powered by awesome{" "}
            <a href="#">community</a>.
          </p>
        </div>
        <nav>
          <ul className="flow" data-flow-space="sm">
            <li>
              <a href="#">Add your own snippet</a>
            </li>
            <li>
              <a href="#">Edit this page on GitHub</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="flow" data-flow-space="sm">
            <li>
              <a href="#">See the community</a>
            </li>
            <li>
              <a href="#">Support this project</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
