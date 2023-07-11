import React, { useEffect, useState } from "react";
import { RegisterUser } from "../../models";
import { starLoading } from "../../redux/state/slices/login/authSlice";
import { registerUserService } from "./services/registerUserService";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { registerUserThunk } from "../../redux/state/slices/register";
import { ButtonLogin, FlexColumnLogin } from "../Login/styled-components";
import ContainerRightLogin from "../Login/components/ContainerRightLogin";
import "../Login/styled-components/style.css";
import { Link, useNavigate } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import { Select } from "../../styled-components/select/index";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputRegister from "../../components/input/InputRegister.component";
import Swal from "sweetalert2";

const CreateAccount = () => {
  const navigate = useNavigate();
  const toLogin = useAppSelector((state) => state.user.email);
  const dispatch = useAppDispatch();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [form, setForm] = useState<RegisterUser>({
    name: "",
    last_name: "",
    email: "",
    password: "",
    image_name: "image",
    status: 1,
    user_type: 2,
    time_zone: "",
    type_currency: "0",
    validatePassword: "",
  });

  const [selectedTimezone, setSelectedTimezone] = useState("Etc/GMT+12");
  const [selectedTypeCurrency, setSelectedTypeCurrency] = useState(1);

  const {
    name,
    last_name,
    email,
    password,
    image_name,
    status,
    user_type,
    time_zone,
    type_currency,
  } = form;

  const schema = yup.object().shape({
    name: yup.string().required("El nombre completo es requerido"),
    lastName: yup.string().required("El nombre completo es requerido"),
    email: yup
      .string()
      .email("El correo electrónico debe ser un correo electrónico válido")
      .required("El correo electronico es requerido"),
    password: yup.string().required("La contraseña es requerida"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setConfirmPassword(data.password);
    if (form.validatePassword !== data.password) {
      // Swal.fire("Las contraseñas deben coinsidir");
      return;
    }
    const dataForm = {
      name: data.name,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      image_name,
      status,
      user_type,
      time_zone: selectedTimezone,
      type_currency,
    };
    console.log("dataForm", dataForm);

    dispatch(registerUserThunk(dataForm));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onChangeSelect = (e: any) => {
    setSelectedTimezone(e.target.value);
  };

  const onChangeTypeCurrency = (e: any) => {
    setSelectedTypeCurrency(e.target.value);
  };

  let localStorageTheme: string | null | number | boolean =
    localStorage.getItem("Theme");

  useEffect(() => {
    const localS = localStorage.getItem("accountSuccess");
    console.log("localS", localS);
    if (localS === "" || localS === null) return;
    navigate("/login");
    localStorage.removeItem("accountSuccess");
  }, [toLogin]);

  console.log("confirmPassword", confirmPassword);

  return (
    <div className="account-pages" style={{ width: "98%" }}>
      <div className="row justify-content-center">
        <FlexColumnLogin
          className={
            localStorageTheme === "true"
              ? "col-sm-5 back-theme-login-left overFY"
              : "col-sm-5 overFY"
          }
        >
          <div className="row mt-5 ">
            <div className="mt-3 col-sm-12">
              <div className="page-title-box">
                <h4 className="text-dark-50 text-center font-weight-bold title-bienvenido mt-4">
                  ¡Crear cuenta!
                </h4>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-3 w-65">
            <div className="form-group">
              {/* <label className="title-email">Nombre</label>
              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu nombre"
                name="name"
                value={form.name}
                // onBlur={handleBlur}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
              /> */}
              <InputRegister
                placeholder="Ingresa tu nombre"
                label="Nombre"
                id="0"
                type="text"
                min={3}
                name="name"
                register={register}
                error={String(errors["name"]?.message)}
              />
            </div>
            <div className="form-group">
              {/* <label className="title-email">Apellido</label>
              <input
                type="text"
                className="form-control"
                placeholder="Escribe tu apellido"
                name="last_name"
                value={form.last_name}
                // onBlur={handleBlur}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
              /> */}
              <InputRegister
                placeholder="Ingresa tu apellido"
                label="Apellido"
                id="0"
                type="text"
                min={3}
                name="lastName"
                register={register}
                error={String(errors["lastName"]?.message)}
              />
              {/* {errors.last_name && <p style={styles}>{errors.last_name}</p>} */}
            </div>
            <div className="form-group">
              {/* <label className="title-email">Correo</label>
              <input
                type="email"
                className="form-control"
                placeholder="Escribe tu Email"
                name="email"
                value={form.email}
                // onBlur={handleBlur}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
              /> */}
              <InputRegister
                placeholder="Ingresa tu correo"
                label="Correo"
                id="0"
                type="text"
                min={3}
                name="email"
                register={register}
                error={String(errors["email"]?.message)}
              />
              {/* {errors.email && <p style={styles}>{errors.email}</p>} */}
            </div>
            <div className="form-group">
              {/* <label className="title-email">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="password"
                value={form.password}
                // onBlur={handleBlur}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
              /> */}
              <InputRegister
                placeholder="Ingrese la contraseña"
                label="Contraseña"
                id="0"
                type="password"
                min={3}
                name="password"
                register={register}
                error={String(errors["password"]?.message)}
              />
              {/* {errors.password && <p style={styles}>{errors.password}</p>} */}
            </div>
            <div className="form-group">
              <label className="title-email">Confirmar Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirmar Contraseña"
                name="validatePassword"
                value={form.validatePassword}
                onChange={(e) => handleChange(e)}
                style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
              />
              {form.validatePassword !== confirmPassword && (
                <label className="error-password">
                  Las contraseñas deben coinsidir
                </label>
              )}
            </div>
            <div className="form-group">
              <label className="font-text-Label-Configuracion">
                Zona Horaria
              </label>
              <FormControl className="form-control w-100">
                <Select
                  className="css-select-1 font-HelveticaNeueL"
                  style={{ fontSize: "14px" }}
                  name="selectedTimezone"
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
                  <option value="America/Sao_Paulo">
                    (GMT-03:00) Brasilia
                  </option>
                  <option value="America/Argentina/Buenos_Aires">
                    (GMT-03:00) Buenos Aires, Georgetown
                  </option>
                  <option value="America/Godthab">(GMT-03:00) Greenland</option>
                  <option value="America/Montevideo">
                    (GMT-03:00) Montevideo
                  </option>
                  <option value="America/Noronha">
                    (GMT-02:00) Mid-Atlantic
                  </option>
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
                    (GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana,
                    Prague
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
                  <option value="Asia/Muscat">
                    (GMT+04:00) Abu Dhabi, Muscat
                  </option>
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
                  <option value="Asia/Rangoon">
                    (GMT+06:30) Yangon (Rangoon)
                  </option>
                  <option value="Asia/Bangkok">
                    (GMT+07:00) Bangkok, Hanoi, Jakarta
                  </option>
                  <option value="Asia/Krasnoyarsk">
                    (GMT+07:00) Krasnoyarsk
                  </option>
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
                  <option value="Australia/Adelaide">
                    (GMT+09:30) Adelaide
                  </option>
                  <option value="Australia/Darwin">(GMT+09:30) Darwin</option>
                  <option value="Australia/Brisbane">
                    (GMT+10:00) Brisbane
                  </option>
                  <option value="Australia/Canberra">
                    (GMT+10:00) Canberra, Melbourne, Sydney
                  </option>
                  <option value="Australia/Hobart">(GMT+10:00) Hobart</option>
                  <option value="Pacific/Guam">
                    (GMT+10:00) Guam, Port Moresby
                  </option>
                  <option value="Asia/Vladivostok">
                    (GMT+10:00) Vladivostok
                  </option>
                  <option value="Asia/Magadan">
                    (GMT+11:00) Magadan, Solomon Is., New Caledonia
                  </option>
                  <option value="Pacific/Auckland">
                    (GMT+12:00) Auckland, Wellington
                  </option>
                  <option value="Pacific/Fiji">
                    (GMT+12:00) Fiji, Kamchatka, Marshall Is.
                  </option>
                  <option value="Pacific/Tongatapu">
                    (GMT+13:00) Nuku'alofa
                  </option>
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <label className="font-text-Label-Configuracion">
                Tipo de Moneda
              </label>
              <FormControl className="form-control w-100">
                <Select
                  className="css-select-2 font-HelveticaNeueL"
                  style={{ fontSize: "14px" }}
                  name="type_currency"
                  // value={form.type_currency}
                  // onChange={(e) => onChangeTypeCurrency(e)}
                >
                  {/* <option disabled selected>US</option> */}
                  <option value={1}>$ US</option>
                </Select>
              </FormControl>
            </div>
            <ButtonLogin type="submit" className="mt-2">
              Crear Usuario
            </ButtonLogin>
            <div className="row mt-2">
              <div className="col-12 text-center">
                <p className="text-muted">
                  <Link
                    to="/login"
                    className="ml-1"
                    style={{ textDecoration: "none" }}
                  >
                    <b className="text-muted">Tengo una cuenta</b>
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </FlexColumnLogin>
        <div
          className={
            localStorageTheme === "true"
              ? "col-sm-7 back-theme-login-right"
              : "col-sm-7"
          }
        >
          <ContainerRightLogin />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
