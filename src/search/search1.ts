export default  function (inputArray, target) {
  let result = -1;
  const actions = [];
  let find = false;
  actions.push({ type: "toHandle", payload: { data: inputArray } });
  while (actions.length > 0 && !find) {
    const action = actions.shift();
    const { type, payload } = action;
    if (type === "toHandle") {
      actions.unshift({
        type: "toCheck",
        payload: {
          start: 0,
          end: inputArray.length - 1,
        },
      });
    } else if (type === "toCheck") {
      if (payload.start < payload.end) {
        let mid = Math.floor((payload.start + payload.end) / 2);
        if (inputArray[mid] === target) {
          result = mid;
          find = true;
        } else if (inputArray[mid] < target) {
          actions.unshift({
            type: "toCheck",
            payload: {
              start: mid + 1,
              end: payload.end,
            },
          });
        } else {
          actions.unshift({
            type: "toCheck",
            payload: {
              start: payload.start,
              end: mid - 1,
            },
          });
        }
      }
    }
  }
  return result;
};
