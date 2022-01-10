import * as React from 'react';
import { DropdownMenu } from 'high-ui';

const styles = {
  wrapper: {
    borderBottom: '1px solid #efefef'
  },
  item: {
    lineHeight: '44px',
    height: '44px',
    justifyContent: 'center',
    width: '50%'
  }
};

// 综合排序-0 起送价最低-1 配送费最低-2
enum OrderType {
  Composite,
  ExpressSalesTotalPrice,
  ExpressPrice
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

const Demo: React.FC = () => {
  const [value, setValue] = React.useState();
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      前面内容
      <DropdownMenu
        visible={visible}
        onVisibleChange={setVisible}
        activeColor="red"
        style={styles.wrapper}
      >
        <DropdownMenu.Item
          title={options.find((opt) => opt.value === value)?.name || options[0].name}
          value={value}
          onChange={(val) => {
            console.log(val);
            setValue(val);
          }}
          options={options}
          // highlight={!!options.find(opt => opt.value === value)}
          style={styles.item}
        />
        <DropdownMenu.Item title="筛选" style={styles.item}>
          <div style={{ background: 'white' }}>
            <div>自定义内容</div>
            <button onClick={() => setVisible(false)}>确认</button>
          </div>
        </DropdownMenu.Item>
      </DropdownMenu>
    </>
  );
};

export default Demo;
