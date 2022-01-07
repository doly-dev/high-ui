import * as React from 'react';
import { ContrastMode } from '../constants';
import { getContrastAndColor } from '../utils';

// fore-计算文本颜色 back-计算背景颜色
type PositionType = 'fore' | 'back';

interface BoxWithColorProps<E extends HTMLElement = HTMLDivElement>
  extends React.HTMLAttributes<E> {
  as?: string;
  position?: PositionType;
  mode?: ContrastMode;
  ref?: ((instance: E | null) => void) | React.RefObject<E> | null;
}

const BoxWithColor = React.forwardRef<HTMLElement, BoxWithColorProps>(
  ({ as = 'div', position = 'fore', mode = ContrastMode.Material, ...restProps }, ref) => {
    const [color, setColor] = React.useState('');
    const divRef = React.useRef(null);
    const handleRef = React.useCallback(
      (refValue) => {
        divRef.current = refValue;

        if (ref !== null) {
          if (typeof ref === 'function') {
            ref(refValue);
          } else {
            ref.current = refValue;
          }
        }
      },
      [ref]
    );

    const { currentStyleProp, calcStyleProp } = React.useMemo(() => {
      if (position === 'fore') {
        return {
          currentStyleProp: 'backgroundColor',
          calcStyleProp: 'color'
        } as const;
      }
      return {
        currentStyleProp: 'color',
        calcStyleProp: 'backgroundColor'
      } as const;
    }, [position]);

    const calcStyle = React.useMemo(
      () => ({
        [calcStyleProp]: color
      }),
      [calcStyleProp, color]
    );

    React.useEffect(() => {
      if (divRef.current) {
        const currentColor = window.getComputedStyle(divRef.current)[currentStyleProp];
        const { color: colorValue } = getContrastAndColor(currentColor, {
          mode
        });
        setColor(colorValue);
      }
    }, [color, currentStyleProp, mode]);

    return React.createElement(as, {
      ...restProps,
      ref: handleRef,
      style: {
        ...restProps.style,
        ...calcStyle
      }
    });
  }
);

export default BoxWithColor;
