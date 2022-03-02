const item = (key, label) => {
  return { key: key, label: label || key };
};
const equals = (item1, item2) => {
  return item1.key === item2.key;
};
export default  [
  {
    input: [2,5,2,1,4],
    expect: [1,2,2,4,5],
  },
];
