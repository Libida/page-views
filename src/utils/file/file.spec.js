import { getFileFromEvent, getFileText } from '../file/file';

describe('File util', () => {
  const file1Mock = { file: 'file1' };
  const file2Mock = { file: 'file2' };
  const eventFilesEmptyMock = {
    target: {
      files: [],
    },
  };
  const eventFilesMock = {
    target: {
      files: [file1Mock, file2Mock],
    },
  };
  const mockFileText = 'text';

  function MockFile() {
  }

  MockFile.prototype.text = () => mockFileText;

  describe('getFileFromEvent', () => {
    test('returns null if event was not passed', () => {
      expect(getFileFromEvent()).toEqual(null);
    });

    test('returns null if event was not passed and index was passed', () => {
      expect(getFileFromEvent(null, 2)).toEqual(null);
    });

    test('returns null if there is no files in the event', () => {
      expect(getFileFromEvent({ target: {} })).toEqual(null);
    });

    test('returns null if files are empty', () => {
      expect(getFileFromEvent(eventFilesEmptyMock)).toEqual(null);
    });

    test('returns first file by index 0', () => {
      expect(getFileFromEvent(eventFilesMock, 0)).toEqual(file1Mock);
    });

    test('returns first file if no index is passed', () => {
      expect(getFileFromEvent(eventFilesMock)).toEqual(file1Mock);
    });

    test('returns second file by index 1', () => {
      expect(getFileFromEvent(eventFilesMock, 1)).toEqual(file2Mock);
    });
  });

  describe('getFileText', () => {
    test('returns undefined if file was not passed', () => {
      expect(getFileText()).toEqual(undefined);
    });

    test('returns undefined if file is null', () => {
      expect(getFileText(null)).toEqual(undefined);
    });

    test('returns file text', () => {
      const fileMock = new MockFile();
      expect(getFileText(fileMock)).toEqual(mockFileText);
    });
  });
});
