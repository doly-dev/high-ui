import * as React from 'react';
import { Grid } from '..';

const Demo: React.FC = () => {
  return (
    <>
      <Grid />
      <br />
      <Grid total={8} rowCols={4} active={false} />
    </>
  );
};

export default Demo;
