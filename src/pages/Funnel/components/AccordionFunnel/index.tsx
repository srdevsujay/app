import React, { useState, useEffect, useContext } from "react";
import { ContainerFiltersFunnel } from "../../../Dashboard/styled-components/dashboardStyled";
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
import column_triple from "../../../../assets/images/column_triple.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { TypeDashboardDataTableColumns } from "../TypeDasboardFunnelData";
import { AppStore } from "../../../../redux/store";
import { CampaignData } from "../../../Dashboard/models/dashboard.model";
import InputComponent from "../../../../components/input/Input.component";
import { useDebounce } from "../../../../hooks/useDebounce";
import "../../../../styled-components/style.css";
import {
  ContainerFilter,
  DropdownMenu,
} from "../../../../styled-components/input/index";
import FunnelTable from "../tableFunnel/index";
import {
  createFilterFunnel,
  deleteFunnel,
  obtainApiFunnel,
} from "../../../../redux/state/slices/dashboard/dashboardThunk";
import { SalesCall } from "../../../../utilities/pruebajs";
import {
  ButtonEditWithIcon,
  ButtonDeleteWithIcon,
} from "../../../../styled-components/button/index";
import deleted from "../../../../assets/images/Delete.svg";
import edit from "../../../../assets/images/Edit.svg";
import "../../styled-components/style.css";
import {
  ContainerAccordion,
  ButtonFilter,
} from "../../styled-components/funnel-styled";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import { ContainerDropdown } from "../../../../styled-components/button/index";
import { BeatLoader } from "react-spinners";
import HelpVideo from "../../../../components/HelpVideo/HelpVideo";
import ExportExcel from "../../../../components/ExportExcel/ExportExcel";
import video from "../../../../assets/images/video.svg";
import videoDark from "../../../../assets/images/videoDark.svg";

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

