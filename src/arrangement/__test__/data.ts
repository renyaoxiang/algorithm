export default [
  {
    input: [],
    output: [],
  },
  {
    input: [1],
    output: [[1]],
  },
  {
    input: [1, 2],
    output: [
      [1, 2],
      [2, 1],
    ],
  },
  {
    input: [1, 2, 3],
    output: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },
];
/**
 * 1、result:=[] ： (toHandle)
 * 2、分组(toSplit),{获取分组业务数据(toHandle)，对分组业务数据添加主键数据(toConcatSubIndex)}将添加了主键的业务数据放到result中(toConcat)
 * 2.1、分3组，
 */