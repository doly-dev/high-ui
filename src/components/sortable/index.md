# Sortable

排序

点击改变顺序为 `undefined` 不排序 -> `asc` 升序 -> `desc` 降序 -> `undefined` 不排序

## 代码演示

### 非受控

<code src='./demos/basic.tsx' />

### 受控

<code src='./demos/controllable.tsx' />

### 禁用

<code src='./demos/disable.tsx' />

### 升序和降序

结果只在 `asc` `desc` 之间切换。

<code src='./demos/noUndefined.tsx' />

## API

```typescript
type SrotableType = 'asc' | 'desc' | undefined;

interface SortableProps {
  text?: React.ReactNode;
  defaultValue?: SortableType;
  value?: SortableType;
  disabled?: boolean;
  onChange?: (sortable: SortableType) => void;
}
```

### Sortable

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文本 | `ReactNode` | - |
| defaultValue | 默认值 | `SortableType` | - |
| value | 值，设置后变为受控模式 | `SortableType` | - |
| disabled | 禁用 | `boolean` | `false` |
| onChange | 改变时触发。受控时，可在该回调中改变值。 | `(sortable?: SortableType) => void` | - |

### CSS 变量

| 参数                | 说明                 | 默认值                      |
| ------------------- | -------------------- | --------------------------- |
| --icon-color        | 三角图标默认颜色     | `rgb(var(--high-grey-400))` |
| --icon-colo-actived | 三角图标激活时的颜色 | `--high-primary`            |
