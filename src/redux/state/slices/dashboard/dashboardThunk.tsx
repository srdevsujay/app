import {
  setPNL,
  starLoading,
  setDataTracking,
  setDataFunnel,
} from "./dashboardSlice";
import moment from "moment";
import { DateFormat } from "@/models/dateFormat.model";
import { getCurrentUser } from "../../../../utilities/localstorage.utility";
import {
  getDataPnl,
  getDataFunnel,
  getDashboardFunnel,
} from "../../../../pages/Dashboard/services/pnlApi";
import _ from "lodash";
import { setDate } from "date-fns";
import { AppThunk } from "@/redux/store";
import { Pnl } from "../../../../pages/Dashboard/models/dashboard.model";

export const getMetricFunnel = (date?: DateFormat): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      console.log("datedate", date);
      const dateFormat = getDate(date);
      const resultAction = await getDataPnl(!date ? dateFormat : date);
      console.log("resultActionStatus", resultAction);
      const currentDataPNL: any = _.orderBy(
        resultAction.data.data,
        "id",
        "asc"
      );
      if (resultAction.status === 200) {
        dispatch(setPNL(currentDataPNL));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

const getDate = (date?: DateFormat) => {
  const dayInitial = new Date();
  const xDayInitial = 6;
  dayInitial.setDate(dayInitial.getDate() - xDayInitial);
  const dayFinal = new Date();
  const xDayFinal = 0;
  dayFinal.setDate(dayFinal.getDate() - xDayFinal);
  let firstDay = moment(dayInitial).format("YYYY-MM-DD");
  let lastDay = moment(dayFinal).format("YYYY-MM-DD");
  const dateFormat: DateFormat = {
    fecha_inicial: firstDay,
    fecha_final: lastDay,
  };
  return dateFormat;
};

export const getTrackingFunnel = (idUser: number): AppThunk => {
  return async (dispatch) => {
    try {
      const resultAction = await getDataFunnel(idUser);
      console.log("resultAction", resultAction.data);
      const currentDataTracking: any = _.orderBy(
        resultAction.data,
        "id",
        "asc"
      );
      dispatch(setDataTracking(currentDataTracking));
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainApiDashboardFunnel = (
  id: number,
  typeDashboard: any,
  i: number,
  date?: DateFormat
): AppThunk => {
  return async (dispatch, getState) => {
    try {
      // return async (dispatch, getState) => {
      //   const { dataPNL, dataTracking } = getState().dashboard;
      //   dispatch(
      //     setDataFunnel({
      //       dataFunnel: currentDataFunnel,
      //       dataPNL: dataPNL,
      //       dataTracking: dataTracking,
      //     } as any)
      //   );
      console.log("id", id);
      console.log("typeDashboard--", typeDashboard);
      console.log("i", i);
      let type_dashboard = typeDashboard[i]?.type_dashboard;
      let dateFormat = getDate(date);
      let objFacebook = {
        fecha_inicial: date ? date?.fecha_inicial : dateFormat.fecha_inicial,
        fecha_final: date ? date?.fecha_final : dateFormat.fecha_final,
        funnel_id: id,
        type_dashboard,
      };
      const resultAction = await getDashboardFunnel(objFacebook);
      const currentDataFunnel: any = _.orderBy(
        resultAction.data.data,
        "id",
        "asc"
      );
      console.log("dataFunnel-", currentDataFunnel);
      dispatch(setDataFunnel(currentDataFunnel));
    } catch (error) {
      console.log(error);
    }
  };
};
