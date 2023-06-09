import React, { useEffect } from "react";
import FooterMenu from "../../components/Footer/index";
import { Main, Card } from "../../styled-components/main/index";
import { Title } from "../../styled-components/Title/index";
import { Bar } from "../Dashboard/styled-components/dashboardStyled";
import { ButtonCreate } from "../../styled-components/button/index";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/appDispatch";
import { useDecryptTokenGoogle } from "../../hooks/useDecryptTokenGoogle.hook";
import { refreshToken } from "../../redux/state/slices/configuration/configurationThunk";

const Auth = () => {
  const { toggleSlider } = useAppSelector((state) => state.dashboard);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const google = useDecryptTokenGoogle(user.tokens);
  console.log("google", google);

  useEffect(() => {
    dispatch(codeGoogle);
  }, []);

  const decryptToken = (code: any) => {
    // if(code != "" && changeTokenCurrent == 0) {
    console.log("codeeeee", code);
    dispatch(refreshToken(google, code, user));
    // changeTokenCurrent = 0;
    //   return;
    // } else {
    //   const user = JSON.parse(getCurrentUser());
    //   clientAxios
    //     .get(`/user/${user.id}`, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "*/*",
    //         "x-access-tokens": getJwt(),
    //       },
    //     })
    //     .then((result) => {
    //       console.log('CurrentUser--', result.data.tokens );
    //       setCurrentUser(JSON.stringify(result.data));
    //       dispatch(downloadLoginSuccess(result.data));
    //       result.data.tokens.map( tk => {
    //         const { plataform, token } = tk;
    //         const { email, id } = secretKey;
    //         if(plataform === 'google') {
    //           // Decrypt
    //           const bytes  = CryptoJS.AES.decrypt(token, email + id.toString());
    //           decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //           console.log('*****decryptedData', decryptedData);
    //           dispatch(googleDecryptSet(decryptedData));
    //           if(code){
    //             console.log('codeeeee', code);
    //             dispatch(refreshToken(decryptedData, code))
    //           }
    //         }
    //         changeTokenCurrent = 1;
    //         return;
    //       })
    //     })
    // }
  };

  const codeGoogle = () => {
    const paramts = window.location.search;
    console.log(paramts);
    const urlParams = new URLSearchParams(paramts);
    if (urlParams.has("code")) {
      const code = urlParams.get("code");
      console.log("sl**", code);
      // dispatch(obtainCode(code));
      decryptToken(code);
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <Main width={toggleSlider === true ? "87vw" : "96vw"}>
      <Card height="85vh" borderRadius="16px">
        <Title fontSize="17px" color="#123249">
          Autenticación Google
        </Title>
        <Bar></Bar>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card-body">
              <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                <div
                  className="row"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "initial",
                    height: "430px",
                  }}
                >
                  <div
                    style={{
                      padding: "20px",
                      height: "260px",
                      border: "1px solid black",
                      borderRadius: "10px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3
                      style={{
                        textAlign: "center",
                        fontFamily: "Helvetica-NeueL-Title",
                      }}
                    >
                      Su proceso de autenticación con Google ha terminado,
                      asocia sus cuentas publicitarias de google a su respectivo
                      funnel para obtener las estadísticas de Google ADS.
                    </h3>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <ButtonCreate
                        className="btn btn-add mr-2 font-14"
                        style={{ width: "230px" }}
                        onClick={handleNavigate}
                      >
                        Ir al Dashboard
                      </ButtonCreate>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <FooterMenu />
    </Main>
  );
};

export default Auth;
