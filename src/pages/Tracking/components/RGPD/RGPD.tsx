import {
  TitleHelvetica,
  Title,
} from "../../../../styled-components/Title/index";
import FormGroup from "@mui/material/FormGroup";
import { FormControlLabel, Checkbox, Switch } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { handleRGPD } from "../../../../redux/state/slices/tracking/trackingThunk";
import { useEffect, useState } from "react";
import "../../styled-components/styled.css";

const RGPD = () => {
  const { rgpd } = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [handleRgdp, setHandleRgdp] = useState(rgpd);

  const handleChange = (rgpd: boolean) => {
    console.log("rgpd", rgpd);
    if (rgpd === true) {
      setHandleRgdp(true);
      dispatch(handleRGPD(1));
    } else {
      setHandleRgdp(false);
      dispatch(handleRGPD(0));
    }
  };

  useEffect(() => {
    setHandleRgdp(rgpd);
  }, [rgpd]);

  return (
    <section className="mt-3">
      <div className="row">
        <div className="col-sm-12">
          <Title fontSize="16px">¿Habilitar RGPD en la Union Europea? </Title>
        </div>
        <div className="col-sm-9">
          <TitleHelvetica fontSize="14px">
            Al habilitar esto, aceptará que todas las páginas en las que está
            incrustado nuestro script notifiquen correctamente a los clientes
            que están siendo rastreados, permitiéndoles optar por no seguir el
            seguimiento si así lo desean (Solo se notifica en la Union Europea).
          </TitleHelvetica>
        </div>
        <div className="col-sm-3">
          <FormControlLabel
            control={
              <Switch
                checked={Boolean(handleRgdp)}
                onChange={() => handleChange(!handleRgdp)}
              />
            }
            label={!handleRgdp ? "Inactivo" : "Activo"}
            className={`font-toggle ${!rgpd && "modoDarkSwitch"}`}
          />
          {/* <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={handleRgdp}
                  onChange={() => setHandleRgdp(!handleRgdp)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label={!handleRgdp ? "Inactivo" : "Activo"}
            />
          </FormGroup> */}
        </div>
      </div>
    </section>
  );
};

export default RGPD;
