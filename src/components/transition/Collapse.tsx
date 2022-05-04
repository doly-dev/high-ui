import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { Transition } from 'react-transition-group';
import type { TransitionProps } from 'react-transition-group/Transition';
import { reflow, createTransitions, formatPx } from './utils';

export type CollapseProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  direction?: 'horizontal' | 'vertical';
  collapseSize?: number | string;
  collapseOpacity?: number | string;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};

const Collapse: React.FC<CollapseProps> = forwardRef(
  (
    {
      timeout = 300,
      children,
      in: inProp = false,
      direction = 'vertical',
      collapseSize: collapseSizeProp = 0,
      collapseOpacity: collapseOpacityProp = 0,
      onEnter,
      onEntering,
      onEntered,
      onExit,
      onExiting,
      onExited,
      style,
      ...restProps
    },
    ref
  ) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const handleRef = useCallback(
      (refValue: HTMLDivElement) => {
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
    const isHorizontal = useMemo(() => direction === 'horizontal', [direction]);
    const collapseSize = useMemo(() => formatPx(collapseSizeProp), [collapseSizeProp]);
    const collapseOpacity = useMemo(() => collapseOpacityProp + '', [collapseOpacityProp]);
    const size = useMemo(() => (!isHorizontal ? 'height' : 'width'), [isHorizontal]);
    const getSize = useCallback(() => {
      return nodeRef.current?.[!isHorizontal ? 'scrollHeight' : 'scrollWidth'] + 'px';
    }, [isHorizontal]);

    const handleEnter = useCallback(
      (isApearing: boolean) => {
        if (nodeRef.current) {
          nodeRef.current.style[size] = collapseSize;
          nodeRef.current.style.opacity = collapseOpacity;
          nodeRef.current.style.overflow = 'hidden';
        }

        onEnter?.(isApearing);
      },
      [collapseOpacity, collapseSize, onEnter, size]
    );

    const handleEntering = useCallback(
      (isApearing: boolean) => {
        if (nodeRef.current) {
          nodeRef.current.style.transition = createTransitions([size, 'opacity'], {
            duration: timeout as number
          });
          nodeRef.current.style[size] = getSize();
          nodeRef.current.style.opacity = '1';
        }
        onEntering?.(isApearing);
      },
      [getSize, onEntering, size, timeout]
    );

    const handleEntered = useCallback(
      (isApearing: boolean) => {
        if (nodeRef.current) {
          nodeRef.current.style.transition = '';
          nodeRef.current.style[size] = '';
          nodeRef.current.style.opacity = '';
          nodeRef.current.style.overflow = '';
        }
        onEntered?.(isApearing);
      },
      [onEntered, size]
    );

    const handleExit = useCallback(() => {
      if (nodeRef.current) {
        nodeRef.current.style[size] = getSize();
        nodeRef.current.style.overflow = 'hidden';
      }
      onExit?.();
    }, [getSize, onExit, size]);

    const handleExiting = useCallback(() => {
      if (nodeRef.current) {
        reflow(nodeRef.current);
        nodeRef.current.style.transition = createTransitions(['height', 'opacity'], {
          duration: timeout as number
        });
        nodeRef.current.style[size] = collapseSize;
        nodeRef.current.style.opacity = collapseOpacity;
      }
      onExiting?.();
    }, [collapseOpacity, collapseSize, onExiting, size, timeout]);

    const handleExited = useCallback(() => {
      if (nodeRef.current) {
        nodeRef.current.style.transition = '';
      }
      onExited?.();
    }, [onExited]);

    return (
      <Transition
        timeout={timeout}
        nodeRef={nodeRef}
        in={inProp}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
        onExited={handleExited}
        {...restProps}
      >
        <div
          style={{
            [size]: collapseSize,
            opacity: collapseOpacity,
            overflow: 'hidden',
            ...style
          }}
          ref={handleRef}
        >
          {children}
        </div>
      </Transition>
    );
  }
);

Collapse.displayName = 'Collapse';

export default Collapse;
