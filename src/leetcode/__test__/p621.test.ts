import leastInterval from "../p621";
import chai, { expect } from "chai";
const dataList = [
  {
    input: { tasks: ["A", "A", "A", "B", "B", "B"], n: 2 },
    output: 8,
  },
  {
    input: { tasks: ["A", "A", "A", "B", "B", "B"], n: 0 },
    output: 6,
  },
  {
    input: {
      tasks: ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
      n: 2,
    },
    output: 16,
  },
];
describe("p621", () => {
  it("test0", (done) => {
     const item = dataList[0];
     let result = leastInterval(item.input.tasks, item.input.n);
     expect(result).to.be.equal(item.output);
     done();
  });
  it("test1", (done) => {
    const item = dataList[1];
    let result = leastInterval(item.input.tasks, item.input.n);
    expect(result).to.be.equal(item.output);
    done();
  });
  it("test2", (done) => {
     const item = dataList[2];
     let result = leastInterval(item.input.tasks, item.input.n);
     expect(result).to.be.equal(item.output);
     done();
  });
});
