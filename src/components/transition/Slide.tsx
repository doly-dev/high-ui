import React, { cloneElement, forwardRef, useCallback, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { EXITED } from 'react-transition-group/Transition';
import type { TransitionProps, TransitionStatus } from 'react-transition-group/Transition';
import { reflow } from './utils';

type DirectionType = 'up' | 'right' | 'down' | 'left';

function getSlideTransform(direction: DirectionType = 'up') {
  let x = '0',
    y = '0';
  switch (direction) {
    case 'down':
      y = '-100%';
      break;
    case 'left':
      x = '-100%';
      break;
    case 'right':
      x = '100%';
      break;
    case 'up':
    default:
      y = '100%';
      break;
  }
  return `translate3d(${x}, ${y}, 0)`;
}

export type SlideProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  direction?: DirectionType;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const Slide: React.FC<SlideProps> = forwardRef(
  (
    { timeout = 300, direction = 'up', children, in: inProp = false, onEnter, ...restProps },
    ref
  ) => {
    const nodeRef = useRef<HTMLElement | null>(null);
    const handleRef = useCallback(
      (refValue: HTMLElement) => {
        nodeRef.current = refValue;
        const childRef = children.props.ref || ref;

        if (childRef !== null) {
          if (typeof childRef === 'function') {
            childRef(refValue);
          } else {
            childRef.current = refValue;
          }
        }
      },
      [children.props.ref, ref]
    );

    const handleEnter = useCallback(
      (isApearing) => {
        if (nodeRef.current) {
          reflow(nodeRef.current);
        }
        onEnter?.(isApearing);
      },
      [onEnter]
    );

    const transitionStyles: Partial<Record<TransitionStatus, any>> = React.useMemo(
      () => ({
        entering: {
          transform: 'translate3d(0, 0, 0)',
          transition: `transform ${timeout}ms ease-out`
        },
        entered: { transform: 'translate3d(0, 0, 0)' },
        exiting: { transition: `transform ${timeout}ms ease-in` }
      }),
      [timeout]
    );

    return (
      <Transition
        timeout={timeout}
        nodeRef={nodeRef}
        in={inProp}
        onEnter={handleEnter}
        {...restProps}
      >
        {(status: TransitionStatus, childProps: any) =>
          cloneElement(children, {
            ...childProps,
            style: {
              transform: getSlideTransform(direction),
              visibility: status === EXITED && !inProp ? 'hidden' : undefined,
              ...transitionStyles[status],
              ...children?.props?.style
            },
            ref: handleRef
          })
        }
      </Transition>
    );
  }
);

export default Slide;
