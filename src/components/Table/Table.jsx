import React from 'react';

import './Table.scss';

const Table = ({ caption, headingsArray, bodyData, bodyKeysArray }) => {
  if (!bodyData?.length) {
    return null;
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        {caption && <caption className="table__caption">{caption}</caption>}
        <thead>
        {headingsArray?.length && (
          <tr className="table__tr">
            {headingsArray.map((heading, index) => (
              <th key={`${heading}-${index}`} className="table__th">
                {heading}
              </th>
            ))}
          </tr>
        )}
        </thead>
        <tbody>
        {bodyData.map((item, index) => (
          <tr className="table__tr" key={index}>
            {bodyKeysArray.map((bodyKey, index) => (
              <td className="table__td" key={`${item}-${bodyKey}-${index}`}>
                {item[bodyKey]}
              </td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
