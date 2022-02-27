const chai = require("chai");
const expect = chai.expect;
const TreeTestUtil = require("./TreeTestUtil");
const preorder = require("../preorder");
const preorder2 = require("../preorder2");
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
