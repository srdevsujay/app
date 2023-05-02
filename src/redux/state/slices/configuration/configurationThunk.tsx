import { AppThunk } from "../../../store";
import _ from "lodash";
import Swal from "sweetalert2";
import { getDataLeads } from "../../../../pages/Contacts/services/index";
import { setLeads } from "../contacts/contactsSlice";
import { starLoading } from "./configurationSlice";
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
      console.log("resultGet", resultGet);
      window.open(resultGet.data.url, "_self");
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
          const resultFacebook = await createTokenService(facebookToken);
          // dispatch(obtainApiFacebook());
          // dispatch(tokenCurrentFacebook(result.data.data.token));
          console.log("result.data.data.token", resultFacebook.data.data.token);

          // Alerta
          Swal.fire("Correcto", "Token registrado con exito", "success");
          const resultUser = await getUser(user.id);
          console.log("result:", result);
          console.log("resultUser:", resultUser);
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

export const refreshToken = (
  decryptedData: any,
  code: any,
  user: any
): AppThunk => {
  return async (dispatch) => {
    console.log("decryptedData---", decryptedData);
    console.log("code---", code);
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
        console.log("respuesta 2do link", result);
        console.log(result.data.access_token);
        //condicionar Auth
        try {
          decryptedData.refresh_token = result.data.refresh_token;
          decryptedData.access_token = result.data.access_token;
          console.log("---->", decryptedData);
          const CryptoJS = require("crypto-js");
          // Encrypt
          const ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(decryptedData),
            user.email + user.id
          ).toString();
          console.log("ciphertext:", ciphertext);
          console.log(user.id);
          const googleToken = {
            plataform: "google",
            token: ciphertext,
            user_id: user.id,
          };
          const resultFacebook = createTokenService(googleToken);
          console.log("resultFacebook:", resultFacebook);
          Swal.fire("Correcto", "Token registrado con exito", "success");
          // clientAxios
          //   .post("/usertoken", googleToken, {
          //     headers: {
          //       "Content-Type": "application/json",
          //       Accept: "*/*",
          //       "x-access-tokens": getJwt(),
          //     },
          //   })
          //   .then((result) => {
          //     dispatch(obtainApiFacebook());
          //     // Alerta
          //     Swal.fire(
          //       "Correcto",
          //       "Token registrado con exito",
          //       "success"
          //     ).then((result) => {
          //       if (result.isConfirmed) {
          //         //dispatch(obtainApiFacebook());
          //         console.log("entro al swal para ejecutar el link de google");
          //       }
          //     });
          //   });
        } catch (error) {
          console.log("error registro:", error);
        }
      });
    } catch (error) {
      console.log("error registro:", error);
    }
  };
};
