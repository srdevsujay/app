import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import btnGoogle from "../../../../assets/images/btn_google_dark_normal_ios.svg";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { ButtonGoogle } from "../../../../styled-components/button/index";
import { createTokenGoogle } from "../../../../redux/state/slices/configuration/configurationThunk";
var CryptoJS = require("crypto-js");

const FormGoogle = () => {
  const dispatch = useAppDispatch();
  const { tokens } = useAppSelector((state) => state.user.user);
  const secretKey = useAppSelector((state) => state.user.user);
  const [google, setGoogle] = useState({
    client_id: process.env.REACT_APP_CLIENT_ID_GOOGLE,
    developer_token: "",
    client_secret: process.env.REACT_APP_CLIENT_SECRET_GOOGLE,
    login_customer_id: "",
  });

  const onChangeFormGoogle = (e: any) => {
    // dispatch(changeDecryptForm(1));
    setGoogle({
      ...google,
      [e.target.name]: e.target.value,
    });
    // console.log('googlePopup:', google);
  };

  useEffect(() => {
    if (tokens) {
      tokens.map((tk, index) => {
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
            developer_token: decryptedData.developer_token,
            login_customer_id: decryptedData.login_customer_id,
          });
          return;
        }
      });
    }
  }, [tokens]);
  console.log("google", google);

  // try {
  //   if(DecryptForm == 0) {
  //     token.map( (tk, index) => {
  //       console.log('entra', index);
  //       const { plataform, token } = tk;
  //       const { email, id } = secretKey;
  //       if(plataform === 'google') {
  //         console.log('entra a Google', index);
  //         let decryptedData = null;
  //         console.log(token);
  //         // Decrypt
  //         const bytes  = CryptoJS.AES.decrypt(TokenGoogle ? TokenGoogle : token, email + id.toString());
  //         decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  //         console.log('Decript Google', decryptedData);
  //         google.client_id = decryptedData.client_id;
  //         google.developer_token = decryptedData.developer_token;
  //         google.client_secret = decryptedData.client_secret;
  //         google.login_customer_id = decryptedData.login_customer_id;
  //         return;
  //       }
  //     })
  //     console.log({stripe});
  //   }
  // } catch (error) {
  //   console.log(error);
  // }

  const submitGoogle = (e: any) => {
    e.preventDefault();
    console.log("goooooooogle", google);
    if (
      google.developer_token.trim() === "" ||
      google.login_customer_id.trim() === ""
    ) {
      Swal.fire({
        title: "Todos los campos son obligatorios.",
        confirmButtonText: "Aceptar",
      });
      return;
    }
    // localStorage.setItem("google", JSON.stringify(google));
    dispatch(createTokenGoogle(google, secretKey));
  };

  return (
    <form>
      <div className="row mt-4">
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Developer Token</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Developer Token"
            name="developer_token"
            // defaultValue={user.email}
            defaultValue={google?.developer_token}
            onChange={(e) => onChangeFormGoogle(e)}
          />
        </div>
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Login Customer Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tu Customer Id"
            name="login_customer_id"
            // defaultValue={user.password}
            defaultValue={google?.login_customer_id}
            onChange={(e) => onChangeFormGoogle(e)}
          />
        </div>
      </div>
      <div className="row">
        {/* <button type="button" onClick={doSubmit} className="btn w-100 button-login">Iniciar Sesión</button> */}
        <div className="form-group col-sm-12">
          <ButtonGoogle
            className="btn btnGoogle mr-2 font-14"
            onClick={(e) => submitGoogle(e)}
          >
            <img
              // src={btnGoogle}
              alt=""
              width="45"
              className="logoGoogle"
            />
            Acceder con Google
          </ButtonGoogle>
        </div>
      </div>
    </form>
  );
};

export default FormGoogle;
