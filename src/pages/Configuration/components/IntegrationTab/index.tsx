import googleApi from "../../../../assets/images/Google-AdWords-API.png";
import Facebook from "../../../../assets/images/facebookAds.png";
import stripeIcon from "../../../../assets/images/stripeIcon.png";
import paypal from "../../../../assets/images/paypal.png";
import hotmart from "../../../../assets/images/hotmart.png";
import iconPaypal from "../../../../assets/images/iconPaypal.png";
import FormGroup from "@mui/material/FormGroup";
import { FormControlLabel, Switch, Checkbox } from "@mui/material";
import { CardPlatform } from "../../styled-components/Plataform/index";
import { useContext, useRef, useState } from "react";
import Modal from "../../../../components/modal/Modal.component";
import FormWebhook from "../FormWebhook/index";
import FormGoogle from "../FormGoogle/index";
import { useAppSelector } from "../../../../hooks/appDispatch";
import "../../styled-components/style.css";
import Swal from "sweetalert2";
import { createTokenFacebook } from "../../../../redux/state/slices/configuration/configurationThunk";
import { useAppDispatch } from "../../../../hooks/appDispatch";
import FacebookButtonLogin from "./FacebookButtonLogin";
import { ThemeContext } from "../../../../utilities/theme/ThemeContext";
import HelpVideo from "../../../../components/HelpVideo/HelpVideo";
import video from "../../../../assets/images/video.svg";
import videoDark from "../../../../assets/images/videoDark.svg";

