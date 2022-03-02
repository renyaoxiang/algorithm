import chai from "chai";
const expect = chai.expect;
import SearchData from "./searchData";
import search from "../search";
import search1 from "../search1";
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
