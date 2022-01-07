import { createContext } from 'react';

// export declare type DirectionType = 'ltr' | 'rtl';

const defaultGlobalClassPrefix = 'high';
let globalClassPrefix: string;

const getGlobalClassPrefix = () => {
  return globalClassPrefix || defaultGlobalClassPrefix;
};

// TODO
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setGlobalClassPrefix = (prefix: string) => {
  globalClassPrefix = prefix;
};

const getClassPrefix = (suffix?: string, customClassPrefix?: string) => {
  if (customClassPrefix) {
    return customClassPrefix;
  }
  const classPrefix = getGlobalClassPrefix();
  return suffix ? `${classPrefix}-${suffix}` : classPrefix;
};

export type ConfigContextProps = {
  getClassPrefix?: typeof getClassPrefix;
  // direction?: DirectionType;
  Locale?: string;
};

const ConfigContext = createContext<ConfigContextProps>({
  getClassPrefix
  // direction: 'ltr'
});

export default ConfigContext;
