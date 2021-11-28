import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import UploadForm from './UploadForm';

describe('UploadForm', () => {
  const initialProps = {
    onChange: () => {},
    onReset: () => {},
    uploadRef: [],
  };
  const wrapper = (props) => shallow(<UploadForm {...props} />);

  test('should match snapshot for default initial props', () => {
    expect(wrapper(initialProps)).toMatchSnapshot();
  });

  test('should match snapshot for case with visible reset button', () => {
    expect(wrapper({...initialProps, shouldShowReset: true})).toMatchSnapshot();
  });
});
