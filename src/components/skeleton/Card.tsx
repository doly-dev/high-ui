import * as React from 'react';
import { Row, Col } from '../layout';
import { Rect } from './Shape';
import './index.less';

const classPrefix = 'high-skeleton-card';

export interface CardProps {
  active?: boolean;
}

const Card: React.FC<CardProps> = ({ active = true }) => {
  return (
    <div className={classPrefix}>
      <div className={`${classPrefix}-thumb`}>
        <Rect active={active} height={60} round={false} />
      </div>
      <div className={`${classPrefix}-content`}>
        <Rect active={active} />
        <Rect active={active} width="30%" />
        <Rect active={active} width="60%" />
      </div>
    </div>
  );
};

export interface CardListProps {
  total?: number;
  active?: boolean;
}

const CardList: React.FC<CardListProps> = ({ total = 5, active = true }) => {
  const count = React.useMemo(() => new Array(total).fill(1), [total]);
  return (
    <Row gutter={[0, 1]} rowCols={1}>
      {count.map((item, index) => (
        <Col key={index + ''}>
          <Card active={active} />
        </Col>
      ))}
    </Row>
  );
};

export default CardList;
