import * as React from 'react';
import { Collapse } from 'high-ui';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <button onClick={() => setVisible((x) => !x)}>切换动画</button>
      <Collapse in={visible}>
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
