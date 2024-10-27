import slugify from "../utils/slugify";

const LanguageSwitch = () => {
  const sampleData = ["JavaScript", "Python", "Java"];

  return (
    <select id="languages">
      {sampleData.map((lan) => (
        <option value={slugify(lan)}>{lan}</option>
      ))}
    </select>
  );
};

export default LanguageSwitch;
