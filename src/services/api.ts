import { FileType, SnippetType } from "../types";
import slugify from "../utils/slugify";

export const fetchCategories = async (params: any) => {
  try {
    const res = await fetch(`/data/${params.language}.json`);
    const data: FileType = await res.json();

    const newData = data.map((category) => category.categoryName);
    console.log(newData);

    return newData;
  } catch (error) {
    console.error("Error occured");
    return [];
  }
};

export const fetchSnippets = async (params: any) => {
  try {
    const res = await fetch(`/data/${params.language}.json`);
    const data: FileType = await res.json();

    const categoryData = data.find(
      (cat) => slugify(cat.categoryName) === slugify(params.category)
    );
    return categoryData?.snippets.find(
      (snip) => slugify(snip.title) === params.snippet
    );
  } catch (error) {
    console.error("Error occured: ", error);
    return {};
  }
};

// export const getSnippetsByLanguage = async (language: string) => {
//   try {
//     const res = await fetch(`/data/${language}.json`);
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.error("Error occured: ", error);
//   }
// };
