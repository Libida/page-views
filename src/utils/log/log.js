import { splitStringByLineBreak, splitStringByWhitespace, getDescendingArrayFromObject } from '../array/array';

export const getLogArrayFromFileText = (fileText) => {
  const arrayWithWhitespaces = splitStringByLineBreak(fileText);
  const arrayOfKeyValues = arrayWithWhitespaces.map((f) => splitStringByWhitespace(f));
  const arrayWithFilteredEmptyData = arrayOfKeyValues.filter(item => item.length);

  return arrayWithFilteredEmptyData;
};

export const getLogDetailsFromFileText = (fileText) => {
  const fileArray = getLogArrayFromFileText(fileText);
  const pageWithIpList = new Map();

  const result = fileArray.reduce((map, item) => {
    const ip = item[1];
    const page = item[0];
    pageWithIpList[page] = pageWithIpList[page] || new Set();
    let isUniqueView = !pageWithIpList[page].has(ip);

    pageWithIpList[page].add(ip);

    return {
      ...map,
      totalViews: {
        ...map.totalViews,
        [page]: (map.totalViews && map.totalViews[page] || 0) + 1,
      },
      uniqueViews: {
        ...map.uniqueViews,
        ...(isUniqueView && { [page]: (map.uniqueViews && map.uniqueViews[page] || 0) + 1, })
      },
    };
  }, {});

  return {
    totalViews: getDescendingArrayFromObject(result.totalViews),
    uniqueViews: getDescendingArrayFromObject(result.uniqueViews),
  };
};
