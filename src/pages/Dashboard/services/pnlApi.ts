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

export const loginHandle = async (data: any) => {
  return clientAxios.post("/login", data, {
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

export const createFilterFunnelService = async (data: any) => {
  return clientAxios.post("/filters", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createFunnelService = async (data: any) => {
  return clientAxios.post("/funnel", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editFunnelService = async (data: any) => {
  return clientAxios.put("/funnel", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteFunnelService = async (data: any) => {
  return clientAxios.post("/deletefunnel", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editUserService = async (data: any) => {
  return clientAxios.put("/user", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createDeleteImageProfileService = async (id: any) => {
  return clientAxios.post(`/delete_image/${id}`, {
    headers: {
      "Accept": "*/*",
      "Content-Type": "application/json",
      "x-access-tokens": <string>getJwt(),
    }
  });
}

export const loginGoogle = async (data: any) => {
  return clientAxios.post("/login_google", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};
