import { clientAxios } from '../../../services/axios';
import { getJwt } from '../../../utilities/localstorage.utility';


export const getGoogleLinkToken = async () => {
  return clientAxios.get("/google_link_token", {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const createTokenService = async (data: any) => {
  return clientAxios.post("/usertoken", data, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

export const getFacebookToken = async (accessToken: any) => {
  return clientAxios.get(`https://graph.facebook.com/${process.env.REACT_APP_VERSION_APP_FACEBOOK}/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.REACT_APP_APP_ID_FACEBOOK}&client_secret=${process.env.REACT_APP_APP_SECRET_FACEBOOK}&fb_exchange_token=${accessToken}`, {
    headers: {
      "x-access-tokens": <string>getJwt(),
    }
  });
};

////////////////////////////////////////////////////////////////////////

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