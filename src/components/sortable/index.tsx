import * as React from 'react';
import { CaretUpFill, CaretDownFill } from 'doly-icons';
import { useControllableValue } from 'rc-hooks';
import classnames from 'classnames';
import { ConfigContext } from '../config-provider';
import './index.less';

export enum SortableTypeEnum {
  ASC = 'asc',
  DESC = 'desc'
}

type SortableType = 'asc' | 'desc' | undefined;

export interface SortableProps {
  text?: React.ReactNode;
  defaultValue?: SortableType;
  value?: SortableType;
  disabled?: boolean;
  onChange?: (sortable: SortableType) => void;
  className?: string;
  style?: React.CSSProperties;
}

const Sortable = React.forwardRef<HTMLSpanElement, SortableProps>((props, ref) => {
  const { getClassPrefix } = React.useContext(ConfigContext);
  const classPrefix = getClassPrefix?.('sortable');

  const { text, disabled, className, style } = props;
  const [state, setState] = useControllableValue<SortableType>(props);

  const handleChange = () => {
    if (disabled) {
      return;
    }

    let nextState: SortableType;
    if (typeof state === 'undefined') {
      nextState = SortableTypeEnum.ASC;
    } else if (state === SortableTypeEnum.ASC) {
      nextState = SortableTypeEnum.DESC;
    } else if (state === SortableTypeEnum.DESC) {
      nextState = undefined;
    }
    setState(nextState);
  };

  return (
    <span
      className={classnames(
        classPrefix,
        {
          [`${classPrefix}-disabled`]: disabled,
          [`${classPrefix}-actived`]: !!state
        },
        className
      )}
      onClick={handleChange}
      style={style}
      ref={ref}
    >
      {text && <span className={`${classPrefix}-text`}>{text}</span>}
      <span className={`${classPrefix}-icon`}>
        <CaretUpFill
          className={classnames(`${classPrefix}-iconUp`, {
            [`${classPrefix}-icon-actived`]: state === SortableTypeEnum.ASC
          })}
        />
        <CaretDownFill
          className={classnames(`${classPrefix}-iconDown`, {
            [`${classPrefix}-icon-actived`]: state === SortableTypeEnum.DESC
          })}
        />
      </span>
    </span>
  );
});

Sortable.displayName = 'Sortable';

export default Sortable;
