/**
 * inline: true
 */
import * as React from 'react';
import classnames from 'classnames';
import Panel from './Panel';
import { ColorType, ContrastMode } from '../constants';
import styles from './index.less';

interface PaletteProps {
  data: { color: string; name: string }[];
  showColor?: boolean;
  showName?: boolean;
  showContrast?: boolean;
  contrastMode?: ContrastMode;
  colorType?: ColorType;
  copyField?: 'color' | 'name';
  className?: string;
  style?: React.CSSProperties;
}

const Palette: React.FC<PaletteProps> = ({
  data,
  colorType = ColorType.RGB,
  showColor = true,
  showName = true,
  showContrast = true,
  contrastMode = ContrastMode.Material,
  copyField = 'color',
  className,
  style,
}) => {
  return (
    <div className={classnames(styles.palette, className)} style={style}>
      {data.map((item) => (
        <Panel
          key={item.name}
          color={item.color}
          name={item.name}
          type={colorType}
          mode={contrastMode as ContrastMode}
          showColor={showColor}
          showName={showName}
          showContrast={showContrast}
          copyField={copyField}
        />
      ))}
    </div>
  );
};

export default Palette;
