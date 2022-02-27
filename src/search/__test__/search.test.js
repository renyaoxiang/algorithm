const chai = require("chai");
const expect = chai.expect;
const SearchData = require("./searchData");
const search = require("../search");
const search1 = require("../search1");
describe("searchData", function () {
  it("search should true", function () {
    const data = search(SearchData.inputArray, SearchData.inputKey);
    expect(data).to.be.equal(SearchData.inputResult);
  });
  it("search1 should true", function () {
    const data = search1(SearchData.inputArray, SearchData.inputKey);
    expect(data).to.be.equal(SearchData.inputResult);
  });
});
