interface Action {
  type: string;
  payload: any;
} 
const makePayload = (type: string, payload: any) => {
  return { type: type, payload: payload };
};
export default function (input: number[]) {
  const actions: Action[] = [];
  const result: number[][] = [];
  actions.unshift(makePayload("toHandle", { input: input, output: result }));
  while (actions.length > 0) {
    const action = actions.shift();
    const type = action?.type;
    const payload = action?.payload;
    if (type === "toHandle") {
      const { input, output } =  payload;
      if (input.length === 0) {
      } else if (input.length === 1) {
        output.push([...input]);
      } else if (input.length > 1) {
        const subOutputList = [];
        actions.unshift(
          makePayload("toConcat", { input: subOutputList, output: output })
        );
        actions.unshift(makePayload("toSplit", { subOutputList, input }));
      }
    } else if (type === "toSplit") {
      const { subOutputList, input } = payload;
      for (let i = 0; i < input.length; i++) {
        const subOutput = [];
        subOutputList.push(subOutput);
        actions.unshift(
          makePayload("toConcatSubIndex", {
            subIndex: input[i],
            output: subOutput,
          })
        );
        const subInput = [...input];
        subInput.splice(i, 1);
        actions.unshift(
          makePayload("toHandle", {
            input: subInput,
            output: subOutput,
          })
        );
      }
    } else if (type === "toConcat") {
      const { input, output } = payload;
      input.forEach((it: number[][]) => {
        it.forEach((it2) => {
          output.push(it2);
        });
      });
    } else if (type === "toConcatSubIndex") {
      const { subIndex, output } = payload;
      output.forEach((it: number[]) => {
        it.unshift(subIndex);
      });
    }
  }
  return result;
}
