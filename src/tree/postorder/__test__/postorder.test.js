const chai = require("chai");
const expect = chai.expect;
const TreeTestUtil = require("./TreeTestUtil");
const postorder = require("../postorder");
const postorder2 = require("../postorder2");
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
