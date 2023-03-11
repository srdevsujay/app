import { useState } from "react";
import { InputComponent } from "../../../../components/input";

const AddFunnelInput = () => {
  const [valueInput, setValueInput] = useState("");
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Escribe tu Edad!!"
            label="Tipo del Funnel"
            id="0"
            type="text"
            min={3}
            value={valueInput}
            onChange={setValueInput}
          />
        </div>
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Escribe tu Edad!!"
            label="Selecciona el Producto"
            id="0"
            type="text"
            min={3}
            value={valueInput}
            onChange={setValueInput}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Escribe tu Edad!!"
            label="Url del Funnel"
            id="1"
            type="text"
            min={3}
            value={valueInput}
            onChange={setValueInput}
          />
        </div>
        <div className="col-sm-6">
          <InputComponent
            max={5}
            placeholder="Escribe tu Edad!!"
            label="Nombre del Funnel"
            id="2"
            type="text"
            min={3}
            value={valueInput}
            onChange={setValueInput}
          />
        </div>
      </div>
    </>
  );
};

export default AddFunnelInput;
