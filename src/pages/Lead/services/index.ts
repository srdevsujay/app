import { clientAxios } from '../../../services/axios';
import { getJwt } from '../../../utilities/localstorage.utility';


export const getDataLeads = async () => {
  return clientAxios.get("/contactos", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};