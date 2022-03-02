const makePayload = (type: string, payload: any) => {
  return { type: type, payload: payload };
};
export default function (input) {
  const actions = [];
  const result = [];
  actions.unshift(makePayload("toHandle", { input, output: result }));
  while (actions.length > 0) {
    const action = actions.shift();
    const { type, payload } = action;
    if (type === "toHandle") {
      const { input, output } = payload;
      if (input.length === 0) {
        // do nothing
      } else if (input.length === 1) {
        output.push(input[0]);
      } else {
        
      }
    }
  }
  return result;
}
