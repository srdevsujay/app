import { AppThunk } from "../../../store";
import _ from "lodash";
import Swal from "sweetalert2";
import { getDataLeads } from "../../../../pages/Contacts/services/index";
import { setLeads } from "../contacts/contactsSlice";
import {
  setAmount,
  setCustomerId,
  setSubscriptionsPlans,
  setSubscriptionUser,
  setTheme,
  starLoading,
} from "./configurationSlice";
import {
  createTokenService,
  getUser,
} from "../../../../pages/Configuration/services/index";
import {
  getFacebookToken,
  getGoogleLinkToken,
} from "../../../../pages/Configuration/services/index";
import qs from "qs";
import { clientAxios } from "../../../../services/axios";
import { updateSubscriptionStripeService } from "../../../../pages/Configuration/services/index";
import { signOut } from "../../../../utilities/localstorage.utility";
import {
  getUserTotalSaleMonthService,
  getCancelSubscriptionService,
} from "../../../../pages/Configuration/services/index";
import {
  createSubscriptionUserService,
  getSubscriptionUserService,
} from "../../../../pages/Configuration/services/index";
import {
  createSubscriptionStripeService,
  getDataSubscriptionsPlans,
} from "../../../../pages/Configuration/services/index";
import { logoutUser } from "../login/authSlice";

export const obtainApiContacts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataLeads();
      if (
        result.data.message === "Token is invalid!" ||
        result.data.error === "Signature has expired"
      ) {
        signOut();
        dispatch(logoutUser());
      }
      const currentDataLead: any = _.orderBy(result.data.data, "id", "desc");
      dispatch(setLeads(currentDataLead));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTokenGoogle = (google: any, user: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const CryptoJS = require("crypto-js");
      // Encrypt
      const ciphertext = CryptoJS.AES.encrypt(
        JSON.stringify(google),
        user.email + user.id
      ).toString();
      const googleToken = {
        plataform: "google",
        token: ciphertext,
        user_id: user.id,
      };

      const result = await createTokenService(googleToken);
      const resultGet = await getGoogleLinkToken();
      window.open(resultGet.data.url, "_self");
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTokenFacebook = (
  facebook: any,
  accessToken: any,
  user: any
): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getFacebookToken(accessToken);
      if (result.data.access_token == "") {
        Swal.fire({
          title:
            "No fue posible iniciar sesión en Facebook, intente nuevamente",
          confirmButtonText: "Aceptar",
        });
        return;
      } else {
        if (result.data.access_token) {
          facebook.my_access_token = result.data.access_token;
          const CryptoJS = require("crypto-js");
          const ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(facebook),
            user.email + user.id
          ).toString();
          const facebookToken = {
            plataform: "facebook",
            token: ciphertext,
            user_id: user.id,
          };
          const resultFacebook = await createTokenService(facebookToken);

          // Alerta
          Swal.fire("Correcto", "Token registrado con exito", "success");
          const resultUser = await getUser(user.id);
        } else {
          Swal.fire({
            title:
              "No fue posible iniciar sesión en Facebook, intente nuevamente",
            confirmButtonText: "Aceptar",
          });
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const refreshToken = (
  decryptedData: any,
  code: any,
  user: any
): AppThunk => {
  return async (dispatch) => {
    try {
      await clientAxios({
        method: "post",
        url: "https://oauth2.googleapis.com/token",
        data: qs.stringify({
          redirect_uri: process.env.REACT_APP_REDIRECT_URI_GOOGLE,
          code: code,
          client_id: process.env.REACT_APP_CLIENT_ID_GOOGLE,
          client_secret: process.env.REACT_APP_CLIENT_SECRET_GOOGLE,
          grant_type: "authorization_code",
          access_type: "offline",
        }),
        headers: {
          "content-type":
            "application/x-www-form-urlencoded;charset=utf-8;text/plain",
        },
      }).then((result) => {
        //condicionar Auth
        try {
          decryptedData.refresh_token = result.data.refresh_token;
          decryptedData.access_token = result.data.access_token;
          const CryptoJS = require("crypto-js");
          // Encrypt
          const ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(decryptedData),
            user.email + user.id
          ).toString();
          const googleToken = {
            plataform: "google",
            token: ciphertext,
            user_id: user.id,
          };
          const resultFacebook = createTokenService(googleToken);

          Swal.fire("Correcto", "Token registrado con exito", "success");
        } catch (error) {
          console.log("error registro:", error);
        }
      });
    } catch (error) {
      console.log("error registro:", error);
    }
  };
};

export const createSubscriptionStripe = (token: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      console.log("token", token);
      const currentToken = {
        token: token.id,
      };
      const result = await createSubscriptionStripeService(currentToken);
      console.log("resultTokenId", result);
      if (result.status === 200) {
        dispatch(setCustomerId(result.data.customerId));
        //   Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainApiStripe = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataSubscriptionsPlans();
      if (
        result.data.message === "Token is invalid!" ||
        result.data.error === "Signature has expired"
      ) {
        signOut();
        dispatch(logoutUser());
      }
      dispatch(setSubscriptionsPlans(result.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createSubscriptionUser = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await createSubscriptionUserService(data);
      console.log("resultUser", result);
      if (result.data.message === "Create subscription user succesfully") {
        console.log("resultUser--", result.data.data);
        dispatch(setSubscriptionUser(result.data.data));
        Swal.fire("Correcto", "Suscripción creada correctamente", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainSubscriptionUser = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getSubscriptionUserService();
      console.log("resultSubs", result);
      dispatch(setCustomerId(result.data.data.customer_id));
      dispatch(setSubscriptionUser(result.data.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainUserTotalSaleMonth = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getUserTotalSaleMonthService();
      console.log("resultgetUserTotalSaleMonthService", result.data.data[0]);
      dispatch(setAmount(result.data.data[0]));
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainCancelSubscription = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getCancelSubscriptionService();
      console.log("getCancelSubscriptionService", result.data.error);
      Swal.fire(result.data.message, "", "info");
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateSubscriptionStripe = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await updateSubscriptionStripeService(data);
      console.log("updateSubscriptionStripeService", result.data.data);
      if (result.data.message === "Update subscription user succesfully") {
        dispatch(setSubscriptionUser(result.data.data));
        Swal.fire(
          "Correcto",
          "Suscripción Actualizada correctamente",
          "success"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateTheme = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      dispatch(setTheme(data));
    } catch (error) {
      console.log(error);
    }
  };
};