const IntegrationTab = () => {
  const dispatch = useAppDispatch();
  const { tokenfacebook, tokengoogle } = useAppSelector(
    (state) => state.dashboard
  );
  const user = useAppSelector((state) => state.user.user);
  const [title, setTitle] = useState("");
  const [titleWebhook, setTitleWebhook] = useState("");
  const [isModalOpenUser, setModalOpenUser] = useState<boolean>(false);
  const [isModalOpenGoogle, setModalOpenGoogle] = useState<boolean>(false);
  const [isStripe, setIsStripe] = useState<boolean>(false);

  const [facebook, setFacebook] = useState({
    my_access_token: "",
    ad_account_id: "",
    my_app_secret: process.env.REACT_APP_APP_SECRET_FACEBOOK,
    my_app_id: process.env.REACT_APP_APP_ID_FACEBOOK,
  });

  const toggleModalUser = () => {
    setModalOpenUser(!isModalOpenUser);
    setIsStripe(false);
  };

  const toggleModalGoogle = () => {
    setModalOpenGoogle(!isModalOpenGoogle);
    setIsStripe(false);
  };

  const eventStripe = () => {
    setModalOpenUser(!isModalOpenUser);
    setTitle("Integración Stripe");
    setTitleWebhook("https://api.roalytics.com/api/v1/stripe_webhooks/");
    setIsStripe(true);
  };

  const eventPaypal = () => {
    setModalOpenUser(!isModalOpenUser);
    setTitle("Integración Webhook Paypal IPN");
    setTitleWebhook("https://api.roalytics.com/api/v1/paypal_ipn/");
  };

  const eventPaypalWebhook = () => {
    setModalOpenUser(!isModalOpenUser);
    setTitle("Integración Webhook Paypal");
    setTitleWebhook("https://api.roalytics.com/api/v1/paypal/");
  };

  const eventHotmartWebhook = () => {
    setModalOpenUser(!isModalOpenUser);
    setTitle("Integración Webhook Hotmart");
    setTitleWebhook("https://api.roalytics.com/api/v1/hotmart/");
  };

  const [clickHandle, setClickHandle] = useState(0);

  const handleClickFacebook = () => {
    setClickHandle(1);
  };

  const responseFacebook = (response: any) => {
    console.log("response", response);
    try {
      if (response.error || response.status == "unknown") {
        Swal.fire({
          title:
            "No fue posible iniciar sesión en Facebook, intente nuevamente",
          confirmButtonText: "Aceptar",
        });
      } else {
        dispatch(createTokenFacebook(facebook, response.accessToken, user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const integrationArr = [
    {
      title: "Google Ads Api",
      description:
        "Haga clic para integrar con Google Ads Api Informes personalizados",
      active: !tokengoogle,
      urlImg: googleApi,
      event: toggleModalGoogle,
      guide:
        "https://sites.google.com/roalytics.com/ayuda-g-ads-integracion/inicio",
    },
    {
      title: "Webhook Stripe",
      description: "(Webhook para notificaciones de eventos)",
      active: true,
      urlImg: stripeIcon,
      event: eventStripe,
      guide:
        "https://sites.google.com/roalytics.com/ayuda-stripe-integracion/inicio",
    },
    {
      title: "Facebook",
      description:
        "Para integrar tus campañas y anuncios de Facebook haz clic debajo e inicia sesión en tu cuenta de Facebook",
      active: !tokenfacebook,
      urlImg: Facebook,
      event: handleClickFacebook,
    },
    {
      title: "Paypal IPN",
      description: "(Notificación de pago instantáneo)",
      active: true,
      urlImg: paypal,
      event: eventPaypal,
      guide:
        "https://sites.google.com/roalytics.com/ayuda-paypal-integracion/inicio",
    },
    {
      title: "Webhook Paypal",
      description: "(Webhook para notificaciones de eventos)",
      active: true,
      urlImg: iconPaypal,
      event: eventPaypalWebhook,
    },
    {
      title: "Webhook Hotmart",
      description: "(Webhook para notificaciones de eventos)",
      active: true,
      urlImg: hotmart,
      event: eventHotmartWebhook,
      guide:
        "https://sites.google.com/roalytics.com/ayuda-hotmart-integracion/inicio",
    },
  ];

  const { theme } = useContext(ThemeContext);

  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return (
    <>
      <div className="mt-3">
        <HelpVideo
          title={"Video Tutorial Integraciones"}
          image={themeState ? video : videoDark}
          url={"https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"}
        />
      </div>
      <div className="row">
        {integrationArr.map(
          (integration: any, i: number) => (
            console.log("integration.guide", integration.guide),
            (
              <div className="col-sm-4 mt-4 pl-0" key={i}>
                <CardPlatform theme={theme}>
                  <div className="activeIntegration">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={integration.active}
                            // onChange={handleChange}
                            inputProps={{ "aria-label": "controlled" }}
                          />
                        }
                        label={!integration.active ? "Inactivo" : "Activo"}
                      />
                    </FormGroup>
                  </div>
                  <img
                    src={integration.urlImg}
                    alt=""
                    width="50"
                    className="imgApi"
                  />
                  <div className="ApiText">
                    <span className="title-card">{integration.title}</span>
                    <br />
                    <span className="card-body" style={{ padding: "0" }}>
                      {integration.description}
                    </span>
                    <br />
                    <a className="click-here" onClick={integration.event}>
                      Clic aquí
                    </a>
                    <br />
                    {integration.guide === undefined ? (
                      ""
                    ) : (
                      <a
                        className="click-here"
                        href={integration.guide}
                        target="_blank"
                      >
                        Ver Guia
                      </a>
                    )}
                  </div>
                </CardPlatform>
              </div>
            )
          )
        )}
        <Modal
          title={title}
          isOpen={isModalOpenUser}
          onClose={toggleModalUser}
          width="36vw"
          padding="10px 32px"
          bottom="14px"
          height={isStripe ? "420px" : "270px"}
          btnClose={1}
          // subTitle={emailCustomerDetail}
        >
          <FormWebhook isStripe={isStripe} titleWebhook={titleWebhook} />
        </Modal>
        <Modal
          title="Integración Google Roalytics"
          isOpen={isModalOpenGoogle}
          onClose={toggleModalGoogle}
          width="36vw"
          padding="10px 32px"
          bottom="14px"
          height="325px"
          btnClose={1}
          // subTitle={emailCustomerDetail}
        >
          <FormGoogle />
        </Modal>
        <div className="d-none">
          <FacebookButtonLogin
            responseFacebook={responseFacebook}
            clickHandle={clickHandle}
            setClickHandle={setClickHandle}
          />
        </div>
      </div>
    </>
  );
};

export default IntegrationTab;
