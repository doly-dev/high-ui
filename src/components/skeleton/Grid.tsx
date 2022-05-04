import * as React from 'react';
import { Row, Col } from '../layout';
import { Rect, Circle } from './Shape';

export interface GridItemProps {
  active?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ active = true }) => {
  return (
    <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Circle active={active} />
      <Rect active={active} width="60%" height={15} style={{ marginTop: 9 }} />
    </Col>
  );
};

export interface GridProps {
  active?: boolean;
  total?: number;
  rowCols?: number;
}

const Grid: React.FC<GridProps> = ({ total = 10, rowCols = 5, active = true }) => {
  const count = React.useMemo(() => new Array(total).fill(1), [total]);
  return (
    <Row gutter={[1, 1]} rowCols={rowCols}>
      {count.map((item, index) => (
        <GridItem active={active} key={index + ''} />
      ))}
    </Row>
  );
};

export default Grid;
