import * as React from 'react';
import { Sortable, SortableProps, SortableTypeEnum } from 'high-ui';

const Demo = () => {
  const [value, setValue] = React.useState<NonNullable<SortableProps['value']>>(
    SortableTypeEnum.ASC
  );

  return (
    <Sortable
      text="价格"
      value={value}
      onChange={(sortableType) => {
        setValue(sortableType || SortableTypeEnum.ASC);
      }}
    />
  );
};

export default Demo;
