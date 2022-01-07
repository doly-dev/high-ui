import * as React from 'react';
import { Sortable, SortableTypeEnum } from 'high-ui';

const Demo = () => {
  return (
    <>
      <Sortable disabled />
      <Sortable value={SortableTypeEnum.ASC} disabled />
      <br />
      <Sortable text="价格" disabled />
      <Sortable text="价格" value={SortableTypeEnum.ASC} disabled />
    </>
  );
};

export default Demo;
