import * as React from 'react';
import { Sortable, SortableProps } from 'high-ui';

const Demo = () => {
  const [value, setValue] = React.useState<SortableProps['value']>('asc');

  return (
    <Sortable
      text="价格"
      value={value}
      onChange={(sortable) => {
        setValue(!sortable ? 'asc' : 'desc');
      }}
    />
  );
};

export default Demo;