const AccordionFunnel = ({
  obtainFunnelEdit,
  setCurrentSteps,
  showLodash,
  setShowLodash,
}: any) => {
  const dispatch = useAppDispatch();
  const dataTracking: any[] = useAppSelector(
    (state) => state.dashboard.dataTracking
  );
  console.log("dataTracking", dataTracking);
  const { id: user_funel } = useAppSelector((state) => state.user.user);
  const { isLoading } = useAppSelector((state) => state.dashboard);
  // .map((data: any) => ({
  //   ...data,
  //   campaigns: data?.campaigns?.map((campaign: any) => ({
  //     id: campaign.id,
  //     trafficSource: campaign.campaing_plataform,
  //     connectionType: campaign.campaing_type,
  //     adAccountName: campaign.campaing_name,
  //     adAccountIdentification: campaign.campaing_identify,
  //   })),
  // }));

  // const { filters: objFilter, data: dataFunnel }: any = useAppSelector(
  //   (state) => state.dashboard.dataFunnel
  // );

  const { dataFilter: objFilter, dataFunnel }: any = useAppSelector(
    (state) => state.dashboard
  );

  // console.log("dataFunnel--", Array.isArray(dataF.data));
  console.log("dataFunnel.", dataFunnel);

  const time_Zone = useAppSelector((state) => state.user.user.time_zone);
  const [funnelDays, setFunnelDays] = useState<number>(7);
  const [expanded, setExpanded] = useState(0);
  const [flagModal, setFlagModal] = useState<number>(0);
  const [currentCalendar, setCurrentCalendar] = useState([
    {
      startDate: addDays(new Date(), -6),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [titleDatePickerFunnel, setTitleDatePickerFunnel] = useState(
    `${moment(currentCalendar[0].startDate).format("YYYY-MM-DD")} - ${moment(
      currentCalendar[0].endDate
    ).format("YYYY-MM-DD")}`
  );

  const [dataFunnelToggle, setDataFunnelToggle] = useState<any>([]);
  const [columnDataFunnelToggle, setColumnDataFunnelToggle] = useState<any>([]);
  const [columnsToSet, setColumnsToSet] = useState<any>([]);
  console.log("columnsToSet--", columnsToSet);
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

  useEffect(() => {
    const tracking =
      dataTracking.length > 0 ? dataTracking : [dataTrackingInitialState];
    const typeDashboard = tracking[0];

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
    console.log("objFilter", objFilter);
    if (objFilter) {
      const filter = JSON.parse(objFilter);
      console.log("filterJSON", filter);

      const getDataColumns = filter.map((funnel: any) => {
        return TypeDashboardDataTableColumns(
          funnel,
          dataTrackingState.type_dashboard,
          time_Zone
        );
      });
      let getDataColumns2: any = [];
      if (getDataColumns[0]) {
        for (let i = 0; i < getDataColumns.length; i++) {
          getDataColumns2.push(getDataColumns[i][i]);
        }
      }
      console.log("getDataColumns2", getDataColumns2);
      // if(getDataColumns2 !== undefined) {

      // }
      const activeColumns = getDataColumns2?.filter((column: any) => {
        // console.log("column...", column);
        if (column !== undefined) {
          return column.checkbox;
        }
      });
      console.log("activeColumns--", activeColumns);
      setColumnsToSet(activeColumns);
      setShowLodash(activeColumns);
      setDataFunnelToggle(getDataColumns2);
      setOriginalData(getDataColumns2);
    }
  }, [objFilter, dataTrackingState]);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

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
    const item = handleDays(13);
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
    const updatedColumns = originalData.map((originalColumn: any) => {
      console.log("originalColumncolumn", column);
      console.log("originalColumn", originalColumn);
      if (originalColumn?.field === column?.field) {
        return {
          ...originalColumn,
          checkbox: !originalColumn.checkbox,
        };
      }
      return originalColumn;
    });
    const currentFunnel: any = updatedColumns?.map((funnel: any) => ({
      field: funnel?.field,
      name: funnel?.name,
      checkbox: funnel?.checkbox,
    }));
    const currentColumnsJSON = JSON.stringify(currentFunnel);
    const obj = {
      filter_json: currentColumnsJSON,
      id: dataTracking[0].type_dashboard,
    };
    dispatch(
      createFilterFunnel(obj, dataTrackingState.id as any, dataTracking, 0)
    );
    const activeColumns = updatedColumns?.filter(
      (column: any) => column?.checkbox
    );
    console.log("activeColumns--2", activeColumns);
    setColumnsToSet(activeColumns);
    setShowLodash(activeColumns);
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
  //     setFilteredData(currentFunnel);
  //   }
  // }, [columnsToSet]);

  const editFunnel = (index: number) => {
    console.log("indice+++", index);
    console.log("dataTracking", dataTracking[index]);
    setCurrentSteps([]);
    obtainFunnelEdit(dataTracking[index]);
  };

  const onDeleteFunnel = (i: any) => {
    console.log("borrarFunnel", dataTracking[i].id);
    const objId = {
      id: dataTracking[i].id,
    };
    dispatch(deleteFunnel(objId, user_funel));
  };

  const pruebaDataColumnsToSet = [
    {
      checkbox: true,
      field: "date_start",
      name: "FECHA",
      title: "FECHA",
      value: "FECHA",
    },
    {
      checkbox: true,
      field: "name",
      name: "Nombre",
      title: "name",
      value: "name",
    },
  ];

  const dataDataFunnel = [
    // {
    //   date_start: "2023-06-01",
    //   // name: "Zarcano",
    // },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 18,
      B: 18,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 52.29333333333333,
      CPB: 52.29333333333333,
      CPL: 36.20307692307692,
      CR: 0.0466786355475763,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.0466786355475763,
      LTA: 0.5769230769230769,
      LTAp: 0.6923076923076923,
      LTB: 0.6923076923076923,
      LV: 557,
      PPB: -52.29333333333333,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 2655,
      clicks_organic: 15,
      cohort: 0,
      cpc: 0.354531,
      cpm: 1.748934,
      ctr: 0.493309,
      date_start: "2023-06-01",
      date_stop: 0,
      dws: 0,
      frequency: 1.102417,
      full_view_impressions: 0,
      impressions: 538202,
      inline_link_click_ctr: 0.124303,
      inline_link_clicks: 669,
      inline_post_engagement: 6386,
      leeds: 26,
      ltbd: 54.916666666666664,
      profit: -941.28,
      reach: 488202,
      revenue: 0,
      sales: 0,
      spend: 941.28,
      sutds: 0,
      us: 0,
      views: 557,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 12,
      B: 12,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 84.23083333333334,
      CPB: 84.23083333333334,
      CPL: 40.4308,
      CR: 0.04930966469428008,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.04930966469428008,
      LTA: 0.48,
      LTAp: 0.48,
      LTB: 0.48,
      LV: 507,
      PPB: -84.23083333333334,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 3151,
      clicks_organic: 12,
      cohort: 0,
      cpc: 0.320778,
      cpm: 1.55833,
      ctr: 0.485798,
      date_start: "2023-06-02",
      date_stop: 0,
      dws: 0,
      frequency: 1.098017,
      full_view_impressions: 0,
      impressions: 648624,
      inline_link_click_ctr: 0.138293,
      inline_link_clicks: 897,
      inline_post_engagement: 9734,
      leeds: 25,
      ltbd: 6.818181818181818,
      profit: -1010.77,
      reach: 590723,
      revenue: 0,
      sales: 0,
      spend: 1010.77,
      sutds: 0,
      us: 0,
      views: 507,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 19,
      B: 19,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 63.72,
      CPB: 63.72,
      CPL: 46.56461538461539,
      CR: 0.04805914972273567,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.04805914972273567,
      LTA: 0.6538461538461539,
      LTAp: 0.7307692307692307,
      LTB: 0.7307692307692307,
      LV: 541,
      PPB: -63.72,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 4752,
      clicks_organic: 17,
      cohort: 0,
      cpc: 0.254773,
      cpm: 1.135296,
      ctr: 0.445611,
      date_start: "2023-06-03",
      date_stop: 0,
      dws: 0,
      frequency: 1.183751,
      full_view_impressions: 0,
      impressions: 1066400,
      inline_link_click_ctr: 0.104932,
      inline_link_clicks: 1119,
      inline_post_engagement: 14161,
      leeds: 26,
      ltbd: 15.76923076923077,
      profit: -1210.68,
      reach: 900865,
      revenue: 0,
      sales: 0,
      spend: 1210.68,
      sutds: 0,
      us: 0,
      views: 541,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 7,
      B: 7,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 174.00142857142856,
      CPB: 174.00142857142856,
      CPL: 67.66722222222222,
      CR: 0.04035874439461883,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.04035874439461883,
      LTA: 0.3888888888888889,
      LTAp: 0.3888888888888889,
      LTB: 0.3888888888888889,
      LV: 446,
      PPB: -174.00142857142856,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 4935,
      clicks_organic: 7,
      cohort: 0,
      cpc: 0.246811,
      cpm: 1.065055,
      ctr: 0.431527,
      date_start: "2023-06-04",
      date_stop: 0,
      dws: 0,
      frequency: 1.158512,
      full_view_impressions: 0,
      impressions: 1143612,
      inline_link_click_ctr: 0.111664,
      inline_link_clicks: 1277,
      inline_post_engagement: 14813,
      leeds: 18,
      ltbd: 19.75,
      profit: -1218.01,
      reach: 987139,
      revenue: 0,
      sales: 0,
      spend: 1218.01,
      sutds: 0,
      us: 0,
      views: 446,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 14,
      B: 14,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 98.01571428571428,
      CPB: 98.01571428571428,
      CPL: 54.8888,
      CR: 0.04280821917808219,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.04280821917808219,
      LTA: 0.48,
      LTAp: 0.56,
      LTB: 0.56,
      LV: 584,
      PPB: -98.01571428571428,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 4988,
      clicks_organic: 12,
      cohort: 0,
      cpc: 0.275104,
      cpm: 1.195,
      ctr: 0.434381,
      date_start: "2023-06-05",
      date_stop: 0,
      dws: 0,
      frequency: 1.12306,
      full_view_impressions: 0,
      impressions: 1148301,
      inline_link_click_ctr: 0.114691,
      inline_link_clicks: 1317,
      inline_post_engagement: 14531,
      leeds: 25,
      ltbd: 24.22222222222222,
      profit: -1372.22,
      reach: 1022475,
      revenue: 0,
      sales: 0,
      spend: 1372.22,
      sutds: 0,
      us: 0,
      views: 584,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 16,
      B: 16,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 127.1,
      CPB: 127.1,
      CPL: 49.599999999999994,
      CR: 0.04734411085450346,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.04734411085450346,
      LTA: 0.2926829268292683,
      LTAp: 0.3902439024390244,
      LTB: 0.3902439024390244,
      LV: 866,
      PPB: -127.1,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 6143,
      clicks_organic: 12,
      cohort: 0,
      cpc: 0.331043,
      cpm: 1.758237,
      ctr: 0.53112,
      date_start: "2023-06-06",
      date_stop: 0,
      dws: 0,
      frequency: 1.186462,
      full_view_impressions: 0,
      impressions: 1156613,
      inline_link_click_ctr: 0.188914,
      inline_link_clicks: 2185,
      inline_post_engagement: 15496,
      leeds: 41,
      ltbd: 36.166666666666664,
      profit: -2033.6,
      reach: 974842,
      revenue: 0,
      sales: 0,
      spend: 2033.6,
      sutds: 0,
      us: 0,
      views: 866,
    },
    {
      ACV: 0,
      AR: 0,
      AT: 0,
      ATR: 0,
      Apr: 0,
      Aps: 10,
      B: 10,
      BR: 0,
      BTS: 0,
      CKOR: 0,
      CPAT: 0,
      CPAp: 52.051,
      CPB: 52.051,
      CPL: 10.843958333333333,
      CR: 0.0679886685552408,
      CTA: 0,
      DWCR: 0,
      EPA: 0,
      EPB: 0,
      EPC: 0,
      EPL: 0,
      EPV: 0,
      FCR: 0,
      LCR: 0.0679886685552408,
      LTA: 0.1875,
      LTAp: 0.20833333333333334,
      LTB: 0.20833333333333334,
      LV: 706,
      PPB: -52.051,
      SCR: 0,
      UCR: 0,
      account_currency: 0,
      btsd: 0,
      cash: 0,
      clicks: 1440,
      clicks_organic: 9,
      cohort: 0,
      cpc: 0.361465,
      cpm: 2.208471,
      ctr: 0.610977,
      date_start: "2023-06-07",
      date_stop: 0,
      dws: 0,
      frequency: 1.06161,
      full_view_impressions: 0,
      impressions: 235688,
      inline_link_click_ctr: 0.267727,
      inline_link_clicks: 631,
      inline_post_engagement: 3509,
      leeds: 48,
      ltbd: 61.4,
      profit: -520.51,
      reach: 222010,
      revenue: 0,
      sales: 0,
      spend: 520.51,
      sutds: 0,
      us: 0,
      views: 706,
    },
  ];

  console.log("dataDataFunnel", dataDataFunnel);
  console.log("dataDataFunneldataFunnel", dataFunnel);
  const { theme, themeButtonDropdown, themeFilterFunnel } =
    useContext(ThemeContext);

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return (
    <div className="mt-3">
      {dataTracking.map((tracking: any, index: number) => (
        <ContainerAccordion key={index} theme={theme}>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            className="width-vw padding-table"
          >
            <div className="d-flex justify-content-between">
              <AccordionSummary
                aria-controls={`panel${index}d-content`}
                id={`panel${index}d-header`}
                className="d-flex"
                onClick={() => dispatch(obtainApiFunnel(tracking.id, tracking))}
              >
                <Typography>
                  <span className="title-accordeon-funnel">
                    {tracking.funnel_name} ({funnelDays})
                  </span>
                </Typography>
              </AccordionSummary>
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
                <HelpVideo
                  title={"Video Tutorial Funnel"}
                  image={!themeState ? video : videoDark}
                  url={
                    "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"
                  }
                />
                <ExportExcel dataFile={dataFunnel} titleFile={"tabla Funnel"} />
                <div className="dropdown ml-2">
                  <ButtonFilter
                    className="btn dropdown-toggle dropdown-toggle-icon d-flex justify-content-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={(e: any) => {
                      e.stopImmediatePropagation();
                    }}
                    theme={theme}
                  >
                    <img
                      src={column_triple}
                      alt=""
                      className=""
                      height="20px"
                    />
                  </ButtonFilter>
                  <DropdownMenu
                    className="dropdown-menu dropdown-style top-menu-dropdown mr-2"
                    aria-labelledby="dropdownMenuButton"
                    theme={themeFilterFunnel}
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
                    <ContainerDropdown
                      className="filter-scroll"
                      theme={themeFilterFunnel}
                    >
                      {dataFunnelToggle?.map((column: any) => {
                        if (column === undefined) {
                          return null;
                        } else {
                          return (
                            <div
                              key={column?.name}
                              className="column-container"
                            >
                              <Checkbox
                                {...label}
                                checked={column?.checkbox}
                                onChange={(e) => handleColumnToggle(e, column)}
                              />
                              <label>{column?.name}</label>
                            </div>
                          );
                        }
                      })}
                    </ContainerDropdown>
                  </DropdownMenu>
                </div>
                <div className="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    className="btn mr-2 dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {/* <img src={ellipsisOff} alt="" className="" /> */}
                  </button>
                  <ContainerDropdown
                    className="dropdown-menu dropdown-style top-menu-dropdown"
                    aria-labelledby="btnGroupDrop1"
                    style={{ padding: "10px" }}
                    onClick={(e: any) => {
                      e.stopImmediatePropagation();
                    }}
                    theme={themeButtonDropdown}
                  >
                    <ButtonEditWithIcon
                      className="dropdown-item dropdown-style-button"
                      onClick={() => editFunnel(index)}
                    >
                      <img src={edit} height="12" className="" />
                      Editar
                    </ButtonEditWithIcon>
                    <ButtonDeleteWithIcon
                      className="dropdown-item dropdown-style-button"
                      onClick={() => onDeleteFunnel(index)}
                    >
                      <img src={deleted} height="12" className="" />
                      Eliminar
                    </ButtonDeleteWithIcon>
                    {/* <button class="dropdown-item" href="#">Dropdown link</button> */}
                  </ContainerDropdown>
                </div>
              </ContainerFiltersFunnel>
            </div>
            <AccordionDetails>
              <Typography>
                <div className="table-responsive ocultarMostrar table-funnel">
                  {/* hay que añadirle el || dataFunnel bien en forma */}
                  {showLodash.length === 0 || isLoading === true ? (
                    <div
                      className="d-flex justify-content-center align-items-center"
                      style={{ height: "250px", zIndex: "99999999" }}
                    >
                      <BeatLoader color="#3997FF" />
                    </div>
                  ) : (
                    <FunnelTable
                      data={dataFunnel}
                      columns={columnsToSet}
                      pageSizeOptions={[7, 15, 31]}
                      maxBodyHeight={"60vh"}
                      pageSize={7}
                    />
                  )}
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ContainerAccordion>
      ))}
    </div>
  );
};

export default AccordionFunnel;
