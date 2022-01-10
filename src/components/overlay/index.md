# Overlay

遮罩层

## 代码演示

### 基础用法

默认渲染当前节点

<code src='./demos/basic.tsx' />

### 自定义渲染节点

<code src='./demos/container.tsx' />

## API

```typescript
interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: ContainerType;
  visible?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}
```

### Overlay

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示 | `boolean` | `false` |
| container | 指定渲染 dom 节点，注意事件冒泡。默认渲染到当前节点。 | `HTMLElement \| ()=>HTMLElement` | - |
| mountOnEnter | 第一次挂载（`visible=true`）时再插入节点。如果为 false，默认插入节点。 | `boolean` | `true` |
| unmountOnExit | 不显示时卸载 dom 节点。 | `boolean` | `true` |

### CSS 变量

| 变量名               | 说明               | 默认值 |
| -------------------- | ------------------ | ------ |
| --high-overlay-alpha | 遮罩层背景色透明度 | `0.4`  |
