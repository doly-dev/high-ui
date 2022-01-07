import * as React from 'react';
import { Overlay } from 'high-ui';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <button onClick={() => setVisible((x) => !x)}>切换显示</button>
      <Overlay visible={visible} onClick={() => setVisible(false)} />
    </>
  );
};

export default Demo;
