---
group:
  title: DropdownMenu
---

# DropdownMenu

下拉菜单

## 代码演示

### 基础用法

<code iframe src='./demos/basic.tsx' />

### 部分没有下拉

<code iframe src='./demos/options.tsx' />

### 自定义内容和样式

<code iframe src='./demos/defined.tsx' />

## API

### DropdownMenu

| 参数            | 说明                             | 类型                      | 默认值          |
| --------------- | -------------------------------- | ------------------------- | --------------- |
| activeColor     | 选中态颜色                       | `string`                  | `'#00C694'`     |
| visible         | 是否显示。设置后将变为`受控模式` | `boolean`                 | -               |
| onVisibleChange | 改变显示状态时触发               | `(visible:boolean)=>void` | -               |
| overlay         | 是否显示蒙层                     | `boolean`                 | `true`          |
| container       | 滚动容器                         | `HTMLElement`             | `document.body` |

### DropdownMenu.Item

| 参数       | 说明                                     | 类型                   | 默认值 |
| ---------- | ---------------------------------------- | ---------------------- | ------ |
| arrow      | 是否显示箭头                             | `boolean`              | `true` |
| title      | 菜单项标题                               | `ReactNode`            | -      |
| highlight  | 高亮显示菜单项标题                       | `boolean`              | -      |
| options    | 选项数组                                 | `{name: string;}`      | -      |
| value      | 当前选中的值，选项中如果有一样的会高亮。 | `any`                  | -      |
| onChange   | 选项改变时触发                           | `(value: any) => void` | -      |
| children   | 自定义内容                               | `JSX.Element`          | -      |
| noDropdown | 标识没有下拉菜单                         | `string`               | -      |
