import * as React from 'react';
import { CaretUpFill, CaretDownFill } from 'doly-icons';
import { useControllableValue } from 'rc-hooks';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider';
import './index.less';

type SortableType = 'asc' | 'desc' | undefined;

export interface SortableProps {
  text?: React.ReactNode;
  defaultValue?: SortableType;
  value?: SortableType;
  disabled?: boolean;
  onChange?: (sortable: SortableType) => void;
}

const constants = {
  Asc: 'asc',
  Desc: 'desc'
} as const;

const Sortable: React.FC<SortableProps> = (props) => {
  const { getClassPrefix } = React.useContext(ConfigContext);
  const classPrefix = getClassPrefix?.('sortable');

  const { text, disabled } = props;
  const [state, setState] = useControllableValue<SortableType>(props);

  const handleChange = () => {
    if (disabled) {
      return;
    }

    let nextState: SortableType;
    if (typeof state === 'undefined') {
      nextState = constants.Asc;
    } else if (state === constants.Asc) {
      nextState = constants.Desc;
    } else if (state === constants.Desc) {
      nextState = undefined;
    }
    setState(nextState);
  };

  return (
    <span
      className={classnames(classPrefix, {
        [`${classPrefix}-disabled`]: disabled
      })}
      onClick={handleChange}
    >
      {text && <span className={`${classPrefix}-text`}>{text}</span>}
      <span className={`${classPrefix}-icon`}>
        <CaretUpFill
          className={classnames(`${classPrefix}-iconUp`, {
            [`${classPrefix}-icon-actived`]: state === constants.Asc
          })}
        />
        <CaretDownFill
          className={classnames(`${classPrefix}-iconDown`, {
            [`${classPrefix}-icon-actived`]: state === constants.Desc
          })}
        />
      </span>
    </span>
  );
};

export default Sortable;
