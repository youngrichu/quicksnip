// export const fetchLanguages = async () => {
//   try {
//     const res = await fetch("/data/index.json");
//     const data = await res.json();

//     return data.languages;
//   } catch (error) {
//     console.error("Error occured: ", error);
//   }
// };

// export const getSnippetsByLanguage = async (language: string) => {
//   try {
//     const res = await fetch(`/data/${language}.json`);
//     const data = await res.json();

//     return data;
//   } catch (error) {
//     console.error("Error occured: ", error);
//   }
// };
