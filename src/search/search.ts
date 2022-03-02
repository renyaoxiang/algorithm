export default function (inputArray, target) {
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
          end: payload.data.length - 1,
          data: payload.data,
        },
      });
    } else if (type === "toCheck") { 
      if (payload.start < payload.end) {
        let mid = Math.floor((payload.start + payload.end) / 2);
        if (payload.data[mid] === target) {
          result = mid;
          find = true;
        } else if (payload.data[mid] < target) {
          actions.unshift({
            type: "toCheck",
            payload: {
              start: mid + 1,
              end: payload.end,
              data: payload.data,
            },
          });
        } else {
          actions.unshift({
            type: "toCheck",
            payload: {
              start: payload.start,
              end: mid - 1,
              data: payload.data,
            },
          });
        }
      }
    }
  }
  return result;
};
