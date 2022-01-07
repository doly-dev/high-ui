import * as React from 'react';
import { Sortable, SortableProps } from 'high-ui';

const Demo = () => {
  const [value, setValue] = React.useState<SortableProps['value']>('desc');

  return <Sortable text="价格" value={value} onChange={setValue} disabled />;
};

export default Demo;
