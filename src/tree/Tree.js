function Tree(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}
Tree.prototype.updateChildren = function (left, right) {
  this.left = left;
  this.right = right;
};
module.exports = Tree;
