import { exit } from 'process';
import { parseAllSnippets, slugify } from './snippetParser.js';
import { join } from 'path';
import { copyFileSync, writeFileSync } from 'fs';

const dataPath = 'public/data/';
const indexPath = join(dataPath, '_index.json');
const iconPath = 'public/icons/';
const snippetsPath = 'snippets/';

const [ errored, snippets ] = parseAllSnippets();

if(errored) exit(1);

const index = [];
for(const [language, categories] of Object.entries(snippets)) {
    const languageSlugName = slugify(language);
    const languageIconPath = join(snippetsPath, language, 'icon.svg');

    copyFileSync(languageIconPath, join(iconPath, `${languageSlugName}.svg`));

    index.push({ lang: language, icon: `/icons/${languageSlugName}.svg` });
    
    const languageFilePath = join(dataPath, `${languageSlugName}.json`);
    
    writeFileSync(languageFilePath, JSON.stringify(categories, null, 4));
}

writeFileSync(indexPath, JSON.stringify(index, null, 4));