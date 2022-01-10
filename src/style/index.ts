import './index.less';
import canUseDom from '../utils/canUseDom';

// ref: https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

if (canUseDom) {
  // 移动端:active伪类无效的解决方法
  document.body.addEventListener('touchstart', () => {});
}
