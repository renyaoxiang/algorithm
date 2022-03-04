import chai from "chai";
import chaiArrays from "chai-arrays";
chai.use(chaiArrays);

chai.use(chaiArrays);
const expect = chai.expect;
import dataList from "./data";
import combination from "../combination";
import combination2 from "../combination2";
import dataList2 from "./data2";

describe("combination", function () {
  it("combination should true", function (done) {
    this.timeout(1000);
    console.time("combination");
    for (let data of dataList) {
      const output = combination(data.input);
      expect(output.length).to.be.equal(data.output.length);
      data.output.forEach((it: any, index: string | number) => {
        expect(output[index]).to.be.equalTo(it);
      });
    }
    console.timeEnd("combination");
    done();
  });
  it("combination2 should true", function (done) {
    this.timeout(1000);
    console.time("combination2");
    for (let data of dataList2) {
      const output = combination2(data.input);
      expect(output.length).to.be.equal(data.output.length);
      data.output.forEach((it: any, index: string | number) => {
        expect(output[index]).to.be.equalTo(it);
      });
    }
    console.timeEnd("combination2");
    done();
  });
});
