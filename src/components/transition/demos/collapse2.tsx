/**
 * title: 折叠
 * desc: 常用于隐藏部分信息，点击后显示更多信息
 */
import * as React from 'react';
import { Collapse } from 'high-ui';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible((x) => !x)}>切换动画</button>

      <Collapse in={visible} collapseOpacity={0.5} collapseSize={18}>
        <div style={{ background: '#ccc' }}>
          A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be
          found as a welcome guest in many households across the world. A dog is a type of
          domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome
          guest in many households across the world. A dog is a type of domesticated animal. Known
          for its loyalty and faithfulness, it can be found as a welcome guest in many households
          across the world.
        </div>
      </Collapse>
    </div>
  );
};

export default Demo;
