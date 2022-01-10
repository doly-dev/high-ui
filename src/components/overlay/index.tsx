import React from 'react';
import classnames from 'classnames';
import getClassPrefix from '../../utils/getClassPrefix';
import renderToContainer from '../../utils/renderToContainer';
import { ContainerType } from '../../utils/getContainer';
import { Fade } from '../transition';
import './index.less';

const classPrefix = getClassPrefix('overlay');

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: ContainerType;
  visible?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({
  container,
  visible,
  className,
  mountOnEnter = true,
  unmountOnExit = true,
  ...restProps
}) => {
  const overlayView = (
    <Fade in={visible} mountOnEnter={mountOnEnter} unmountOnExit={unmountOnExit}>
      <div
        className={classnames(classPrefix, className)}
        onTouchMove={(e) => e.stopPropagation()}
        {...restProps}
      />
    </Fade>
  );

  return container ? renderToContainer(overlayView, container) : overlayView;
};

export default Overlay;
