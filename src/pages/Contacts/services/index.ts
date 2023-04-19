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

export const createBookingService = async (data: any) => {
  return clientAxios.post("/booking", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editBookingService = async (data: any) => {
  return clientAxios.put("/booking", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editBookingStateService = async (data: any) => {
  return clientAxios.put("/booking_status", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteBookingService = async (id: any) => {
  return clientAxios.post("/deletebooking", id, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDataSales = async () => {
  return clientAxios.get("/sales", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createSaleService = async (data: any) => {
  return clientAxios.post("/create_sale", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editSaleService = async (data: any) => {
  return clientAxios.put("/edit_sale", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteSaleService = async (id: any) => {
  return clientAxios.post("/sales", id, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getUserProfile = async (data: any) => {
  return clientAxios.post("/user_profile", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createTrafficSourceService = async (data: any) => {
  return clientAxios.post("/sales_attribution", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};