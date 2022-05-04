import * as React from 'react';
import { Rect, Grid, Card } from '..';

const Demo: React.FC = () => {
  return (
    <>
      <Grid />
      <br />
      <Rect height={40} />
      <br />
      <Rect height={80} />
      <br />
      <Rect height={60} />
      <br />
      <Card />
    </>
  );
};

export default Demo;
