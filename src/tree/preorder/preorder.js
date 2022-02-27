module.exports = function preorder(root) {
  const result = [];
  const actions = [];
  actions.unshift({ type: "toHandle", payload: root });
  while (actions.length > 0) {
    const action = actions.shift();
    const { type, payload } = action;
    if (type === "toHandle") {
      if (payload) {
        actions.unshift({ type: "toSplit", payload: payload });
      }
    } else if (type === "toSplit") {
      actions.unshift({ type: "toHandle", payload: payload.right });
      actions.unshift({ type: "toHandle", payload: payload.left });
      actions.unshift({ type: "value", payload: payload });
    } else if (type === "value") {
      result.push(payload.val);
    }
  }
  return result;
};
