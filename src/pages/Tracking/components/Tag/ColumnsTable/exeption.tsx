import { SpanColumnRule } from "../../../styled-components/TableRule";

export const exeptionColumn = () => {
  return {
    title: "Excepciones",
    field: "exeptions",
    render: (dataRule: any) => {
      let dataExeption = JSON.parse(dataRule.exeptions);
      console.log("dataExeption", dataExeption);
      return dataExeption.map((dExc: any) => (
        <SpanColumnRule>
          <span>{dExc}</span>
        </SpanColumnRule>
      ));
    },
  };
};
