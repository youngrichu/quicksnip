import { useAppContext } from "../contexts/AppContext";
import { useLanguages } from "../hooks/useLanguages";

const LanguageSelector = () => {
  const { language, setLanguage, setCategory } = useAppContext();
  const { fetchedLanguages, loading, error } = useLanguages();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage = fetchedLanguages.find(
      (language) => language.lang === event.target.value
    );
    if (selectedLanguage) {
      setLanguage(selectedLanguage);
      setCategory("");
    }
  };

  if (loading) {
    return <p>Loading languages...</p>;
  }

  if (error) {
    return <p>Error fetching languages: {error}</p>;
  }

  return (
    <select
      id="languages"
      className="language-selector"
      onChange={handleLanguageChange}
      value={language?.lang || "CSS"}
    >
      {fetchedLanguages.map((language, idx) => (
        <option key={idx} value={language.lang}>
          {language.lang}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
