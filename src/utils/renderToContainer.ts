import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import canUseDom from './canUseDom';
import getContainer from './getContainer';

const renderToContainer = (children: ReactNode, container: Parameters<typeof getContainer>[0]) => {
  if (!canUseDom) {
    return null;
  }

  const wrapper = getContainer(container);
  if (!wrapper) {
    return null;
  }
  return createPortal(children, wrapper);
};

export default renderToContainer;
