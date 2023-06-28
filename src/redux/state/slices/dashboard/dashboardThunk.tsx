import {
  setPNL,
  starLoading,
  setDataTracking,
  setDataFunnel,
  setTokenFacebook,
  setTokenGoogle,
  setToggleSlider,
} from "./dashboardSlice";
import moment from "moment";
import { DateFormat } from "@/models/dateFormat.model";
import {
  getCurrentUser,
  signOut,
} from "../../../../utilities/localstorage.utility";
import {
  getDataPnl,
  getDataFunnel,
  getDashboardFunnel,
  createFilterFunnelService,
} from "../../../../pages/Dashboard/services/pnlApi";
import _ from "lodash";
import { setDate } from "date-fns";
import { AppThunk } from "@/redux/store";
import { Pnl } from "../../../../pages/Dashboard/models/dashboard.model";
import {
  createFunnelService,
  editFunnelService,
} from "../../../../pages/Dashboard/services/pnlApi";
import Swal from "sweetalert2";
import { deleteFunnelService } from "../../../../pages/Dashboard/services/pnlApi";
import { logoutUser } from "../login/authSlice";

export const getMetricFunnel = (date?: DateFormat): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const dateFormat = getDate(date);
      const resultAction = await getDataPnl(!date ? dateFormat : date);
      console.log("resultActionDashboard", resultAction);
      if (
        resultAction.data.message === "Token is invalid!" ||
        resultAction.data.error === "Signature has expired"
      ) {
        console.log("Se logea");
        signOut();
        dispatch(logoutUser());
      }
      const currentDataPNL: any = _.orderBy(
        resultAction.data.data,
        "id",
        "asc"
      );
      if (resultAction.status === 200) {
        dispatch(setPNL(currentDataPNL));
        dispatch(setTokenFacebook(resultAction.data.tokenfacebook));
        dispatch(setTokenGoogle(resultAction.data.tokengoogle));
      }
    } catch (error: any) {
      if (error.code === "ERR_BAD_RESPONSE") {
        Swal.fire(
          "",
          "En este momento no puede mostrarte este filtro con tantos días, vuelve a intentarlo con menos días",
          "info"
        );
      }
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
      let type_dashboard = typeDashboard[i]?.type_dashboard;
      let dateFormat = getDate(date);
      let objFacebook = {
        fecha_inicial: date ? date?.fecha_inicial : dateFormat.fecha_inicial,
        fecha_final: date ? date?.fecha_final : dateFormat.fecha_final,
        funnel_id: id,
        type_dashboard,
      };
      const resultAction: any = await getDashboardFunnel(objFacebook);
      // const currentDataFunnel: any = _.orderBy(
      //   resultAction.data,
      //   "id",
      //   "asc"
      // );
      if (
        resultAction.data.message === "Token is invalid!" ||
        resultAction.data.error === "Signature has expired"
      ) {
        console.log("Se logea Funnel");
        signOut();
        dispatch(logoutUser());
      }
      dispatch(setDataFunnel(resultAction.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createFilterFunnel = (
  data: any,
  id: number,
  typeDashboard: any,
  i: number
): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      console.log("dataFilter", data);

      const result: any = await createFilterFunnelService(data);
      if (
        result.data.message === "Update filter dashboard user successfully!"
      ) {
        dispatch(obtainApiDashboardFunnel(id, typeDashboard, i));
        // Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createFunnel = (data: any, id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result: any = await createFunnelService(data);
      if (result.data.message === "Create funnel successfully!") {
        dispatch(getTrackingFunnel(id));
        Swal.fire("Correcto", "Funnel Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editFunnel = (data: any, id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result: any = await editFunnelService(data);
      console.log("resultEdit", result);
      if (result.data.message === "Update funnel successfully!") {
        dispatch(getTrackingFunnel(id));
        Swal.fire("Correcto", "Funnel actualizado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFunnel = (data: any, id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción va a eliminar toda la información de tracking relacionada con este funnel. Tenga en cuenta que esta acción es permanente y no se podrá deshacer.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#109cf1",
        cancelButtonColor: "#E71D36",
        confirmButtonText: "Sí, ¡Borrar!",
      });

      if (result.isConfirmed) {
        try {
          const deleteResult: any = await deleteFunnelService(data);
          console.log("resultEdit", deleteResult);
          if (deleteResult.data.message === "Delete funnel successfully!") {
            // dispatch(downloadTypeform(false));
            dispatch(getTrackingFunnel(id));
            Swal.fire(
              "¡Eliminado!",
              "El Funnel se ha eliminado correctamente.",
              "success"
            );
          }
        } catch (error) {
          console.log("error", error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const toggleSlider = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      console.log("dataToggle", data);

      dispatch(setToggleSlider(data));
    } catch (error) {
      console.log(error);
    }
  };
};
