import { AppThunk } from "../../../store";
import _ from "lodash";
import Swal from "sweetalert2";
import {
  createLeadService,
  getDataLeads,
} from "../../../../pages/Contacts/services/index";
import { setLeads } from "../contacts/contactsSlice";
import { starLoading } from "./configurationSlice";
import { createTokenGoogleService } from "../../../../pages/Configuration/services/index";
import {
  getFacebookToken,
  getGoogleLinkToken,
} from "../../../../pages/Configuration/services/index";

export const obtainApiContacts = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataLeads();
      const currentDataLead: any = _.orderBy(result.data.data, "id", "desc");
      dispatch(setLeads(currentDataLead));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createLead = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const today = new Date().toISOString();
      const form = {
        create_date: today,
        email: data.email,
        funnel_id: data.selectFunnel,
        name: data.fullName,
        phone: data.telephone,
      };
      const result = await createLeadService(form);
      if (result.data.message === "Create Lead successfully!") {
        dispatch(obtainApiContacts());
        Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      }
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

      const result = await createTokenGoogleService(googleToken);
      const resultGet = await getGoogleLinkToken();
      window.open(result.data.url, "_self");
      // if (result.data.message === "Create Lead successfully!") {
      //   dispatch(obtainApiContacts());
      //   Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      // }
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
      console.log("result.data", result);
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
          const resultFacebook = await createTokenGoogleService(facebookToken);
          // dispatch(obtainApiFacebook());
          // dispatch(tokenCurrentFacebook(result.data.data.token));
          console.log("result.data.data.token", resultFacebook.data.data.token);

          // Alerta
          Swal.fire("Correcto", "Token registrado con exito", "success");
          console.log("result:", result);
          // dispatch(changeDecryptForm(0));
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
