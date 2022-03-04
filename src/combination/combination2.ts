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
      output.push([]);
      actions.unshift(
        makePayload("toHandlePartial", { input, output, current: 0 })
      );
    } else if (type === "toHandlePartial") {
      const { input, output, current } = payload;
      if (current < input.length) {
        const partialResult = [];
        for (let i = 0; i < output.length; i++) {
          partialResult.push([...output[i], input[current]]);
        }
        output.push(...partialResult);
        actions.unshift(
          makePayload("toHandlePartial", {
            input,
            output,
            current: current + 1,
          })
        );
      }
    }
  }
  result.shift();
  return result;
}
