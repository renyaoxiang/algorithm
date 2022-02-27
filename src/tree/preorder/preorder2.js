module.exports = function preorder(root) {
  const result = [];
  const actions = [];
  actions.unshift(root);
  while (actions.length > 0) {
    const payload = actions.shift();
    if (payload) {
      result.push(payload.val);
      actions.unshift(payload.right);
      actions.unshift(payload.left);
    }
  }
  return result;
};
