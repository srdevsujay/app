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
import { TypeDashboardDataTableColumns } from "../TypeDasboardFunnelData";
import { AppStore } from "../../../../redux/store";
import { CampaignData } from "../../../Dashboard/models/dashboard.model";
import InputComponent from "../../../../components/input/Input.component";
import { useDebounce } from "../../../../hooks/useDebounce";
import "../../../../styled-components/style.css";
import { ContainerFilter } from "../../../../styled-components/input/index";
import FunnelTable from "../tableFunnel/index";
import { createFilterFunnel } from "../../../../redux/state/slices/dashboard/dashboardThunk";
import { SalesCall } from "../../../../utilities/pruebajs";

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

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const AccordionFunnel = () => {
  const dispatch = useAppDispatch();
  const dataTracking: [] = useAppSelector(
    (state) => state.dashboard.dataTracking
  );
  console.log("dataTracking", dataTracking);
  const { data: dataFunnel, filters: objFilter }: any = useAppSelector(
    (state) => state.dashboard.dataFunnel
  );
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
  const [columnDataFunnelToggle, setColumnDataFunnelToggle] = useState<any>([]);
  const [columnsToSet, setColumnsToSet] = useState<any>([]);
  const [columnsFunnelHideShow, setColumnsFunnelHideShow] = useState<any>([]);
  const dataTrackingInitialState = {
    type_dashboard: null,
    id: null,
  };
  const [dataTrackingState, setDataTrakingState] = useState(
    dataTrackingInitialState
  );

  const [searchString, setSearchString] = useState("");
  const [originalData, setOriginalData] = useState<any>();
  const [filteredData, setFilteredData] = useState<any[]>();
  const searchStringDebounced = useDebounce(searchString, 100);
  console.log("columnsToSet", columnsToSet);

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
      // const currentColumnsJSON = JSON.stringify(SalesCall);
      // console.log("currentColumnsJSON", currentColumnsJSON);
      // const obj = {
      //   filter_json: currentColumnsJSON,
      //   id: 2,
      // };
      // dispatch(
      //   createFilterFunnel(obj, dataTrackingState.id as any, dataTracking, 0)
      // );
    }
  }, [dataTrackingState]);

  useEffect(() => {
    if (objFilter) {
      const filter = JSON.parse(objFilter);
      console.log("filters2", filter);
      const getDataColumns = filter.map((funnel: any) => {
        console.log("funnelfunnel", funnel);
        return TypeDashboardDataTableColumns(
          funnel,
          dataTrackingState.type_dashboard,
          time_Zone
        );
      });
      console.log("getDataColumns", getDataColumns[0]);
      let getDataColumns2: any = [];
      if (getDataColumns[0]) {
        for (let i = 0; i < getDataColumns.length; i++) {
          getDataColumns2.push(getDataColumns[i][i]);
        }
      }
      console.log("getDataColumns2", getDataColumns2);
      const activeColumns = getDataColumns2?.filter(
        (column: any) => column.checkbox
      );
      console.log("filters3", filter);
      console.log("activeColumns", activeColumns);
      setColumnsToSet(activeColumns);
      setDataFunnelToggle(getDataColumns2);
      setOriginalData(getDataColumns2);
    }
  }, [objFilter, dataTrackingState]);

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

  const handleColumnToggle = (e: any, column: any) => {
    console.log("e", e);
    console.log("column--", column);
    const updatedColumns = originalData.map((originalColumn: any) => {
      if (originalColumn.field === column.field) {
        return {
          ...originalColumn,
          checkbox: !originalColumn.checkbox,
        };
      }
      return originalColumn;
    });
    console.log("updatedColumns", updatedColumns);
    const currentFunnel: any = updatedColumns.map((funnel: any) => ({
      field: funnel.field,
      name: funnel.name,
      checkbox: funnel.checkbox,
    }));
    console.log("currentFunnel", currentFunnel);
    const currentColumnsJSON = JSON.stringify(currentFunnel);
    console.log("currentColumnsJSON", currentColumnsJSON);
    const obj = {
      filter_json: currentColumnsJSON,
      id: 2,
    };
    dispatch(createFilterFunnel(obj, dataTrackingState.id, dataTracking, 0));
    const activeColumns = updatedColumns.filter(
      (column: any) => column.checkbox
    );
    setColumnsToSet(activeColumns);
    setDataFunnelToggle(updatedColumns);
    setOriginalData(updatedColumns);
  };

  useEffect(() => {
    if (searchStringDebounced.trim()) {
      const currentData = originalData.filter((item: any) =>
        item.name.toLowerCase().includes(searchStringDebounced.toLowerCase())
      );
      setDataFunnelToggle(currentData);
    } else {
      setDataFunnelToggle(originalData);
    }
  }, [searchStringDebounced]);

  // useEffect(() => {
  //   if (columnsToSet?.length > 0) {
  //     const currentFunnel: any = columnsToSet.map((funnel: any) => ({
  //       field: funnel.field,
  //       name: funnel.name,
  //       checkbox: funnel.checkbox,
  //     }));
  //     console.log("currentFunnel", currentFunnel);
  //     setFilteredData(currentFunnel);
  //   }
  // }, [columnsToSet]);
  // console.log("filteredData", filteredData);

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
                <ContainerFilter>
                  <InputComponent
                    // max={5}
                    placeholder="Buscar..."
                    label=""
                    type="text"
                    onChange={(e: any) => setSearchString(e)}
                  />
                </ContainerFilter>
                <div className="filter-scroll">
                  {dataFunnelToggle?.map((column: any) => (
                    <div key={column.name} className="column-container">
                      <Checkbox
                        {...label}
                        checked={column.checkbox}
                        onChange={(e) => handleColumnToggle(e, column)}
                      />
                      <label>{column.name}</label>
                    </div>
                  ))}
                </div>
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
                  <FunnelTable
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
