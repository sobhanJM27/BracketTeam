export const getBaseURL = (lang) => {
  const BASE_URLS = {
    en: "https://bracketnet.liara.run/",
    fa: "https://bracketnet.liara.run/",
    // en: "https://bracketteam.chbk.run/fa",
    // fa: "https://bracketteam.chbk.run/en",
  };
  return BASE_URLS[lang] || BASE_URLS.fa;
};
// https://bracketnet.liara.run/uploads/img/2024/10/11\1728594995984.png
