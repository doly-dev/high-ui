import './index.less';
import canUseDom from '../utils/canUseDom';

if (canUseDom) {
  // 移动端:active伪类无效的解决方法
  document.body.addEventListener('touchstart', () => {});
}
