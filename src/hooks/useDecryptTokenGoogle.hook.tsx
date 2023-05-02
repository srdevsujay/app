import { useState, useEffect } from "react";
import { useAppSelector } from "./appDispatch";
var CryptoJS = require("crypto-js");

export const useDecryptTokenGoogle = (tokens: any) => {
  const secretKey = useAppSelector((state) => state.user.user);
  const [google, setGoogle] = useState<any>();

  useEffect(() => {
    tokens.map((tk: any, index: number) => {
      console.log("entra", index);
      const { plataform, token } = tk;
      const { email, id } = secretKey;
      if (plataform === "google") {
        console.log("entra a Google", index);
        let decryptedData = null;
        console.log("token", token);
        // Decrypt
        // const bytes  = CryptoJS.AES.decrypt(TokenGoogle ? TokenGoogle : token, email + id.toString());
        const bytes = CryptoJS.AES.decrypt(token, email + id.toString());
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        console.log("Decript Google", decryptedData);
        // google.client_id = decryptedData.client_id;
        // google.developer_token = decryptedData.developer_token;
        // google.client_secret = decryptedData.client_secret;
        // google.login_customer_id = decryptedData.login_customer_id;
        setGoogle({
          ...google,
          client_id: process.env.REACT_APP_CLIENT_ID_GOOGLE,
          client_secret: process.env.REACT_APP_CLIENT_SECRET_GOOGLE,
          developer_token: decryptedData.developer_token,
          login_customer_id: decryptedData.login_customer_id,
        });
      }
    });
  }, [tokens]);

  return google;
};
