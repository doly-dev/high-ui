import React, { cloneElement, forwardRef, useCallback, useRef } from 'react';
import { Transition } from 'react-transition-group';
import { EXITED } from 'react-transition-group/Transition';
import type { TransitionProps, TransitionStatus } from 'react-transition-group/Transition';
import { reflow } from './utils';

export type FadeProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const Fade: React.FC<FadeProps> = forwardRef(
  ({ timeout = 300, children, in: inProp = false, onEnter, ...restProps }, ref) => {
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
        entering: { opacity: 1, transition: `opacity ${timeout}ms ease-out` },
        entered: { opacity: 1 },
        exiting: { transition: `opacity ${timeout}ms ease-in` }
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
              opacity: 0,
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

export default Fade;
