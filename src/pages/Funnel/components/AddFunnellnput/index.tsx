import { useState } from "react";
import { InputComponent } from "../../../../components/input";
import InputRegister from "../../../../components/input/InputRegister.component";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import { TypeFunnel } from "../../models/routes";
import SelectStateBooking from "../../../Contacts/components/SelectStateBooking/index";
import { useAppSelector } from "../../../../hooks/appDispatch";

const AddFunnelInput = ({ register, errors }: any) => {
  const { dataProduct } = useAppSelector((state) => state.tracking);
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <SelectStateBooking
            label="Tipo de Funnel"
            options={TypeFunnel as any}
            name="selectFunnel"
            register={register}
            error={String(errors["selectFunnel"]?.message)}
            // currentEdit={currentEdit}
          />
        </div>
        <div className="col-sm-6">
          <SelectWithValidation
            label="Selecciona el Producto"
            options={dataProduct as any}
            name="selectProduct"
            register={register}
            error={String(errors["selectProduct"]?.message)}
            // currentEdit={currentEdit}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <InputRegister
            placeholder="Ingresa el nombre del funnel"
            label="Nombre del Funnel"
            id="0"
            type="text"
            min={3}
            name="funnelName"
            register={register}
            error={String(errors["funnelName"]?.message)}
          />
        </div>
        <div className="col-sm-6">
          <InputRegister
            placeholder="Ingresa la url del Funnel"
            label="Url del Funnel"
            id="0"
            type="text"
            min={3}
            name="funnelURL"
            register={register}
            error={String(errors["funnelURL"]?.message)}
          />
        </div>
      </div>
    </>
  );
};

export default AddFunnelInput;
