import chai from "chai";
import chaiArrays from "chai-arrays" 
chai.use(chaiArrays);
const expect = chai.expect;
import TreeTestUtil from "./TreeTestUtil";
import postorder from "../postorder";
import postorder2 from "../postorder2";
describe("postorder", function () {
  it("postorder should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = postorder(treeData);
    expect(data.join(",")).to.be.equal(
      TreeTestUtil.getPostorderTreeArray().join(",")
    );
  });
});

describe("postorder2", function () {
  it("postorder2 should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = postorder2(treeData); 
    expect(data.join(",")).to.be.equal(
      TreeTestUtil.getPostorderTreeArray().join(",")
    );
  });
});
