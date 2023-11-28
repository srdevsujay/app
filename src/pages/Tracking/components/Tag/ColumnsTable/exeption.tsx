import { SpanColumnRule } from "../../../styled-components/TableRule";

export const exeptionColumn = (themeState: any) => {
  return {
    title: "Excepciones",
    field: "exeptions",
    render: (dataRule: any) => {
      let dataExeption = JSON.parse(dataRule.exeptions);
      return dataExeption.map((dExc: any) => (
        <SpanColumnRule>
          <span
            className={
              themeState === true || themeState === "true" ? "themeDark" : ""
            }
          >
            {dExc}
          </span>
        </SpanColumnRule>
      ));
    },
  };
};
