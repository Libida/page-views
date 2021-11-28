import React from 'react';

import { Table } from '../Table';

const PageViewTable = ({ data, caption }) => {
  return (
    <Table
      caption={caption}
      headingsArray={['Page URL', 'Views']}
      bodyData={data}
      bodyKeysArray={[0, 1]}
    />
  );
};

export default PageViewTable;
