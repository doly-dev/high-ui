import Color from 'color';

export const COLOR_WHITE = 'white';
export const COLOR_BLACK = 'black';
export const CONTRAST_THRESHOLD = 3; // 最低对比度

export const numberToFixed = (num: number | string, precision = 2) => {
  let realNum = num as number;
  if (typeof num !== 'number') {
    realNum = Number(num);
  }
  if (isNaN(realNum)) {
    return num as number;
  }
  return Number(realNum.toFixed(precision));
};

export const formatHSL = (hsl: number[]) => {
  const [h, s, l] = hsl;
  return `hsl(${numberToFixed(h)}, ${numberToFixed(s)}%, ${numberToFixed(l)}%)`;
};

export type ContrastMode = 'material' | 'standard';
type GetContrastAndColorOptions = {
  contrast?: number;
  mode?: ContrastMode;
};

export const getContrastAndColor = (
  color = 'white',
  options: GetContrastAndColorOptions = {},
) => {
  const { contrast = CONTRAST_THRESHOLD, mode = 'material' } = options;
  const colorObj = Color(color);
  const WhiteContrast = colorObj.contrast(Color(COLOR_WHITE));
  const BlackContrast = colorObj.contrast(Color(COLOR_BLACK));

  if (mode === 'material') {
    // Material Design 方案，优先白色
    if (WhiteContrast >= contrast || WhiteContrast >= BlackContrast) {
      return {
        color: COLOR_WHITE,
        contrast: WhiteContrast,
      };
    }
    return {
      color: COLOR_BLACK,
      contrast: BlackContrast,
    };
  }

  // 1.常规方案
  const isLight = WhiteContrast >= BlackContrast;
  return {
    color: isLight ? COLOR_WHITE : COLOR_BLACK,
    contrast: isLight ? WhiteContrast : BlackContrast,
  };

  // 2.常规方案
  // const isLight = colorObj.isLight();
  // return {
  //   color: isLight ? COLOR_BLACK : COLOR_WHITE,
  //   contrast: isLight ? BlackContrast : WhiteContrast
  // }
};
