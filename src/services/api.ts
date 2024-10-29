import slugify from "../utils/slugify";

export const fetchLanguages = async ({ params }: any) => {
  try {
    const res = await fetch(`/data/${params.language}.json`);
    if (!res.ok) {
      throw new Error("Failed to fetch languages");
    }

    console.log(`/data/${params.language}.json`);
    console.log("data fetch");

    const data = await res.json();
    console.log(data);

    return data;
  } catch (error) {
    return new Error(`Error occured: ${error}`);
  }
};

export const fetchCategories = async (params: any) => {
  try {
    const res = await fetch(`/data/${params.language}.json`);
    const data = await res.json();

    const newData = data.map((category: any) => category.categoryName);

    console.log(newData);
    return newData;
  } catch (error) {
    return new Error(`Error occured: ${error}`);
  }
};

export const fetchSnippets = async (params: any) => {
  try {
    const res = await fetch(`/data/${params.language}.json`);
    const data = await res.json();

    const categoryData = data.find(
      (cat: any) => slugify(cat.categoryName) === slugify(params.category)
    );
    return categoryData?.snippets.find(
      (snip: any) => slugify(snip.title) === params.snippet
    );
  } catch (error) {
    console.error("Error occured: ", error);
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
