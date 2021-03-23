const clearString = (str, spaceToHyphen = false, keepHyphen = true) => {
  let cleanString = str
    .replace(/á|ä|à|ã|â/gi, "a")
    .replace(/é|ë|è|ê/gi, "e")
    .replace(/í|ï|ì|î/gi, "i")
    .replace(/ó|ö|ò|õ|ô/gi, "o")
    .replace(/ú|ü|ù|û/gi, "u")
    .replace(/ç/gi, "c")
    .toLowerCase();

  cleanString = !keepHyphen ? cleanString.replace(/-/g, "") : cleanString;
  cleanString = spaceToHyphen
    ? cleanString.replace(/\s/g, "-")
    : cleanString.replace(/\s/g, "");
  return cleanString;
};

export default clearString;
