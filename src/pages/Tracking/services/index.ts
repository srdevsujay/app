import { clientAxios } from '../../../services/axios';
import { getJwt } from '../../../utilities/localstorage.utility';

export const getDataProduct = async () => {
  return clientAxios.get("/product", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createProductService = async (data: any) => {
  return clientAxios.post("/product", data, {
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