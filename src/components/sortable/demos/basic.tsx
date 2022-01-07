import * as React from 'react';
import { Sortable } from 'high-ui';

const Demo = () => {
  return (
    <Sortable
      text="价格"
      onChange={(sortable) => {
        console.log(sortable);
      }}
    />
  );
};

export default Demo;
