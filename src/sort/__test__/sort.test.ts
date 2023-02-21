import chai from "chai";
import chaiArrays from "chai-arrays"
chai.use(chaiArrays);
const expect = chai.expect;
import sort from "../sort";
import { BubbleSort } from "../BubbleSort";
import { InsertionSortor } from "../InsertionSort";
import { SelectionSortor } from "../SelectionSort";
import { MergeSort } from "../MergeSort";
import { QuickSort } from "../QuickSort";
import { HeapSort } from "../Heapsort";
import { ShellSort } from "../ShellSort";
import { BucketSort } from "../BucketSort";
import { RadixBoxSort } from "../RadixSort";
import { CountSort } from "../CountSort";

const testData = [
  {
    input: [2, 5, 3, 2, 1, 4, 1],
    expect: [1, 1, 2, 2, 3, 4, 5],
  },
];

describe("sort", function () {
  it("sort should true", function () {
    testData.forEach(it => {
      const data = sort(it.input);
      expect(data).to.be.equalTo(it.expect);
    })
  });
});

describe("BubbleSort", function () {
  it("BubbleSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new BubbleSort<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});

describe("InsertionSortor", function () {
  it("InsertionSortor should true", function () {
    testData.forEach(it => {
      const bubbleSort = new InsertionSortor<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});

describe("SelectionSortor", function () {
  it("SelectionSortor should true", function () {
    testData.forEach(it => {
      const bubbleSort = new SelectionSortor<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});


describe("MergeSort", function () {
  it("MergeSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new MergeSort<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});


describe("QuickSort", function () {
  it("QuickSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new QuickSort<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});


describe("HeapSort", function () {
  it("HeapSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new HeapSort<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});

describe("ShellSort", function () {
  it("ShellSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new ShellSort<Number>();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});

describe("BucketSort", function () {
  it("BucketSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new BucketSort();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});
describe("RadixBoxSort", function () {
  it("RadixBoxSort should true", function () {
    console.warn("RadixBoxSort todo")
  });
});
describe("CountSort", function () {
  it("CountSort should true", function () {
    testData.forEach(it => {
      const bubbleSort = new CountSort();
      bubbleSort.setInput(it.input);
      bubbleSort.setComparator((o1: Number, o2: Number) => {
        return o1 > o2 ? 1 : o1 === o2 ? 0 : -1;
      })
      bubbleSort.sort();
      const data = bubbleSort.getOutput();
      expect(data).to.be.equalTo(it.expect);
    })
  });
});