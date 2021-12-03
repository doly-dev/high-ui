/**
 * inline: true
 */
import * as React from 'react';
import { Radio, Checkbox } from 'antd';
import PaletteItem, { ColorType } from './PaletteItem';
import { PALETTE_COLORS, PALETTE_SHADE } from './constants';
import { ContrastMode } from './utils';
import styles from './palette.less';

const ColorTypeOptions = [
  {
    value: ColorType.HEX,
    label: ColorType.HEX.toUpperCase(),
  },
  {
    value: ColorType.RGB,
    label: ColorType.RGB.toUpperCase(),
  },
  {
    value: ColorType.HSL,
    label: ColorType.HSL.toUpperCase(),
  },
];

const VisibleOptions = [
  {
    value: 'name',
    label: 'CSS 变量名',
  },
  {
    value: 'contrast',
    label: '对比度',
  },
  {
    value: 'color',
    label: '颜色',
  },
];

const DefaultVisible = VisibleOptions.map((item) => item.value);

const ContrastModeOptions = [
  {
    value: 'material',
    label: 'Material Design',
  },
  {
    value: 'standard',
    label: 'Standard',
  },
];

const Palette = () => {
  const [visible, setVisible] = React.useState(DefaultVisible);
  const [contrastMode, setContrastMode] = React.useState(
    ContrastModeOptions[0].value,
  );
  const [colorType, setColorType] = React.useState(ColorTypeOptions[0].value);

  return (
    <div>
      <div className={styles.formItem}>
        显示：
        <Checkbox.Group
          options={VisibleOptions}
          value={visible}
          // @ts-ignore
          onChange={setVisible}
        />
      </div>
      <div className={styles.formItem}>
        文本颜色对比度计算：
        <Radio.Group
          options={ContrastModeOptions}
          value={contrastMode}
          onChange={(e) => setContrastMode(e.target.value)}
        />
      </div>
      <div className={styles.formItem}>
        颜色类型：
        <Radio.Group
          options={ColorTypeOptions}
          value={colorType}
          onChange={(e) => setColorType(e.target.value)}
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className={styles.paletteList}>
        {PALETTE_COLORS.map((colorItem) => (
          <div className={styles.paletteSubList} key={colorItem}>
            {PALETTE_SHADE.map((item) => (
              <PaletteItem
                key={`${colorItem}${item}`}
                color={`rgb(var(--${colorItem}-${item}))`}
                name={`${colorItem}-${item}`}
                type={colorType}
                mode={contrastMode as ContrastMode}
                showColor={visible.includes('color')}
                showName={visible.includes('name')}
                showContrast={visible.includes('contrast')}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Palette;
