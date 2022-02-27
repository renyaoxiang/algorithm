const chai = require("chai");
const expect = chai.expect;
const testData = require("./testData");
const sort = require("../sort"); 
describe("sort", function () {
  it("sort should true", function () {
    testData.forEach(it=>{
      const data = sort(it.input  );
      expect(data).to.be.equalTo(it.expect);
    })
  }); 
});
