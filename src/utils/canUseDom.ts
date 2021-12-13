// 当前运行环境是否可以使用 dom
const canUseDom =
  typeof window !== 'undefined' &&
  typeof document !== 'undefined' &&
  window?.document &&
  window.document?.createElement;

export default canUseDom;
