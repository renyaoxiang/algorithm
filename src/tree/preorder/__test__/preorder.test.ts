import chai from "chai";
import chaiArrays from "chai-arrays" 
chai.use(chaiArrays);
const expect = chai.expect;
import TreeTestUtil from "./TreeTestUtil";
import preorder from "../preorder";
import preorder2 from "../preorder2";
describe("preorder", function () {
  it("preorder should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = preorder(treeData);
    expect(data.join(",")).to.be.equal(
      TreeTestUtil.getPreorderTreeArray().join(",")
    );
  });
});

describe("preorder2", function () {
  it("preorder2 should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = preorder2(treeData); 
    expect(data.join(",")).to.be.equal(
      TreeTestUtil.getPreorderTreeArray().join(",")
    );
  });
});
