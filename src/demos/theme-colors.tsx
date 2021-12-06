/**
 * inline: true
 */
import * as React from 'react';
import classnames from 'classnames';
import BoxWithColor from './Palette/BoxWithColor';
import { THEME_COLORS, CSS_VAR_PREFIX } from './constants';
import styles from './theme-colors.less';

const COLORS = THEME_COLORS.map((item) => {
  const mainName = `--${CSS_VAR_PREFIX}-${item}`;
  const lightName = `${mainName}-light`;
  const darkName = `${mainName}-dark`;

  return [
    item,
    [
      {
        name: mainName,
        color: `var(${mainName})`,
      },
      {
        name: lightName,
        color: `var(${lightName})`,
      },
      {
        name: darkName,
        color: `var(${darkName})`,
      },
    ],
  ] as const;
});

const ThemeColors = () => {
  return (
    <div className={styles.color}>
      {COLORS.map((item) => (
        <div key={item[0]}>
          <h3>{item[0]}</h3>
          <div className={styles.boxList}>
            {item[1].map((subItem) => (
              <BoxWithColor
                className={classnames(styles.box)}
                style={{ backgroundColor: subItem.color }}
                key={subItem.name}
              >
                {subItem.name}
              </BoxWithColor>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeColors;
