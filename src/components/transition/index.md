# Transition

过渡动画

## 代码演示

### 淡入淡出 1

<code src='./demos/fade.tsx' />

### 淡入淡出 2

<code src='./demos/fade2.tsx' />

### 折叠 1

<code src='./demos/collapse.tsx' />

### 折叠 2

<code src='./demos/collapse2.tsx' />

### 滑动

<code src='./demos/slide.tsx' />

## API

### 共同的 API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| in | 显示组件触发动画 | `boolean` | `false` |
| timeout | 动画过渡时长，单位毫秒 | `number` | `300` |
| mountOnEnter | 默认插入 dom 节点。如果为 ture 则不插入节点，等第一次挂载时再插入节点 | `boolean` | `false` |
| unmountOnExit | 如果为 true， 不显示时卸载 dom 节点。 | `boolean` | `false` |

### Fade - 淡入淡出

```typescript
type FadeProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
```

同上。

### Collapse - 折叠

```typescript
type CollapseProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  direction?: 'horizontal' | 'vertical';
  collapseSize?: number | string;
  collapseOpacity?: number | string;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
```

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| direction | 动画方向。垂直对应 height，水平对应 width 。 | `'horizontal' \| 'vertical'` | `'vertical'` |
| collapseSize | 折叠时的长度 | `number \| string` | `0` |
| collapseOpacity | 折叠时的透明度 | `number` | `0` |

### Slide - 滑动

```typescript
type DirectionType = 'up' | 'right' | 'down' | 'left';

type SlideProps<RefElement extends undefined | HTMLElement = HTMLElement> = Partial<
  TransitionProps<RefElement>
> & {
  direction?: DirectionType;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
```

| 参数      | 说明     | 类型                                  | 默认值 |
| --------- | -------- | ------------------------------------- | ------ |
| direction | 动画方向 | `'up' \| 'right' \| 'down' \| 'left'` | `'up'` |
