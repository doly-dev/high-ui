import { ReactNode } from 'react';
import renderToContainer from './renderToContainer';

const renderToBody = (children: ReactNode) => {
  renderToContainer(children, () => document.body);
};

export default renderToBody;
