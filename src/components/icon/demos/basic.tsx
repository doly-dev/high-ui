import * as React from 'react';
import {
  Gear,
  HeartFill,
  EmojiSmileFill,
  ArrowRepeat,
  ArrowClockwise,
  ArrowCounterclockwise,
  Search,
  YinYang
} from 'doly-icons';
import styles from './demo.less';

const Demo = () => {
  return (
    <>
      <h3>大小</h3>
      <div className={styles.iconList}>
        <Gear style={{ fontSize: 16 }} />
        <Gear style={{ fontSize: 24 }} />
        <Gear style={{ fontSize: 32 }} />
        <Gear style={{ fontSize: 48 }} />
      </div>
      <h3>颜色</h3>
      <div className={styles.iconList}>
        <HeartFill style={{ color: '#e91e63' }} />
        <EmojiSmileFill style={{ color: '#ffc107' }} />
        <Search style={{ color: '#2196f3' }} />
      </div>
      <h3>旋转动画</h3>
      <div className={styles.iconList}>
        <YinYang spin />
        <ArrowRepeat spin />
        <ArrowClockwise spin />
        <ArrowCounterclockwise spinReverse />
      </div>
    </>
  );
};

export default Demo;
