import chai from "chai";
import chaiArrays from "chai-arrays" 
chai.use(chaiArrays);
const expect = chai.expect;
import TreeTestUtil from "./TreeTestUtil";
import inorder from "../inorder";
import inorder2 from "../inorder2";
describe("inorder", function () {
  it("inorder should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = inorder(treeData);
    expect(data).to.be.equalTo(TreeTestUtil.getInorderTreeArray());
  });
});

describe("inorder2", function () {
  it("inorder2 should true", function () {
    const treeData = TreeTestUtil.buildTestTreeData();
    const data = inorder2(treeData);
    expect(data).to.be.equalTo(TreeTestUtil.getInorderTreeArray());
  });
});
