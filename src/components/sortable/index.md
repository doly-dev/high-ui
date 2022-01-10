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
export enum SortableTypeEnum {
  ASC = 'asc',
  DESC = 'desc'
}
type SrotableType = 'asc' | 'desc' | undefined;

export interface SortableProps {
  text?: React.ReactNode;
  defaultValue?: SortableType;
  value?: SortableType;
  disabled?: boolean;
  onChange?: (sortable: SortableType) => void;
  className?: string;
  style?: React.CSSProperties;
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
| className | class | `string` | - |
| style | 样式 | `CSSProperties` | - |

### CSS 变量

| 变量名                            | 说明             | 默认值                            |
| --------------------------------- | ---------------- | --------------------------------- |
| --high-sortable-color             | 默认文本颜色     | `currentColor`                    |
| --high-sortable-color-active      | 激活时的文本颜色 | `--high-theme-primary`            |
| --high-sortable-font-size         | 文本大小         | `1em`                             |
| --high-sortable-opacity-disabled  | 禁用时透明度     | `0.5`                             |
| --high-sortable-icon-font-size    | 图标大小         | `0.7em`                           |
| --high-sortable-icon-color        | 默认图标颜色     | `rgb(var(--high-theme-grey-400))` |
| --high-sortable-icon-color-active | 激活时的图标颜色 | `--high-theme-primary`            |
| --high-sortable--space            | 文字和图标间距   | `2px`                             |
