const chai = require("chai");
const assertArrays = require("chai-arrays");
chai.use(assertArrays);
const expect = chai.expect;
const TreeTestUtil = require("./TreeTestUtil");
const inorder = require("../inorder");
const inorder2 = require("../inorder2");
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
