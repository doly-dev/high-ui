import * as React from 'react';
import { Circle } from '..';

const Demo: React.FC = () => {
  return (
    <>
      <Circle />
      <br />
      <Circle size={80} active={false} />
    </>
  );
};

export default Demo;
