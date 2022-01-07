import * as React from 'react';
import { Sortable } from 'high-ui';

const Demo = () => {
  return (
    <>
      <Sortable
        onChange={(sortableType) => {
          console.log(sortableType);
        }}
      />
      <br />
      <Sortable
        text="价格"
        onChange={(sortableType) => {
          console.log(sortableType);
        }}
      />
    </>
  );
};

export default Demo;
