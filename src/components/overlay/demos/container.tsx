import * as React from 'react';
import { Overlay } from 'high-ui';

const Demo: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button onClick={() => setVisible((x) => !x)}>切换显示</button>
      <Overlay
        container={() => document.body}
        visible={visible}
        onClick={() => setVisible(false)}
      />
    </>
  );
};

export default Demo;
