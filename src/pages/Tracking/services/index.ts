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

export const getDataAttribution = async () => {
  return clientAxios.get("/rule_attribution", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createAttributionService = async (data: any) => {
  return clientAxios.post("/rule_attribution", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getDataRuleURL = async () => {
  return clientAxios.get("/rules", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createRuleURLService = async (data: any) => {
  return clientAxios.post("/rules", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const editRuleURLService = async (data: any) => {
  return clientAxios.put("/rules", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const deleteRuleURLService = async (id: any) => {
  return clientAxios.post("/deleterule", id, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};