const rules = [
  {
    text: 'AAA',
    range: [7, 21]
  },
  {
    text: 'AA',
    range: [4.5, 7]
  },
  {
    text: 'AA18',
    range: [3, 4.5]
  },
  {
    text: '不通过',
    range: [1, 3]
  }
];

export const getWcagRule = (contrast: number) => {
  return rules.find((ruleItem) => contrast >= ruleItem.range[0]);
};
