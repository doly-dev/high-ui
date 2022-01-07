/**
 * title: 滑动
 */
import * as React from 'react';
import { Slide, SlideProps } from 'high-ui';

const directionOptions = [
  {
    name: '上',
    value: 'up'
  },
  {
    name: '右',
    value: 'right'
  },
  {
    name: '下',
    value: 'down'
  },
  {
    name: '左',
    value: 'left'
  }
] as const;

const Demo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [direction, setDirection] = React.useState<SlideProps['direction']>(
    directionOptions[0].value
  );

  return (
    <div>
      <button onClick={() => setVisible((x) => !x)}>切换动画</button>
      <span>
        {directionOptions.map((dirItem) => (
          <label key={dirItem.value} style={{ marginLeft: 10 }}>
            <input
              type="radio"
              name="dir"
              value={dirItem.value}
              checked={direction === dirItem.value}
              onChange={() => {
                setDirection(dirItem.value);
              }}
            />{' '}
            {dirItem.name}
          </label>
        ))}
      </span>

      <Slide in={visible} direction={direction}>
        <div style={{ width: 100, height: 100, background: '#999' }} />
      </Slide>
    </div>
  );
};

export default Demo;
