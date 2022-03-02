import Tree from "../../Tree";
const TreeTestUtil = {
  name: "treeTestUtil",
  buildTestTreeData: function () {
    const root = new Tree(0);
    const level1_node1 = new Tree(1);
    const level1_node2 = new Tree(2);
    root.updateChildren(level1_node1, level1_node2);
    const level2_node1 = new Tree(3);
    const level2_node2 = new Tree(4);
    level1_node1.updateChildren(level2_node1, level2_node2);
    const level2_node3 = new Tree(5);
    const level2_node4 = new Tree(6);
    level1_node2.updateChildren(level2_node3, level2_node4);
    return root;
  },
  getPostorderTreeArray: function () {
    return [3, 4, 1, 5, 6, 2, 0];
  },
};
export default TreeTestUtil;
