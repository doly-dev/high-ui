/**
 * inline: true
 */
import * as React from 'react';
import classnames from 'classnames';
import BoxWithColor from './BoxWithColor';
import { THEME_COLORS } from './constants';
import styles from './theme.less';

const Theme = () => {
  return (
    <div className={styles.color}>
      {THEME_COLORS.map((item) => (
        <div key={item}>
          <h2>{item}</h2>
          <div className={styles.boxList}>
            <BoxWithColor className={classnames(styles.box, styles[item])}>
              --{item}
            </BoxWithColor>
            <BoxWithColor
              className={classnames(styles.box, styles[`${item}Light`])}
            >
              --{item}-light
            </BoxWithColor>
            <BoxWithColor
              className={classnames(styles.box, styles[`${item}Dark`])}
            >
              --{item}-dark
            </BoxWithColor>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Theme;
