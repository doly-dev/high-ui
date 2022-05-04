import * as React from 'react';
import classnames from 'classnames';
import './index.less';

const classPrefix = 'high-skeleton';

export interface RectProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  round?: boolean;
  active?: boolean;
}

export const Rect: React.FC<RectProps> = ({
  width = '100%',
  height = 14,
  round = true,
  className,
  style,
  active = true,
  ...restProps
}) => {
  return (
    <div
      className={classnames(
        `${classPrefix}-rect`,
        { [`${classPrefix}-active`]: active },
        className
      )}
      style={{
        width,
        height,
        borderRadius: round ? '4px' : 0,
        ...style
      }}
      {...restProps}
    />
  );
};

export interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  active?: boolean;
}

export const Circle: React.FC<CircleProps> = ({
  size = 40,
  className,
  style,
  active = true,
  ...restProps
}) => {
  return (
    <div
      className={classnames(
        `${classPrefix}-circle`,
        { [`${classPrefix}-active`]: active },
        className
      )}
      style={{
        width: size,
        height: size,
        ...style
      }}
      {...restProps}
    />
  );
};
