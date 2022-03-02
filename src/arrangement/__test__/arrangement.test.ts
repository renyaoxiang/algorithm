import chai from "chai";
import chaiArrays from "chai-arrays";
chai.use(chaiArrays);
const expect = chai.expect;
import dataList from "./data";
import arrangement from "../arrangement";
describe("arrangement", function () {
  it("arrangement should true", function () {
    for (let data of dataList) {
      const output = arrangement(data.input); 
      expect(output.length).to.be.equal(data.output.length);
      data.output.forEach((it: any, index: string | number) => {
        expect(output[index]).to.be.equalTo(it);
      });
    }
  });
});
