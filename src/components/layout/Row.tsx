import * as React from 'react';

// TODO
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RowProps {}

const Row: React.FunctionComponent<any> = ({ children }) => {
  return <div>{children}</div>;
};

export default Row;
