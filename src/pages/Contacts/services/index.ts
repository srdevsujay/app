import { clientAxios } from '../../../services/axios';
import { getJwt } from '../../../utilities/localstorage.utility';


export const getDataLeads = async () => {
  return clientAxios.get("/contactos", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createLeadService = async (data: any) => {
  return clientAxios.post("/lead", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editLeadService = async (data: any) => {
  return clientAxios.put("/lead", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteLeadService = async (id: any) => {
  return clientAxios.post("/deletelead", id, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDataBooking = async () => {
  return clientAxios.get("/booking", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};
