export default  function (input) {
  const actions = [];
  let finish = false;
  const result = [];
  actions.unshift({ type: "toHandle", payload: input });
  while (actions.length > 0 && !finish) {
    const action = actions.shift();
    const { type, payload } = action;
    if (type === "toHandle") { 
      actions.unshift({
        type: "toConcat",
        payload: {
          sorted: result,
          unsorted: [...input],
        },
      });
    } else if (type === "toConcat") {
      const { sorted, unsorted } = payload;
      if (unsorted.length > 0) {
        actions.unshift({ type: "toConcat", payload: payload });
        const cacheKey = { data: null };
        actions.unshift({
          type: "toInsertKey",
          payload: {
            sorted: sorted,
            cacheKey: cacheKey,
          },
        });
        actions.unshift({
          type: "toFindMinistKey",
          payload: {
            unsorted,
            cacheKey,
          },
        });
      }
    } else if (type === "toInsertKey") {
      const { sorted, cacheKey } = payload;
      sorted.push(cacheKey.data);
    } else if (type === "toFindMinistKey") {
      const { unsorted, cacheKey } = payload;
      let minist = unsorted[0];
      let ministIndex = 0;
      for (let i = 0; i < unsorted.length; i++) {
        if (minist > unsorted[i]) {
          ministIndex = i;
          minist = unsorted[i];
        }
      } 
      unsorted.splice(ministIndex, 1);
      cacheKey.data = minist;
    }
  }
  return result;
};
