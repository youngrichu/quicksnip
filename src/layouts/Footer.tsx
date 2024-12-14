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
            Built by{" "}
            <a
              href="https://github.com/dostonnabotov"
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              Technophile
            </a>
            , and powered by awesome{" "}
            <a
              href="https://github.com/dostonnabotov/quicksnip"
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              community
            </a>
            .
          </p>
        </div>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Add your own snippet
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Edit this page on GitHub
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                See the community
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Support this project
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
