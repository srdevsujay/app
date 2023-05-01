import { useAppSelector } from "../../../../hooks/appDispatch";
import ClipboardJS from "clipboard";
import { CopyButton } from "../../../../styled-components/button/index";
import { SeeImplementation } from "../../styled-components/Plataform/index";

const FormWebhook = ({ isStripe, titleWebhook }: any) => {
  new ClipboardJS(".btn");
  const public_id = useAppSelector((state) => state.user.user.public_id);

  const handleButton = () => {
    const btn: any = document.querySelector(".btn-copy");
    btn.style.backgroundColor = "#0acf97";
    btn.textContent = "Script copiado";
    setTimeout(() => {
      btn.style.backgroundColor = "#109CF1";
      btn.textContent = "Copiar Guión";
    }, 1000);
    console.log("btnCopy", btn);
  };

  return (
    <form>
      <div className="row mt-4">
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Webhook</label>
          <input
            id="foo"
            type="text"
            className="form-control"
            placeholder="Ingresa la clave secreta del webhook"
            name="endpoint_secret"
            value={`${titleWebhook}${public_id}`}
            // defaultValue={stripeToken ? stripeToken : stripe?.endpoint_secret}
            // onChange={ (e) => onChangeFormGoogle(e)}
          />
        </div>
      </div>
      <div className="row">
        {/* <button type="button" onClick={doSubmit} className="btn w-100 button-login">Iniciar Sesión</button> */}
        <div className="form-group col-sm-12">
          <CopyButton
            type="button"
            className="btn w-100 btn-copy"
            data-clipboard-target="#foo"
            onClick={handleButton}
          >
            Copiar Guión
          </CopyButton>
        </div>
      </div>
      <div className={isStripe ? "d-block mt-3" : "d-none"}>
        <div className="row">
          <div className="form-group col-sm-12">
            <label className="title-label-popup">Firma Secreta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingresa la clave secreta del webhook"
              name="endpoint_secret"
              // defaultValue={stripeToken ? stripeToken : stripe?.endpoint_secret}
              // onChange={ (e) => onChangeFormGoogle(e)}
            />
          </div>
        </div>
        <div className="row">
          {/* <button type="button" onClick={doSubmit} className="btn w-100 button-login">Iniciar Sesión</button> */}
          <div className="form-group col-sm-12">
            <button
              // className="btn btnGoogle mr-2 font-14 w-100"
              className="btn mr-2 font-14 w-100"
              // onClick={(e) => submitStripe(e) }
              style={{
                color: "#fff",
                backgroundColor: "#109CF1",
                boxShadow: "0px 4px 10px rgb(16 156 241 / 24%)",
                borderRadius: "5px",
                fontSize: "11px",
              }}
            >
              Acceder a Stripe
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 text-center">
          {/* <a onClick={handleGoToHelp} className="seeImplementation">
            ver implementación
          </a> */}
          <SeeImplementation>ver implementación</SeeImplementation>
        </div>
      </div>
    </form>
  );
};

export default FormWebhook;
