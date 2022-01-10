import * as React from 'react';
import ConfigContext from './context';
export * from './context';
export { ConfigContext };

// TODO: 全局配置包含默认值
// const ConfigProvider = () => {
//   return (
//     <ConfigContext.Provider value={{}}>
//     </ConfigContext.Provider>
//   )
// }

export default ConfigContext.Provider;
