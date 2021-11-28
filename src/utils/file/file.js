export const getFileFromEvent = (e, fileIndex = 0) => {
  if (!e) {
    return null;
  }

  const files = e.target?.files;

  return files?.length ? files[fileIndex] : null;
};

export const getFileText = (file) => file?.text();
