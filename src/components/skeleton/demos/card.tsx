import * as React from 'react';
import { Card } from '..';

const Demo: React.FC = () => {
  return (
    <>
      <Card total={1} />
      <br />
      <Card total={1} active={false} />
    </>
  );
};

export default Demo;
