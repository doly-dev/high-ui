/**
 * title: 淡入淡出
 * desc: 第一次挂载时渲染节点，并且退出动画后卸载节点。
 */
import * as React from 'react';
import { Fade } from 'high-ui';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible((x) => !x)}>切换动画</button>

      <Fade in={visible} mountOnEnter unmountOnExit>
        <div style={{ width: 100, height: 100, background: '#999' }} />
      </Fade>
    </div>
  );
};

export default Demo;
