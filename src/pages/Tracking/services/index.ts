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

export const editProductService = async (data: any) => {
  return clientAxios.put("/product", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteProductService = async (id: any) => {
  return clientAxios.post("/deleteproduct", id, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDataTag = async () => {
  return clientAxios.get("/get_etiquetas", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};