import * as React from 'react';
import { message, Typography } from 'antd';
import Color from 'color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { getWcagRule } from '../wcag';
import { numberToFixed, formatHSL, getContrastAndColor } from '../utils';
import { ColorType, ContrastMode } from '../constants';
import BoxWithColor from './BoxWithColor';
import styles from './index.less';

interface PaletteCardProps {
  color: string;
  name: string;
  type: ColorType;
  mode?: ContrastMode;
  showColor?: boolean;
  showName?: boolean;
  showContrast?: boolean;
  copyField?: 'color' | 'name';
}

const PaletteCard: React.FC<PaletteCardProps> = ({
  color,
  name,
  type,
  mode = ContrastMode.Material,
  showColor = true,
  showContrast = true,
  showName = true,
  copyField = 'color'
}) => {
  const divRef = React.useRef<HTMLDivElement>(null);
  const [contrast, setContrast] = React.useState<number>();
  const [colorObj, setColorObj] = React.useState<{ rgb: string; hex: string; hsl: string }>();

  const wcagLevel = React.useMemo(() => (contrast ? getWcagRule(contrast)?.text : ''), [contrast]);

  React.useEffect(() => {
    if (divRef.current) {
      const bgColorValue = window.getComputedStyle(divRef.current).backgroundColor;
      const bgColorObj = Color(bgColorValue);

      setColorObj({
        rgb: bgColorObj.rgb().toString(),
        hex: bgColorObj.hex().toString().toLowerCase(),
        hsl: formatHSL(bgColorObj.hsl().array())
      });

      const { contrast: contrastValue } = getContrastAndColor(bgColorValue, {
        mode
      });
      setContrast(numberToFixed(contrastValue));
    }
  }, [mode, color]);

  const colorStr = colorObj?.[type] || '';
  const copyText = copyField === 'color' ? colorStr : name;

  return (
    <CopyToClipboard
      text={copyText}
      onCopy={() => {
        message.success(
          <>
            复制成功！<Typography.Text code>{copyText}</Typography.Text>
          </>
        );
      }}
    >
      <BoxWithColor
        className={styles.palettePanel}
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

export default PaletteCard;
