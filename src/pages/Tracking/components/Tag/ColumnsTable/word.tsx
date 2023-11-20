import { SpanColumnRule } from "../../../styled-components/TableRule";

export const wordColumn = (themeState: any) => {
  return {
    title: "Coincidencias",
    field: "words",
    render: (dataRule: any) => {
      let dataWords = JSON.parse(dataRule.words);
      return dataWords.map((word: any) => (
        <SpanColumnRule>
          <span
            className={
              themeState === true || themeState === "true" ? "themeDark" : ""
            }
          >
            {word}
          </span>
        </SpanColumnRule>
      ));
    },
  };
};
