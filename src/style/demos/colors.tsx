/**
 * inline: true
 */
import * as React from 'react';
import { Radio, Checkbox } from 'antd';
import Palette from './Palette';
import { PALETTE_COLORS, PALETTE_SHADE, CSS_VAR_PREFIX } from './constants';
import { ContrastMode, ColorType } from './constants';
import styles from './colors.less';

const ColorTypeOptions = [
  {
    value: ColorType.HEX,
    label: ColorType.HEX.toUpperCase()
  },
  {
    value: ColorType.RGB,
    label: ColorType.RGB.toUpperCase()
  },
  {
    value: ColorType.HSL,
    label: ColorType.HSL.toUpperCase()
  }
];

const VisibleOptions = [
  {
    value: 'name',
    label: 'CSS 变量名'
  },
  {
    value: 'contrast',
    label: '对比度'
  },
  {
    value: 'color',
    label: '颜色'
  }
];

const DefaultVisible = VisibleOptions.map((item) => item.value);

type CopyFieldType = 'name' | 'color';
const CopyFieldOptions = [
  {
    value: 'name',
    label: 'CSS 变量名'
  },
  {
    value: 'color',
    label: '颜色'
  }
];

const ContrastModeOptions = [
  {
    value: ContrastMode.Material,
    label: 'Material Design'
  },
  {
    value: ContrastMode.Standard,
    label: 'Standard'
  }
];

const COLORS = PALETTE_COLORS.map((colorItem) =>
  PALETTE_SHADE.map((shadeItem) => {
    const colorVarName = `${CSS_VAR_PREFIX}-${colorItem}-${shadeItem}`;
    return {
      name: `${colorVarName}`,
      color: `rgb(var(${colorVarName}))`
    };
  })
);

const Colors = () => {
  const [visible, setVisible] = React.useState<(string | number | boolean)[]>(DefaultVisible);
  const [contrastMode, setContrastMode] = React.useState(ContrastModeOptions[0].value);
  const [colorType, setColorType] = React.useState(ColorTypeOptions[0].value);
  const [copyField, setCopyField] = React.useState<CopyFieldType>('color');

  return (
    <div>
      <div className={styles.formItem}>
        显示：
        <Checkbox.Group options={VisibleOptions} value={visible} onChange={setVisible} />
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
        点击复制：
        <Radio.Group
          options={CopyFieldOptions}
          value={copyField}
          onChange={(e) => setCopyField(e.target.value)}
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
      <div className={styles.list}>
        {COLORS.map((colorItems, index) => (
          <Palette
            key={index}
            data={colorItems}
            contrastMode={contrastMode}
            colorType={colorType}
            showColor={visible.includes('color')}
            showName={visible.includes('name')}
            showContrast={visible.includes('contrast')}
            copyField={copyField}
            className={styles.item}
          />
        ))}
      </div>
    </div>
  );
};

export default Colors;
