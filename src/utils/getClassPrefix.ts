const defaultGlobalClassPrefix = 'high';

const getClassPrefix = (suffix?: string, customClassPrefix?: string) => {
  if (customClassPrefix) {
    return customClassPrefix;
  }
  return suffix ? `${defaultGlobalClassPrefix}-${suffix}` : defaultGlobalClassPrefix;
};

export default getClassPrefix;
