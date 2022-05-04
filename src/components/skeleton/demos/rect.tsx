import * as React from 'react';
import { Rect } from '..';

const Demo: React.FC = () => {
  return (
    <>
      <Rect />
      <br />
      <Rect width={80} />
      <br />
      <Rect width={40} height={40} />
      <br />
      <Rect width={40} height={40} round={false} active={false} />
    </>
  );
};

export default Demo;
