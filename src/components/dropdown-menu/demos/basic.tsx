import * as React from 'react';
import { DropdownMenu } from 'high-ui';

// 综合排序-0 起送价最低-1 配送费最低-2 配送速度-3 配送距离-4 月销量-5
enum OrderType {
  Composite,
  ExpressSalesTotalPrice,
  ExpressPrice,
  ExpressSpeed,
  ExpressDistance,
  MonthSales
}

const options = [
  {
    name: '综合排序',
    value: OrderType.Composite
  },
  {
    name: '起送价最低',
    value: OrderType.ExpressSalesTotalPrice
  },
  {
    name: '配送费最低',
    value: OrderType.ExpressPrice
  }
];

const otherOptions = [
  {
    name: '速度',
    value: OrderType.ExpressSpeed
  },
  {
    name: '距离',
    value: OrderType.ExpressDistance
  },
  {
    name: '销量',
    value: OrderType.MonthSales
  }
];

const Demo: React.FC = () => {
  const [value, setValue] = React.useState();

  return (
    <>
      前面内容
      <DropdownMenu>
        <DropdownMenu.Item
          title={options.find((opt) => opt.value === value)?.name || options[0].name}
          value={value}
          onChange={(val) => {
            console.log(val);
            setValue(val);
          }}
          options={options}
          highlight={!!options.find((opt) => opt.value === value)}
        />
        <DropdownMenu.Item
          title={otherOptions.find((opt) => opt.value === value)?.name || otherOptions[0].name}
          value={value}
          onChange={(val) => {
            console.log(val);
            setValue(val);
          }}
          options={otherOptions}
          highlight={!!otherOptions.find((opt) => opt.value === value)}
        />
      </DropdownMenu>
    </>
  );
};

export default Demo;
