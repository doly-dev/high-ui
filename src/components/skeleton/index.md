# Skeleton

> TODO

骨架屏

## 代码演示

### 基础用法

<code src='./demos/basic.tsx' />

### 矩形

<code src='./demos/rect.tsx' />

### 圆形

<code src='./demos/circle.tsx' />

### 卡片

<code src='./demos/card.tsx' />

### 宫格

<code src='./demos/grid.tsx' />

## API

矩形 和 圆形支持 div 标签所有属性。

### Rect

矩形

```typescript
import { Rect } from '@/components/_base/Skeleton';
```

| 参数   | 说明         | 类型               | 默认值   |
| ------ | ------------ | ------------------ | -------- |
| width  | 宽           | `number \| string` | `'100%'` |
| height | 高           | `number \| string` | `14`     |
| round  | 是否显示圆角 | `boolean`          | `true`   |
| active | 是否显示动画 | `boolean`          | `true`   |

### Circle

圆形

```typescript
import { Circle } from '@/components/_base/Skeleton';
```

| 参数   | 说明         | 类型               | 默认值 |
| ------ | ------------ | ------------------ | ------ |
| size   | 半径         | `number \| string` | `40`   |
| active | 是否显示动画 | `boolean`          | `true` |

### Card

卡片

```typescript
import { Card } from '@/components/_base/Skeleton';
```

| 参数   | 说明         | 类型      | 默认值 |
| ------ | ------------ | --------- | ------ |
| total  | 卡片数       | `number`  | `5`    |
| active | 是否显示动画 | `boolean` | `true` |

### Grid

宫格

```typescript
import { Grid } from '@/components/_base/Skeleton';
```

| 参数    | 说明         | 类型                  | 默认值 |
| ------- | ------------ | --------------------- | ------ |
| total   | 宫格数       | `number`              | `10`   |
| rowCols | 每行宫格数   | `RowProps['rowCols']` | `5`    |
| active  | 是否显示动画 | `boolean`             | `true` |
