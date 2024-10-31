import { useEffect, useState } from "react";
import slugify from "../utils/slugify";
import { useNavigate } from "react-router-dom";
// import { SwitchIcon } from "./Icons";

const LanguageSwitch = () => {
  const [languages, setLanguages] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const res = await fetch(`/data/index.json`);
        if (!res.ok) {
          throw new Error("Failed to fetch languages");
        }

        const data = await res.json();
        setLanguages(data.languages);
      } catch (error) {
        console.error(`Error occurred: ${error}`);
      }
    };

    fetchLanguages();
  }, []);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = event.target.value;
    if (selectedLanguage) {
      navigate(`/${selectedLanguage}`);
    }
  };

  return (
    <select
      id="languages"
      className="language-switcher"
      onChange={handleLanguageChange}
    >
      {languages.map((language) => (
        <option key={language} value={slugify(language)}>
          {language}
        </option>
      ))}
    </select>
    // <div >
    //   <h2 className="section-title">JavaScript</h2>
    //   <SwitchIcon />
    // </div>
  );
};

export default LanguageSwitch;
