import { LanguageType } from "@types";

import { defaultSlugifiedSubLanguageName } from "./consts";
import { reverseSlugify, slugify } from "./slugify";

export function getLanguageDisplayName(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  return slugify(subLanguage) !== defaultSlugifiedSubLanguageName
    ? reverseSlugify(subLanguage).toLocaleUpperCase()
    : language;
}

export function getLanguageDisplayLogo(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  return slugify(subLanguage) !== defaultSlugifiedSubLanguageName
    ? `/icons/${slugify(language)}--${slugify(subLanguage)}.svg`
    : `/icons/${slugify(language)}.svg`;
}

export function getLanguageFileName(
  language: LanguageType["name"],
  subLanguage: LanguageType["subLanguages"][number]["name"]
) {
  return slugify(subLanguage) !== defaultSlugifiedSubLanguageName
    ? `/consolidated/${slugify(language)}--${slugify(subLanguage)}.json`
    : `/consolidated/${slugify(language)}.json`;
}
