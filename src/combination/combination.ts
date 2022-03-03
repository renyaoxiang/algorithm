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
        output.push([input[0]]);
      } else {
        actions.unshift(
          makePayload("toSplitForPartialCombination", { input, output })
        );
      }
    } else if (type === "toSplitForPartialCombination") {
      const { input, output } = payload;
      for (let i = input.length; i > 0; i--) {
        actions.unshift(
          makePayload("toPartialCombination", { input, length: i, output })
        );
      }
    } else if (type === "toPartialCombination") {
      const { input, output, length } = payload;
      const partResult = [];
      const onFilled = (partResult) => {
        output.push([...partResult]);
      };
      actions.unshift(
        makePayload("partialCombination", {
          partResult,
          length,
          input,
          current: 0,
          onFilled,
        })
      );
    } else if (type === "partialCombination") {
      const { partResult, length, input, current, onFilled } = payload;
      if (partResult.length === length) {
        onFilled(partResult);
      } else if (partResult.length < length) {
        if (current < input.length) {
          actions.unshift(
            makePayload("partialCombination", {
              partResult: [...partResult],
              length,
              input,
              current: current + 1,
              onFilled,
            })
          );
          actions.unshift(
            makePayload("partialCombination", {
              partResult: [...partResult, input[current]],
              length,
              input,
              current: current + 1,
              onFilled,
            })
          );
        }
      }
    }
  }
  return result;
}
