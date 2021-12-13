import * as React from 'react';
import { createPortal } from 'react-dom';
import canUseDom from '../../utils/canUseDom';

type ContainerType<T extends HTMLElement = HTMLElement> = T | (() => T);

function getContainer(container?: ContainerType) {
  return typeof container === 'function' ? container() : container;
}

export interface PortalProps<T extends HTMLElement = HTMLElement> {
  container?: ContainerType<T>;
  children?: React.ReactNode;
}

const Portal: React.FC<PortalProps> = ({ container, children }) => {
  if (!canUseDom) {
    return null;
  }
  const containerEl = getContainer(container) || document.body;

  return createPortal(children, containerEl);
};

export default Portal;
