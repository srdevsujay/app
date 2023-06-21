import React, { useEffect, useState } from "react";
import * as echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import { Pnl } from "../../models/dashboard.model";
import { groupAndSumDatePNL } from "../../../../utilities/groupSumPNL";
import { Checkbox } from "@mui/material";
import { FormatNumber } from "../../../../utilities/FormatNumber";
import { useAppSelector } from "../../../../hooks/appDispatch";
import { HeaderTitleGraphic } from "../../styled-components/dashboardStyled";
import { SpanTitle } from "../../../../styled-components/span/index";
import { BeatLoader } from "react-spinners";

const Graphics = ({ selectPlatform, groupPlataform, isLoading }: any) => {
  const dashboardMain = useAppSelector((state) => state.dashboard.dataPNL);
  const [dataIncome, setDataIncome] = useState<number[]>([]);
  const [dataExpense, setDataExpense] = useState<number[]>([]);
  const [dateGraphic, setDateGraphic] = useState<string[]>([]);
  const [dateTotal, setDateTotal] = useState<Pnl[]>([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);
  const [checkedSelectIncomeGraphic, setCheckedSelectIncomeGraphic] =
    useState(true);
  const [checkedSelectCostsGraphic, setCheckedSelectCostsGraphic] =
    useState(true);
  const [auxDataIncome, setAuxDataIncome] = useState<number[]>([]);
  const [auxDataExpense, setAuxDataExpense] = useState<number[]>([]);

  useEffect(() => {
    const resultado = groupAndSumDatePNL(dashboardMain);
    setDateTotal(resultado);
    const dataIncome = resultado.map((data) => data.ingresos);
    const dataExpense = resultado.map((data) => data.gastos);
    const dateGraphic = resultado.map((data) => data.date);

    setDataIncome(dataIncome.reverse());
    const sumTotalIncome = dataIncome.reduce((acc, val) => acc + val, 0);
    setTotalIncome(sumTotalIncome);

    setDataExpense(dataExpense.reverse());
    const sumTotalExpense = dataExpense.reduce((acc, val) => acc + val, 0);
    setTotalExpense(sumTotalExpense);

    setDateGraphic(dateGraphic.reverse());
    console.log("resultado", resultado);
  }, [dashboardMain]);

  // useEffect(() => {
  //   const resultado = groupAndSumDatePNL(selectPlatform);
  //   setDateTotal(resultado);
  //   const dataIncome = resultado.map((data) => data.ingresos);
  //   const dataExpense = resultado.map((data) => data.gastos);
  //   const dateGraphic = resultado.map((data) => data.date);

  //   setDataIncome(dataIncome.reverse());
  //   const sumTotalIncome = dataIncome.reduce((acc, val) => acc + val, 0);
  //   setTotalIncome(sumTotalIncome);

  //   setDataExpense(dataExpense.reverse());
  //   const sumTotalExpense = dataExpense.reduce((acc, val) => acc + val, 0);
  //   setTotalExpense(sumTotalExpense);

  //   setDateGraphic(dateGraphic.reverse());
  //   console.log("resultado", resultado);
  // }, [selectPlatform]);

  const option = {
    nameTextStyle: {
      fontSize: 20,
      fontWeight: "normal",
    },
    color: ["#E3507A", "#31bb59"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Ingresos", "Gastos"],
      left: 14,
      itemGap: 30,
      textStyle: {
        fontSize: 10,
        fontFamily: "Helvetica-NeueL-Title",
        fontWeight: 400,
      },
      itemWidth: 6,
      itemHeight: 6,
      top: "2%",
    },
    grid: {
      top: "12%",
      left: "4%",
      right: "6%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        // data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: dateGraphic,
        inverse: true,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "",
        type: "line",
        stack: "Total",
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(244, 129, 129)",
            },
            {
              offset: 1,
              color: "rgb(255, 244, 244)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        // data: [150, 232, 201, 154, 190, 330, 410],
        data: dataExpense,
      },
      {
        name: "",
        type: "line",
        stack: "Total",
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(43, 181, 150)",
            },
            {
              offset: 1,
              color: "rgb(255, 244, 244)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        // data: [320, 332, 301, 334, 390, 330, 320],
        data: dataIncome,
      },
    ],
  };

  useEffect(() => {
    setAuxDataIncome(dataIncome);
    setAuxDataExpense(dataExpense);
    if (
      checkedSelectIncomeGraphic === false &&
      checkedSelectCostsGraphic === false
    ) {
      setDataIncome(auxDataIncome);
      setDataExpense(auxDataExpense);
    } else if (
      checkedSelectIncomeGraphic === true &&
      checkedSelectCostsGraphic === true
    ) {
      setDataIncome(auxDataIncome);
      setDataExpense(auxDataExpense);
    } else if (
      checkedSelectCostsGraphic === true &&
      checkedSelectIncomeGraphic === false
    ) {
      setDataIncome([]);
    } else if (
      checkedSelectIncomeGraphic === true &&
      checkedSelectCostsGraphic === false
    ) {
      setDataExpense([]);
    }
  }, [checkedSelectIncomeGraphic, checkedSelectCostsGraphic]);

  const handleChangeSelectGraphicIncome = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedSelectIncomeGraphic(event.target.checked);
  };

  const handleChangeSelectGraphicCosts = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedSelectCostsGraphic(event.target.checked);
  };

  return (
    <div className="box-shadow">
      <HeaderTitleGraphic>
        <span>Ingresos - Gastos</span>
      </HeaderTitleGraphic>
      {groupPlataform.length === 0 || isLoading === true ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "250px", zIndex: "99999999" }}
        >
          <BeatLoader color="#3997FF" />
        </div>
      ) : (
        <>
          <div className="filterPNL mt-2">
            <div className="d-flex check-toggle-graphic">
              <Checkbox
                checked={checkedSelectIncomeGraphic}
                onChange={(e) => handleChangeSelectGraphicIncome(e)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <SpanTitle className="green">Ingresos</SpanTitle>
              <Checkbox
                checked={checkedSelectCostsGraphic}
                onChange={(e) => handleChangeSelectGraphicCosts(e)}
                className="ml-2"
              />
              <SpanTitle className="red">Gastos</SpanTitle>
            </div>
            <div className="d-flex justify-content-evenly w-75">
              {checkedSelectIncomeGraphic === true ? (
                <SpanTitle className="green ml-3">
                  Ingresos: <FormatNumber number={totalIncome} />
                </SpanTitle>
              ) : (
                ""
              )}
              {checkedSelectIncomeGraphic === true &&
              checkedSelectCostsGraphic === true ? (
                <span className="ml-2 mr-2">-</span>
              ) : (
                ""
              )}
              {checkedSelectCostsGraphic === true ? (
                <SpanTitle className="red">
                  Gastos: <FormatNumber number={totalExpense} />
                </SpanTitle>
              ) : (
                ""
              )}
            </div>
          </div>
          <ReactEcharts option={option} style={{ height: "270px" }} />
        </>
      )}
    </div>
  );
};

export default Graphics;
