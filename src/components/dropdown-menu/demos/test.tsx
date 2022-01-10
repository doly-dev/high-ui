import * as React from 'react';
import { DropdownMenu } from 'high-ui';

const options = [
  {
    name: '综合排序',
    value: '0'
  },
  {
    name: '起送价最低',
    value: '1'
  },
  {
    name: '配送费最低',
    value: '2'
  }
];

const Demo: React.FC = () => {
  const [value, setValue] = React.useState('0');

  return (
    <DropdownMenu>
      <DropdownMenu.Item
        title={options.find((opt) => opt.value === value)?.name}
        value={value}
        onChange={setValue}
        options={options}
        highlight
      />
      <DropdownMenu.Item title="筛选">
        <div style={{ background: 'white' }}>自定义内容</div>
      </DropdownMenu.Item>
      <DropdownMenu.Item title="速度" arrow={false} noDropdown highlight />
    </DropdownMenu>
  );
};

export default Demo;
