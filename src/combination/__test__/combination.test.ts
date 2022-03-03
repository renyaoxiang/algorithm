import chai from "chai";
import chaiArrays from "chai-arrays";
chai.use(chaiArrays);

chai.use(chaiArrays);
const expect = chai.expect;
import dataList from "./data";
import combination from "../combination";
describe("combination", function () {
  it("combination should true", function () {
    for (let data of dataList) {
      const output = combination(data.input);
      expect(output.length).to.be.equal(data.output.length);
      data.output.forEach((it: any, index: string | number) => {
        expect(output[index]).to.be.equalTo(it);
      });
    }
  });
});
