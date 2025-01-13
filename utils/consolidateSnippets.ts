import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "fs";
import { join } from "path";
import { exit } from "process";

import { parseAllSnippets } from "./snippetParser.js";
import { AllSnippetsType, LanguageType } from "../src/types/index.js";
import { slugify } from "../src/utils/slugify.js";

const dataPath = "public/consolidated/";
const indexPath = join(dataPath, "_index.json");
const iconPath = "public/icons/";
const allSnippetsFilePath = `${dataPath}all.json`;

const { errored, languages } = parseAllSnippets();

if (errored) {
  exit(1);
}

// create the "consolidated" and "icons" directories if they don't exist (within the public directory)
mkdirSync(dataPath, { recursive: true });
mkdirSync(iconPath, { recursive: true });

// remove the all snippets file if it exists
rmSync(allSnippetsFilePath, { force: true });

const index: LanguageType[] = [];
const allSnippets: AllSnippetsType[] = [];

for (const language of languages) {
  copyFileSync(language.icon, join(iconPath, `${slugify(language.name)}.svg`));

  const subIndexes: LanguageType["subIndexes"] = [];
  for (const subLanguage of language.subLanguages) {
    const joinedName = `${slugify(language.name)}--${slugify(subLanguage.name)}`;
    const iconName = `${joinedName}.svg`;
    const subLanguageFilePath = join(dataPath, `${joinedName}.json`);

    copyFileSync(subLanguage.icon, join(iconPath, iconName));

    subIndexes.push({
      name: subLanguage.name.toUpperCase(),
      icon: `/icons/${iconName}`,
    });

    writeFileSync(
      subLanguageFilePath,
      JSON.stringify(subLanguage.categories, null, 4)
    );
  }

  index.push({
    name: language.name.toUpperCase(),
    icon: `/icons/${slugify(language.name)}.svg`,
    subIndexes,
  });

  // write the language file
  const languageFilePath = join(dataPath, `${slugify(language.name)}.json`);
  writeFileSync(languageFilePath, JSON.stringify(language.categories, null, 4));

  // update the all snippets array
  allSnippets.push({
    languageName: language.name.toUpperCase(),
    languageIcon: `/icons/${slugify(language.name)}.svg`,
    categories: language.categories,
  });
}

// generate the _index.json file
writeFileSync(indexPath, JSON.stringify(index, null, 4));

// generate the all.json file
writeFileSync(allSnippetsFilePath, JSON.stringify(allSnippets, null, 4));
