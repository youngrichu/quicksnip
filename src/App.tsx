import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Banner from "./layouts/Banner";
import { useState } from "react";
import Button from "./components/Button";
import { CopyIcon, ExpandIcon } from "./components/Icons";
import slugify from "./utils/slugify";
import { useLanguages } from "./hooks/useLanguages";
import { useCategories } from "./hooks/useCategories";
import { useSnippets } from "./hooks/useSnippets";

type LanguageType = {
  language: string;
  icon: string;
};

type SnippetType = {
  title: string;
  description: string;
  code: string;
  tags: string[];
  author: string;
};

const App = () => {
  const [language, setLanguage] = useState<LanguageType>({
    language: "Sass",
    icon: "/icons/sass.svg",
  });
  const [category, setCategory] = useState<string>("");
  const [snippet, setSnippet] = useState<SnippetType>();

  const { fetchedLanguages } = useLanguages();
  const { fetchedCategories } = useCategories(language.language);
  const { fetchedSnippets } = useSnippets(language.language, category);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const language = fetchedLanguages.find(
      (lan) => slugify(lan.language) === slugify(event.target.value)
    );
    if (language) {
      setLanguage(language);
    }
  };

  return (
    <>
      {/* <SnippetModal /> */}
      <div className="container flow" data-flow-space="xl">
        <Header />
        <Banner />
        <main className="main">
          <aside className="sidebar flow">
            <select
              id="languages"
              className="language-switcher"
              onChange={handleLanguageChange}
            >
              {fetchedLanguages.map(({ language }) => (
                <option key={language} value={slugify(language)}>
                  {language}
                </option>
              ))}
            </select>
            <ul role="list" className="categories">
              {fetchedCategories.map((name) => (
                <li className="category">
                  <button onClick={() => setCategory(name)}>{name}</button>
                </li>
              ))}
            </ul>
          </aside>
          <section className="flow">
            <h2 className="section-title">{category}</h2>
            <ul role="list" className="snippets">
              {fetchedSnippets.map((snippet) => (
                <li className="snippet">
                  <div className="snippet__preview">
                    <img src={language.icon} alt={language.language} />
                    <Button isIcon={true} className="snippet__copy">
                      <CopyIcon />
                    </Button>
                  </div>

                  <div className="snippet__content">
                    <h3 className="snippet__title">{snippet.title}</h3>
                    <Button isIcon={true}>
                      <ExpandIcon />
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
