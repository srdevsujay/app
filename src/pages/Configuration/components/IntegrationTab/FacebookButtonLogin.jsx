import { useEffect } from "react";
import FacebookLogin from "react-facebook-login";

const FacebookButtonLogin = ({responseFacebook, clickHandle, setClickHandle}) => {

  useEffect(() => {
    if(clickHandle === 1) {
      document.querySelector('.kep-login-facebook').click();
      setClickHandle(0);
    }
  }, [clickHandle])
  

  return (
    <FacebookLogin
      appId={process.env.REACT_APP_APP_ID_FACEBOOK}
      autoLoad={false}
      fields="name,email,picture"
      // scope="ads_read,ads_management,pages_show_list"
      callback={responseFacebook}
      // textButton="Iniciar integración con Facebook"
      // icon="fa-facebook"
      // isDisabled={true}
    />
  )
}

export default FacebookButtonLogin