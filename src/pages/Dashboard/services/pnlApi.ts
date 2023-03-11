import { DateFormat } from "@/models/dateFormat.model";
import { clientAxios } from "../../../services/axios";
import baseUrl from "../../../services/auth.service";
import { getCurrentUser, getJwt } from '../../../utilities/localstorage.utility';

const pnlUrl = baseUrl + 'dashboard_main';

export const getDataPnl = async (data: DateFormat) => {
  return clientAxios.post("/dashboard_main", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDataFunnel = async (id: number) => {
  return clientAxios.get(`/get_tracking_user/${id}`, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDashboardFunnel = async (objFunnel: any) => {
  return clientAxios.post("/dashboard_funnel", objFunnel, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};
