export const splitStringBySeparator = (string, separator = ' ') => {
  if (!string) return [];

  return string.toString().split(separator);
};

export const splitStringByLineBreak = (string) => splitStringBySeparator(string, '\n');

export const splitStringByWhitespace = (string) => splitStringBySeparator(string);

export const cloneDeeplyArray = (array) => JSON.parse(JSON.stringify(array));

export const getDescendingArrayFromObject = (obj) => {
    let entries = Object.entries(obj);

    return entries.sort((a, b) => b[1] - a[1]);
};
