import type { CSSProperties } from 'react';

export const reflow = (node: HTMLElement) => node.scrollTop;

type Mode = 'enter' | 'exit';

export type TransitionProps = {
  timeout:
    | number
    | {
        enter: number;
        exit: number;
      };
  easing:
    | CSSProperties['transitionTimingFunction']
    | {
        enter: CSSProperties['transitionTimingFunction'];
        exit: CSSProperties['transitionTimingFunction'];
      };
  style: CSSProperties;
};

type Options = {
  mode: Mode;
};

export function formatMs(milliseconds: number) {
  return `${Math.round(milliseconds)}ms`;
}

export function getTransitionProps(props: TransitionProps, options: Options) {
  const { timeout, easing, style = {} } = props;

  return {
    duration:
      style.transitionDuration || typeof timeout === 'number'
        ? timeout
        : timeout[options.mode] || 0,
    easing:
      style.transitionTimingFunction || typeof easing === 'string'
        ? easing
        : easing?.[options.mode],
    delay: style.transitionDelay
  };
}

export function createTransitions(
  propName: string | string[],
  {
    duration = 300,
    easing = 'ease-in-out',
    delay = 0
  }: Partial<{
    duration: number | string;
    easing: string;
    delay: number | string;
  }>
) {
  return (Array.isArray(propName) ? propName : [propName])
    .map(
      (animatedProp) =>
        `${animatedProp} ${
          typeof duration === 'string' ? duration : formatMs(duration)
        } ${easing} ${typeof delay === 'string' ? delay : formatMs(delay)}`
    )
    .join(',');
}

export function formatPx(num: number | string) {
  return typeof num === 'number' ? `${num}px` : num;
}
