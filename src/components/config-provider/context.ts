import { createContext } from 'react';

type DirectionType = 'ltr' | 'rtl';

export type ConfigContextProps = {
  direction?: DirectionType;
  Locale?: string;
};

const ConfigContext = createContext<ConfigContextProps>({
  direction: 'ltr',
  Locale: 'zh_CN'
});

export default ConfigContext;
