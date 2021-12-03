import * as React from 'react';
import { message, Typography } from 'antd';
import Color from 'color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import BoxWithColor from './BoxWithColor';
import { numberToFixed, formatHSL } from './utils';
import { getWcagRule } from './wcag';
import { getContrastAndColor, ContrastMode } from './utils';
import styles from './palette.less';

export enum ColorType {
  HEX = 'hex',
  RGB = 'rgb',
  HSL = 'hsl',
}

interface PaletteItemProps {
  color: string;
  name: string;
  type: ColorType;
  mode?: ContrastMode;
  showColor?: boolean;
  showName?: boolean;
  showContrast?: boolean;
}

const PaletteItem: React.FC<PaletteItemProps> = ({
  color,
  name,
  type,
  mode = 'material',
  showColor = true,
  showContrast = true,
  showName = true,
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [contrast, setContrast] = React.useState<number>();
  const [colorObj, setColorObj] =
    React.useState<{ rgb: string; hex: string; hsl: string }>();

  const wcagLevel = React.useMemo(
    () => (contrast ? getWcagRule(contrast)?.text : ''),
    [contrast],
  );

  React.useEffect(() => {
    if (divRef.current) {
      const bgColorValue = window.getComputedStyle(
        divRef.current,
      ).backgroundColor;
      const bgColorObj = Color(bgColorValue);

      setColorObj({
        rgb: bgColorObj.rgb().toString(),
        hex: bgColorObj.hex().toString().toLowerCase(),
        hsl: formatHSL(bgColorObj.hsl().array()),
      });

      const { contrast: contrastValue } = getContrastAndColor(bgColorValue, {
        mode,
      });
      setContrast(numberToFixed(contrastValue));
    }
  }, [mode, divRef.current, color]);

  const colorStr = colorObj?.[type] || '';

  return (
    <CopyToClipboard
      text={colorStr}
      onCopy={() => {
        message.success(
          <>
            复制成功！<Typography.Text code>{colorStr}</Typography.Text>
          </>,
        );
      }}
    >
      <BoxWithColor
        className={styles.paletteItem}
        style={{ backgroundColor: color }}
        mode={mode}
        ref={divRef}
      >
        {(showName || showContrast || showColor) && (
          <div className={styles.info}>
            {showName && <div className={styles.name}>{name}</div>}
            {showContrast && (
              <div className={styles.contrast}>
                {contrast} ({wcagLevel})
              </div>
            )}
          </div>
        )}
        {showColor && (
          <div className={styles.color}>
            <div>{colorStr}</div>
          </div>
        )}
      </BoxWithColor>
    </CopyToClipboard>
  );
};

export default PaletteItem;
