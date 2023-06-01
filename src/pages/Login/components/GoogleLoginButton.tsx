import React, { useCallback } from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

interface GoogleLoginButtonProps {
  onSuccess: (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => void;
  onFailure: (error: any) => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({
  onSuccess,
  onFailure,
}) => {
  const handleLoginSuccess = useCallback(
    (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
      onSuccess(response);
    },
    [onSuccess]
  );

  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_CLIENT_ID_GOOGLE}`}
      buttonText="Iniciar sesión con Google"
      onSuccess={handleLoginSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;
