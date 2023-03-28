import React, { useState, useEffect } from "react";
import {
  Title,
  ContainerFiltersFunnel,
} from "../../../Dashboard/styled-components/dashboardStyled";
import MuiAccordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { obtainApiDashboardFunnel } from "../../../../redux/state/slices/dashboard";
import MaterialTable from "material-table";
import DateFilter from "../../../Dashboard/components/DateFilter";
import { addDays } from "date-fns";
import moment from "moment";
import {
  yesterDay,
  todayDay,
  handleDays,
  currentWeek,
  lastWeek,
  currentMonth,
} from "../../../../utilities/functionDateFilter/HandleDate";
import Vector from "../../../../assets/images/Vector.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GeneralTable from "../../../../utilities/Table";
import { TypeDashboardDataTableColumns } from "../TypeDasboardFunnelData";
import { AppStore } from "../../../../redux/store";
import { CampaignData } from "../../../Dashboard/models/dashboard.model";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const AccordionFunnel = () => {
  const dispatch = useAppDispatch();
  const dataTracking: [] = useAppSelector(
    (state) => state.dashboard.dataTracking
  );
  console.log("dataTracking", dataTracking);
  const dataFunnel = useAppSelector((state) => state.dashboard.dataFunnel);
  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [funnelDays, setFunnelDays] = useState<number>(7);
  const [expanded, setExpanded] = useState(0);
  const [flagModal, setFlagModal] = useState<number>(0);
  const [titleDatePickerFunnel, setTitleDatePickerFunnel] = useState(
    "Selecciona una fecha"
  );
  const [currentCalendar, setCurrentCalendar] = useState([
    {
      startDate: addDays(new Date(), -6),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([]);
  const [columnsToSet, setColumnsToSet] = useState<any>([]);
  const [columnsFunnelHideShow, setColumnsFunnelHideShow] = useState<any>([]);
  const dataTrackingInitialState = {
    type_dashboard: null,
    id: null,
  };
  const [dataTrackingState, setDataTrakingState] = useState(
    dataTrackingInitialState
  );

  const [visibleColumns, setVisibleColumns] = useState(["ACV", "ATR"]);

  useEffect(() => {
    const tracking =
      dataTracking.length > 0 ? dataTracking : [dataTrackingInitialState];
    const typeDashboard = tracking[0];
    console.log("typeDashboard", typeDashboard);

    setDataTrakingState(typeDashboard);
  }, [dataTracking]);

  useEffect(() => {
    if (
      dataTrackingState.id !== undefined &&
      dataTrackingState.id !== null &&
      dataTracking.length > 0
    ) {
      dispatch(
        obtainApiDashboardFunnel(dataTrackingState.id as any, dataTracking, 0)
      );
    }
  }, [dataTrackingState]);

  useEffect(() => {
    if (dataFunnel.length > 0 && dataTracking.length > 0) {
      const getDataColumns = dataFunnel.map((funnel: any) => {
        return TypeDashboardDataTableColumns(funnel, dataTrackingState.type_dashboard, time_Zone);
      });
      // const columnsToShow = getDataColumns[0].filter((column: any) =>
      // condición para mostrar y ocultar comunas
      // const columnsToShow = (getDataColumns[0] as any).filter((column: any) =>
      //   visibleColumns.includes(column.field)
      // );
      // console.log("columnsToShow", columnsToShow);
      console.log("getDataColumns", getDataColumns);
      setColumnsToSet(getDataColumns[0]);
      setDataFunnelToggle(getDataColumns[0]);
    }
  }, [dataFunnel, dataTracking]);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  console.log("columnsFunnelHideShow", columnsFunnelHideShow);

  const handleDateDashboardMain = () => {
    const formate1 = moment(currentCalendar[0].startDate).format("YYYY-MM-DD");
    const formate2 = moment(currentCalendar[0].endDate).format("YYYY-MM-DD");
    const dateFormat = {
      fecha_inicial: formate1,
      fecha_final: formate2,
    };
    const fechaInicio = new Date(dateFormat.fecha_inicial).getTime();
    const fechaFin = new Date(dateFormat.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setFunnelDays(diff / (1000 * 60 * 60 * 24) + 1);
    setTitleDatePickerFunnel(
      `${dateFormat.fecha_inicial} - ${dateFormat.fecha_final}`
    );

    //acá fecha
    if (
      dateFormat.fecha_inicial !== "Invalid date" &&
      dateFormat.fecha_final !== "Invalid date"
    ) {
      setFlagModal(1);
      return dispatch(
        obtainApiDashboardFunnel(
          dataTrackingState.id as any,
          dataTracking,
          0,
          dateFormat
        )
      );
    }
  };

  const handleToday = () => {
    const item = todayDay();
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(1);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleYesterday = () => {
    const item = yesterDay();
    setFunnelDays(1);
    setFlagModal(1);
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleSevenDay = () => {
    const item = handleDays(6);
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(7);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleCurrentWeek = () => {
    const item = currentWeek();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleLastWeek = () => {
    const item = lastWeek();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleThirtyDays = () => {
    const item = handleDays(30);
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(30);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleCurrentMonth = () => {
    const item = currentMonth();
    const fechaInicio = new Date(item.fecha_inicial).getTime();
    const fechaFin = new Date(item.fecha_final).getTime();
    const diff = fechaFin - fechaInicio;
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(diff / (1000 * 60 * 60 * 24) + 1);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleFourteenDays = () => {
    const item = handleDays(14);
    setTitleDatePickerFunnel(`${item.fecha_inicial} - ${item.fecha_final}`);
    setFunnelDays(14);
    setFlagModal(1);
    dispatch(
      obtainApiDashboardFunnel(
        dataTrackingState.id as any,
        dataTracking,
        0,
        item
      )
    );
  };

  const handleColumnToggle = (column: any) => {
    const isChecked = columnsToSet.find(
      (selectedColumn: any) => selectedColumn.field === column.field
    );
    let newColumns = columnsToSet;
    if (isChecked) {
      newColumns = columnsToSet.filter(
        (selectedColumn: any) => selectedColumn.field !== column.field
      );
    } else {
      newColumns = [...columnsToSet, column];
    }
    setColumnsToSet(newColumns);
  };

  console.log("dataFunnelToggle", dataFunnelToggle);
  console.log("dataTrackingState", dataTrackingState);

  return (
    <div className="mt-3">
      <Title fontSize="14px" color="#192a3e">{`Funnels (${funnelDays})`}</Title>
      {dataTracking.map((tracking: any, index: number) => (
        <div key={index} style={{ borderBottom: "1px solid #80808026" }}>
          <ContainerFiltersFunnel>
            <DateFilter
              titleDatePickerPNL={titleDatePickerFunnel}
              handleDateDashboardMain={handleDateDashboardMain}
              flagModal={flagModal}
              setFlagModal={setFlagModal}
              currentCalendar={currentCalendar}
              setCurrentCalendar={setCurrentCalendar}
              handleYesterday={handleYesterday}
              handleToday={handleToday}
              handleSevenDay={handleSevenDay}
              handleCurrentWeek={handleCurrentWeek}
              handleLastWeek={handleLastWeek}
              handleThirtyDays={handleThirtyDays}
              handleCurrentMonth={handleCurrentMonth}
              handleFourteenDays={handleFourteenDays}
              // handleThreeMonth={handleThreeMonth}
            />
            <div className="dropdown">
              <button
                className="btn dropdown-toggle dropdown-toggle-icon d-flex justify-content-center"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={Vector} alt="" className="" />
              </button>
              <div
                className="dropdown-menu dropdown-style top-menu-dropdown"
                aria-labelledby="dropdownMenuButton"
              >
                {/* {dataFunnelToggle.map((column: any) => (
                  <div key={column.field}>
                    <input
                      type="checkbox"
                      checked={
                        !!columnsToSet.find((selectedColumn: any) => {
                          return column
                            ? selectedColumn.field === column.field
                            : false;
                        })
                      }
                      onChange={() => handleColumnToggle(column)}
                    />
                    <label>{column.field}</label>
                  </div>
                ))} */}
              </div>
            </div>
          </ContainerFiltersFunnel>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            className="width-vw padding-table"
          >
            <AccordionSummary
              aria-controls={`panel${index}d-content`}
              id={`panel${index}d-header`}
              className="d-flex"
              // onClick={() =>
              //   dispatch(obtainApiDashboardFunnel(tracking.id, tracking, index))
              // }
            >
              <Typography>
                <span className="title-accordeon-funnel">
                  {tracking.funnel_name}
                </span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="table-responsive ocultarMostrar">
                  {/* <ReactTooltip /> */}
                  {/* {loadingMetricasFunnel ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "230px" }}
                    >
                      <BeatLoader color="#3997FF" />
                    </div>
                  ) : ( */}
                  <GeneralTable
                    data={dataFunnel}
                    columns={columnsToSet}
                    pageSizeOptions={[7, 15, 31, 31]}
                    maxBodyHeight={"60vh"}
                    pageSize={7}
                  />
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion expanded={expanded === 1} onChange={handleChange(1)}>
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>Collapsible Group Item #1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 2} onChange={handleChange(2)}>
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography>Collapsible Group Item #2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 3} onChange={handleChange(3)}>
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography>Collapsible Group Item #3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion> */}
        </div>
      ))}
    </div>
  );
};

export default AccordionFunnel;
