import React, { useState } from "react";
import { RegisterUser } from "../../models";
import { starLoading } from "../../redux/state/slices/login/authSlice";
import { registerUserService } from "./services/registerUserService";
import { useAppDispatch } from "../../hooks";
import { registerUserThunk } from "../../redux/state/slices/register";

const CreateAccount = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState<RegisterUser>({
    name: "",
    last_name: "",
    email: "",
    password: "",
    image_name: "image",
    status: 1,
    user_type: 2,
    time_zone: "",
    type_currency: 0,
  });

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

  const submitAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name && last_name && email && password) {
      const data = {
        name,
        last_name,
        email,
        password,
        image_name,
        status,
        user_type,
        time_zone,
        type_currency,
      };
      console.log("register");

      dispatch(registerUserThunk(data));
      // dispatch(starLoading());

      // const result = await registerUserService(data);
      // console.log("resultRegister", result);
    }
    // console.log('form', form);
    // // if(
    // //   name.trim() === "" ||
    // //   last_name.trim() === "" ||
    // //   email.trim() === "" ||
    // //   password === ""
    // // )
    // // {
    // //     Swal.fire('Todos los campos son obligatorios');
    // //     return;
    // // }

    // if(validatePassword !== form.password) {
    //   Swal.fire('Las contraseñas deben coinsidir');
    //   return;
    // }

    // dispatch(createAccount(form, idAccount, selectedFile));
    // changeFormRegisterSignin(0);
    // setAccount({
    //   name: "",
    //   last_name: "",
    //   email: "",
    //   password: "",
    //   user_type: 2,
    //   status: 0
    // })
    // // setType('')
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="col-sm-12 flex-column-register">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <h4 className="text-dark-50 text-center font-weight-bold title-bienvenido mt-4">
              ¡Crear cuenta!
            </h4>
          </div>
        </div>
      </div>
      <form onSubmit={submitAccount} className="w-65">
        <div className="form-group">
          <label className="title-email">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe tu nombre"
            name="name"
            value={form.name}
            // onBlur={handleBlur}
            onChange={(e) => handleChange(e)}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
          {/* {errors.name && <p style={styles}>{errors.name}</p>} */}
        </div>
        <div className="form-group">
          <label className="title-email">Apellido</label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe tu apellido"
            name="last_name"
            value={form.last_name}
            // onBlur={handleBlur}
            onChange={(e) => handleChange(e)}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
          {/* {errors.last_name && <p style={styles}>{errors.last_name}</p>} */}
        </div>
        <div className="form-group">
          <label className="title-email">Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Escribe tu Email"
            name="email"
            value={form.email}
            // onBlur={handleBlur}
            onChange={(e) => handleChange(e)}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
          {/* {errors.email && <p style={styles}>{errors.email}</p>} */}
        </div>
        <div className="form-group">
          <label className="title-email">Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            name="password"
            value={form.password}
            // onBlur={handleBlur}
            onChange={(e) => handleChange(e)}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
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
            // value={validatePassword}
            // onChange={(e) => onChangeForm(e)}
            style={{ backgroundColor: "#F7F7F8", color: "#030229" }}
          />
        </div>
        <div className="App">
          {/* <input type="file" className='fileInput d-none' onChange={onSelectFile}/> */}
          <div className="form-group d-flex justify-content-center align-items-center">
            <button
              className="btn btn-add-photo w-100"
              // onClick={capturingFile}
            >
              {/* <img src={ subirFoto } alt="" height="15" class="mr-1"/> */}
              <span>Subir nueva</span>
            </button>
          </div>
          {/* {selectedFile &&  <div className='positionFile'><img src={preview} height="100" style={{borderRadius: "50px"}}/> </div>} */}
        </div>
        <button type="submit" className="button-login mt-2 h">
          Crear Usuario
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
