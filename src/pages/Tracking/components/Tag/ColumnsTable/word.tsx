import { SpanColumnRule } from "../../../styled-components/TableRule";

export const wordColumn = () => {
  return {
    title: "Coincidencias",
    field: "words",
    render: (dataRule: any) => {
      let dataWords = JSON.parse(dataRule.words);
      console.log("dataWords", dataWords);
      return dataWords.map((word: any) => (
        <SpanColumnRule>
          <span>{word}</span>
        </SpanColumnRule>
      ));
    },
  };
};
