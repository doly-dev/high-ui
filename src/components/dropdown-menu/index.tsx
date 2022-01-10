import * as React from 'react';
import { ChevronDown, Check2 } from 'doly-icons';
import { useClickAway, useControllableValue } from 'rc-hooks';
import classnames from 'classnames';
import getClassPrefix from '../../utils/getClassPrefix';
import omit from '../../utils/omit';
import Overlay from '../overlay';
import { Collapse } from '../transition';

import './index.less';

const classPrefix = getClassPrefix('dropdown-menu');

type DataItem = {
  name: string;
  value: any;
  // disabled?: boolean;
  [x: string]: any;
};

export interface DropdownMenuItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  arrow?: boolean;
  title?: React.ReactNode;
  options?: DataItem[];
  value?: any;
  noDropdown?: boolean;
  onChange?: (value: any) => void;
  highlight?: boolean;
  children?: JSX.Element;
}

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = () => null;

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: HTMLElement;
  overlay?: boolean;
  visible?: boolean;
  activeColor?: string;
  onVisibleChange?: (visible: boolean) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> & {
  Item: typeof DropdownMenuItem;
} = (props) => {
  const {
    overlay = true,
    container = document.body,
    activeColor = '#00C694',
    visible: visibleProp, // eslint-disable-line @typescript-eslint/no-unused-vars
    onVisibleChange, // eslint-disable-line @typescript-eslint/no-unused-vars
    children,
    ...restProps
  } = props;

  const innerContainer = React.useMemo(() => container || document.body, [container]);

  const [visible, setVisible] = useControllableValue(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange'
  });
  const [current, setCurrent] = React.useState<number>();
  const ref = React.useRef<HTMLDivElement>(null);

  useClickAway(ref, () => {
    setCurrent(undefined);
    setVisible(false);
  });

  React.useEffect(() => {
    innerContainer.style.overflow = visible ? 'hidden' : '';

    return () => {
      innerContainer.style.overflow = '';
    };
  }, [innerContainer, visible]);

  const views: any[] = [];
  const overlays: any[] = [];

  React.Children.forEach<React.ReactElement>(
    children as React.ReactElement,
    (child: JSX.Element, index) => {
      // console.log(child?.type?.name, index);
      // if (child?.type?.name !== 'DropdownMenuItem') {
      //   return;
      // }

      const childProps: DropdownMenuItemProps = {
        arrow: true,
        ...child?.props
      };

      const divProps = omit(childProps, [
        'title',
        'arrow',
        'options',
        'value',
        'noDropdown',
        'children',
        'highlight'
      ]);

      views.push(
        // @ts-ignore
        <div
          {...divProps}
          onClick={(e) => {
            e.stopPropagation();
            if ((current === index && visible) || childProps.noDropdown) {
              setCurrent(undefined);
              setVisible(false);
            } else {
              setCurrent(index);
              setVisible(true);
            }

            divProps?.onClick?.(e);
          }}
          className={classnames(`${classPrefix}-item`, divProps.className, {
            [`${classPrefix}-opened`]: current === index && visible,
            [`${classPrefix}-highlight`]: childProps.highlight
          })}
          style={{
            color: (current === index && visible) || childProps.highlight ? activeColor : undefined,
            ...divProps?.style
          }}
          key={index}
        >
          {childProps?.title}
          {childProps?.arrow && <ChevronDown className={`${classPrefix}-arrowIcon`} />}
        </div>
      );

      if (
        Array.isArray(childProps.options) &&
        childProps.options.length > 0 &&
        childProps.noDropdown !== true
      ) {
        overlays.push(
          <Collapse
            in={current === index && visible}
            className={`${classPrefix}-collapse`}
            key={index}
          >
            <div className={`${classPrefix}-list`}>
              <ul>
                {childProps.options.map((item) => (
                  <li
                    className={item.value === childProps?.value ? `${classPrefix}-active` : ''}
                    style={{
                      color: item.value === childProps?.value ? activeColor : undefined
                    }}
                    onClick={() => {
                      if (item.value !== childProps.value) {
                        childProps?.onChange?.(item.value);
                      }

                      setCurrent(undefined);
                      setVisible(false);
                    }}
                    key={item.value}
                  >
                    <div className={`${classPrefix}-text`}>{item.name}</div>
                    <div className={`${classPrefix}-extra`}>
                      <Check2 />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        );
      } else if (React.isValidElement(childProps.children)) {
        overlays.push(
          <Collapse
            in={current === index && visible}
            className={`${classPrefix}-collapse`}
            key={index}
          >
            {childProps.children}
          </Collapse>
        );
      }
    }
  );

  return (
    <div ref={ref} className={`${classPrefix}-wrapper`}>
      <div {...restProps} className={classnames(classPrefix, restProps?.className)}>
        {views}
      </div>
      {overlays}
      {overlay && (
        <Overlay
          visible={
            typeof current !== 'undefined' &&
            visible &&
            !(children as JSX.Element[])[current]?.props.noDropdown
          }
          onClick={() => {
            setCurrent(undefined);
            setVisible(false);
          }}
          style={{
            top: (ref.current?.getBoundingClientRect().y || 0) + (ref.current?.offsetHeight || 0)
          }}
        />
      )}
    </div>
  );
};

DropdownMenu.Item = DropdownMenuItem;

export default DropdownMenu;
