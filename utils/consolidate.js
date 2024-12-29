import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "fs";
import { basename, join } from "path";

const dataDir = "public/data";
const outputFile = "public/consolidated/all_snippets.json";

const files = readdirSync(dataDir).filter(
  (f) => f.endsWith(".json") && f !== "_index.json"
);

const consolidated = [];

files.forEach((file) => {
  const language = basename(file, ".json");
  const content = JSON.parse(readFileSync(join(dataDir, file)));

  content.forEach((category) => {
    consolidated.push({
      language,
      categoryName: category.categoryName,
      snippets: category.snippets,
    });
  });
});

mkdirSync("public/consolidated", { recursive: true });
writeFileSync(outputFile, JSON.stringify(consolidated, null, 2));
