import * as React from 'react';
import { Sortable, SortableProps } from 'high-ui';

const Demo = () => {
  const [value, setValue] = React.useState<SortableProps['value']>('asc');

  return (
    <>
      <Sortable text="价格" value={value} onChange={setValue} />
      <button style={{ marginLeft: 10 }} onClick={() => setValue(undefined)}>
        清除
      </button>
    </>
  );
};

export default Demo;
