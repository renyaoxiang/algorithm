export default function Tree(val = null, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}
Tree.prototype.updateChildren = function (left, right) {
  this.left = left;
  this.right = right;
};
