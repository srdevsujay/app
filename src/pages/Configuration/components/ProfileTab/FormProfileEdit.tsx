import React, { useEffect, useState } from "react";
import InputRegister from "../../../../components/input/InputRegister.component";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl } from "@mui/material";
import * as yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../../hooks/appDispatch";
import { editUser } from "../../../../redux/state/slices/login/loginThunk";
import { ButtonsModal } from "../../../../styled-components/button/index";
import { SelectScript } from "../../../Tracking/styled-components/TableRule";

const FormProfileEdit = ({ onClose, perfil }: any) => {
  const dispatch = useAppDispatch();
  const profileEdit = useAppSelector((state) => state.user.user);
  const [selectedTimezone, setSelectedTimezone] = useState(perfil.time_zone);

  const schema = yup.object().shape({
    name: yup.string().required("El nombre es requerido"),
    last_name: yup.string().required("El Apellido es requerido"),
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    // selectFunnel: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (profileEdit) {
      setValue("name", profileEdit.name);
      setValue("last_name", profileEdit.last_name);
      setValue("email", profileEdit.email);
    }
  }, [profileEdit, setValue]);

  const onChangeSelect = (e: any) => {
    setSelectedTimezone(e.target.value);
  };

  const onSubmit = (data: any) => {
    console.log("data", data);
    // type_currency: "1"
    const form = {
      email: data.email,
      id: perfil.id,
      last_name: data.last_name,
      name: data.name,
      password: data.password,
      status: 1,
      time_zone: selectedTimezone,
      type_currency: "1",
      user_type: 1,
      validatePassword: null,
    };
    console.log("form", form);
    dispatch(editUser(form));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-6">
          <InputRegister
            placeholder="Ingresa tu nombre completo"
            label="Nombre"
            id="0"
            type="text"
            min={3}
            name="name"
            register={register}
            error={String(errors["name"]?.message)}
          />
        </div>
        <div className="form-group col-sm-6">
          <InputRegister
            placeholder="Ingresa tu Apellido"
            label="Apellido"
            id="0"
            type="text"
            min={3}
            name="last_name"
            register={register}
            error={String(errors["last_name"]?.message)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa tu correo electronico"
            label="E-mail Adress"
            id="0"
            type="text"
            min={3}
            name="email"
            register={register}
            error={String(errors["email"]?.message)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-6">
          <InputRegister
            placeholder="Ingresa la nueva contraseña"
            label="Contraseña"
            id="0"
            type="password"
            min={3}
            name="password"
            register={register}
            error={String(errors["password"]?.message)}
          />
        </div>
        <div className="form-group col-sm-6">
          <InputRegister
            placeholder="Confirma la nueva contraseña"
            label="Confirmar Contraseña"
            id="0"
            type="password"
            min={3}
            name="passwordConfirm"
            register={register}
            error={String(errors["passwordConfirm"]?.message)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-6">
          <h5 className="font-text-Label-Configuracion">Zona Horaria</h5>
          <FormControl className="form-control w-100">
            <SelectScript
              className="css-select-1 font-HelveticaNeueL"
              style={{ fontSize: "14px", width: "100%" }}
              name="time_zone"
              // value={form?.time_zone}
              // onChange={(e) => handleChange(e)}
              value={selectedTimezone}
              onChange={onChangeSelect}
            >
              <option value="Etc/GMT+12">
                (GMT-12:00) International Date Line West
              </option>
              <option value="Pacific/Midway">
                (GMT-11:00) Midway Island, Samoa
              </option>
              <option value="Pacific/Honolulu">(GMT-10:00) Hawaii</option>
              <option value="US/Alaska">(GMT-09:00) Alaska</option>
              <option value="America/Los_Angeles">
                (GMT-08:00) Pacific Time (US & Canada)
              </option>
              <option value="America/Tijuana">
                (GMT-08:00) Tijuana, Baja California
              </option>
              <option value="US/Arizona">(GMT-07:00) Arizona</option>
              <option value="America/Chihuahua">
                (GMT-07:00) Chihuahua, La Paz, Mazatlan
              </option>
              <option value="US/Mountain">
                (GMT-07:00) Mountain Time (US & Canada)
              </option>
              <option value="America/Managua">
                (GMT-06:00) Central America
              </option>
              <option value="US/Central">
                (GMT-06:00) Central Time (US & Canada)
              </option>
              <option value="America/Mexico_City">
                (GMT-06:00) Guadalajara, Mexico City, Monterrey
              </option>
              <option value="Canada/Saskatchewan">
                (GMT-06:00) Saskatchewan
              </option>
              <option value="America/Bogota">
                (GMT-05:00) Bogota, Lima, Quito, Rio Branco
              </option>
              <option value="US/Eastern">
                (GMT-05:00) Eastern Time (US & Canada)
              </option>
              <option value="US/East-Indiana">
                (GMT-05:00) Indiana (East)
              </option>
              <option value="Canada/Atlantic">
                (GMT-04:00) Atlantic Time (Canada)
              </option>
              <option value="America/Caracas">
                (GMT-04:00) Caracas, La Paz
              </option>
              <option value="America/Manaus">(GMT-04:00) Manaus</option>
              <option value="America/Santiago">(GMT-04:00) Santiago</option>
              <option value="Canada/Newfoundland">
                (GMT-03:30) Newfoundland
              </option>
              <option value="America/Sao_Paulo">(GMT-03:00) Brasilia</option>
              <option value="America/Argentina/Buenos_Aires">
                (GMT-03:00) Buenos Aires, Georgetown
              </option>
              <option value="America/Godthab">(GMT-03:00) Greenland</option>
              <option value="America/Montevideo">(GMT-03:00) Montevideo</option>
              <option value="America/Noronha">(GMT-02:00) Mid-Atlantic</option>
              <option value="Atlantic/Cape_Verde">
                (GMT-01:00) Cape Verde Is.
              </option>
              <option value="Atlantic/Azores">(GMT-01:00) Azores</option>
              <option value="Africa/Casablanca">
                (GMT+00:00) Casablanca, Monrovia, Reykjavik
              </option>
              <option value="Etc/Greenwich">
                (GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon,
                London
              </option>
              <option value="Europe/Amsterdam">
                (GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna
              </option>
              <option value="Europe/Belgrade">
                (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague
              </option>
              <option value="Europe/Brussels">
                (GMT+01:00) Brussels, Copenhagen, Madrid, Paris
              </option>
              <option value="Europe/Sarajevo">
                (GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb
              </option>
              <option value="Africa/Lagos">
                (GMT+01:00) West Central Africa
              </option>
              <option value="Asia/Amman">(GMT+02:00) Amman</option>
              <option value="Europe/Athens">
                (GMT+02:00) Athens, Bucharest, Istanbul
              </option>
              <option value="Asia/Beirut">(GMT+02:00) Beirut</option>
              <option value="Africa/Cairo">(GMT+02:00) Cairo</option>
              <option value="Africa/Harare">
                (GMT+02:00) Harare, Pretoria
              </option>
              <option value="Europe/Helsinki">
                (GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius
              </option>
              <option value="Asia/Jerusalem">(GMT+02:00) Jerusalem</option>
              <option value="Europe/Minsk">(GMT+02:00) Minsk</option>
              <option value="Africa/Windhoek">(GMT+02:00) Windhoek</option>
              <option value="Asia/Kuwait">
                (GMT+03:00) Kuwait, Riyadh, Baghdad
              </option>
              <option value="Europe/Moscow">
                (GMT+03:00) Moscow, St. Petersburg, Volgograd
              </option>
              <option value="Africa/Nairobi">(GMT+03:00) Nairobi</option>
              <option value="Asia/Tbilisi">(GMT+03:00) Tbilisi</option>
              <option value="Asia/Tehran">(GMT+03:30) Tehran</option>
              <option value="Asia/Muscat">(GMT+04:00) Abu Dhabi, Muscat</option>
              <option value="Asia/Baku">(GMT+04:00) Baku</option>
              <option value="Asia/Yerevan">(GMT+04:00) Yerevan</option>
              <option value="Asia/Kabul">(GMT+04:30) Kabul</option>
              <option value="Asia/Yekaterinburg">
                (GMT+05:00) Yekaterinburg
              </option>
              <option value="Asia/Karachi">
                (GMT+05:00) Islamabad, Karachi, Tashkent
              </option>
              <option value="Asia/Calcutta">
                (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
              </option>
              <option value="Asia/Calcutta">
                (GMT+05:30) Sri Jayawardenapura
              </option>
              <option value="Asia/Katmandu">(GMT+05:45) Kathmandu</option>
              <option value="Asia/Almaty">
                (GMT+06:00) Almaty, Novosibirsk
              </option>
              <option value="Asia/Dhaka">(GMT+06:00) Astana, Dhaka</option>
              <option value="Asia/Rangoon">(GMT+06:30) Yangon (Rangoon)</option>
              <option value="Asia/Bangkok">
                (GMT+07:00) Bangkok, Hanoi, Jakarta
              </option>
              <option value="Asia/Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
              <option value="Asia/Hong_Kong">
                (GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi
              </option>
              <option value="Asia/Kuala_Lumpur">
                (GMT+08:00) Kuala Lumpur, Singapore
              </option>
              <option value="Asia/Irkutsk">
                (GMT+08:00) Irkutsk, Ulaan Bataar
              </option>
              <option value="Australia/Perth">(GMT+08:00) Perth</option>
              <option value="Asia/Taipei">(GMT+08:00) Taipei</option>
              <option value="Asia/Tokyo">
                (GMT+09:00) Osaka, Sapporo, Tokyo
              </option>
              <option value="Asia/Seoul">(GMT+09:00) Seoul</option>
              <option value="Asia/Yakutsk">(GMT+09:00) Yakutsk</option>
              <option value="Australia/Adelaide">(GMT+09:30) Adelaide</option>
              <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
              <option value="Australia/Brisbane">(GMT+10:00) Brisbane</option>
              <option value="Australia/Canberra">
                (GMT+10:00) Canberra, Melbourne, Sydney
              </option>
              <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
              <option value="Pacific/Guam">
                (GMT+10:00) Guam, Port Moresby
              </option>
              <option value="Asia/Vladivostok">(GMT+10:00) Vladivostok</option>
              <option value="Asia/Magadan">
                (GMT+11:00) Magadan, Solomon Is., New Caledonia
              </option>
              <option value="Pacific/Auckland">
                (GMT+12:00) Auckland, Wellington
              </option>
              <option value="Pacific/Fiji">
                (GMT+12:00) Fiji, Kamchatka, Marshall Is.
              </option>
              <option value="Pacific/Tongatapu">(GMT+13:00) Nuku'alofa</option>
              {/* {
                  timeZones.map((timeZone, i) => (
                      // strTime = date.toLocaleString("en-US", {timeZone: `${timeZone}`})
                      <option value={timeZone}>{timeZone}</option>
                    
                  ))
                } */}
            </SelectScript>
          </FormControl>
          {/* <div className="select-wrapper">
              <TimezoneSelect
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
            </div> */}
        </div>

        <div className="form-group col-sm-6">
          <h5 className="font-text-Label-Configuracion">Tipo de Moneda</h5>
          <FormControl className="form-control w-100">
            <SelectScript
              className="css-select-2 font-HelveticaNeueL"
              style={{ fontSize: "14px", width: "100%" }}
              name="type_currency"
              // value={account?.type_currency}
              // onChange={(e) => changeForm(e)}
            >
              <option disabled selected>
                US
              </option>
              <option value={1}>$ US</option>
            </SelectScript>
          </FormControl>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <h5
            className="font-text-Label-Configuracion"
            style={{
              fontSize: ".9375rem",
              fontFamily: "Helvetica-NeueL-Title",
            }}
          >
            * Si no desea actualizar su contraseña, por favor no ingresar datos
            en los campos contraseña y confirmar contraseña
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-6">
          <ButtonsModal className="btn btn-close" onClick={onClose}>
            Cerrar
          </ButtonsModal>
        </div>
        <div className="form-group col-sm-6">
          <ButtonsModal className="btn btn-add" type="submit">
            Editar
          </ButtonsModal>
        </div>
      </div>
    </form>
  );
};

export default FormProfileEdit;
