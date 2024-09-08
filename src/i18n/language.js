export const getBaseURL = (lang) => {
    const BASE_URLS = {
      en: "https://bracketteam.chbk.run/",
      fa: "https://bracketteam.chbk.run/",
      // en: "https://bracketteam.chbk.run/fa",
      // fa: "https://bracketteam.chbk.run/en",
    };
    return BASE_URLS[lang] || BASE_URLS.fa; 
  };