import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import InputRegister from "../../../../components/input/InputRegister.component";
import { yupResolver } from "@hookform/resolvers/yup";
import SelectComponent from "../../../../components/Select/index";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import SelectWithValidation from "../../../../components/Select/SelectWithValidation.component";
import { ButtonsModal } from "../../../../styled-components/button/index";
// import { schema } from "./yupSchemaLead";
import * as yup from "yup";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  createAttribution,
  obtainApiAttribution,
} from "../../../../redux/state/slices/tracking/trackingThunk";
import { FormAttributionSale } from "../../../../styled-components/Form/index";
import {
  Title,
  Bar,
} from "../../../Dashboard/styled-components/dashboardStyled";
import {
  createProduct,
  editProduct,
} from "../../../../redux/state/slices/tracking/trackingThunk";

const dataAttributionMajorMinor: any = [
  { id: 0, value: 0, name: "Menor igual (Dias ingresados)" },
  { id: 1, value: 1, name: "Mayor igual (Dias ingresados)" },
];

const dataAttributionOrigen: any = [
  { id: 0, value: 0, name: "Primer clic" },
  { id: 1, value: 1, name: "Ultimo clic" },
];

const FormAttribution = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const { dataAttribution } = useAppSelector((state) => state.tracking);
  const { userattributionrule } = useAppSelector((state) => state.user.user);
  const [idEditLead, setIdEditLead] = useState<number>(0);
  const [selectAttribute, setSelectAttribute] = useState();
  const [selectMajorMinor, setSelectMajorMinor] = useState(
    dataAttributionMajorMinor
  );
  const [selectOrigen, setSelectOrigen] = useState(dataAttributionOrigen);
  const [operator, setOperator] = useState<any>(0);
  const [days, setDays] = useState<any>(7);
  const [click, setClick] = useState<any>(0);
  const schema = yup.object().shape({
    selectAttribute: yup.string().required(),
    // days: yup.number().notRequired(),
    // name: yup.string().required("El nombre del producto es requerido"),
    // category: yup.string().required("La Categoria es requerido"),
  });

  const initForm = () => {
    if (currentEdit) {
      const { selectAttribute: attribute } = currentEdit;
      setSelectAttribute(attribute);
    }
  };

  useEffect(() => {
    console.log("dataAttribution", dataAttribution);

    // if (!dataAttribution) return;
    // setSelectAttribute(dataAttribution[0].id);
  }, [dataAttribution]);

  useEffect(() => {
    dispatch(obtainApiAttribution());
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (currentEdit) {
      setValue("selectAttribute", currentEdit.selectAttribute);
      setValue("days", currentEdit.days);
      // setValue("name", currentEdit.name);
      // setValue("category", currentEdit.category);
      setIdEditLead(currentEdit.id);
    }
  }, [currentEdit, setValue]);

  useEffect(() => {
    setValue("selectAttribute", selectAttribute);
  }, [selectAttribute]);

  const onSubmit = (data: any) => {
    console.log("dataOperator", data);
    console.log("clicks", click);
    console.log("operator", operator);
    console.log("days", days);
    console.log("userattributionrule", userattributionrule);
    const dataUserAttributionRule: any = userattributionrule;
    const currentOperator =
      data.selectAttribute === "1"
        ? "<="
        : data.selectAttribute === "2"
        ? ">="
        : selectMajorMinor === "1"
        ? ">="
        : "<=";
    const currentclick = selectOrigen === "1" ? "DESC" : "ASC";
    const currentDays = data.days === "" ? days : data.days;
    const form = {
      id: dataUserAttributionRule[0].id,
      value: currentDays,
      operator: currentOperator,
      rule_attribution_rule: dataUserAttributionRule[0].rule_attribution_rule,
      click: currentclick,
    };
    console.log("form", form);

    // data.tag = `$${data.name}`;
    // console.log(data);
    // if (idEditLead !== 0) {
    //   data.id = idEditLead;
    //   dispatch(editProduct(data));
    //   setCurrentEdit();
    //   setIdEditLead(0);
    // } else {
    dispatch(createAttribution(form));
    // }
    // onClose();
  };

  // const handleChangeOperator = () => {
  //   setOperator(!operator)
  // };
  console.log("selectMajorMinor", typeof selectMajorMinor);

  return (
    <FormAttributionSale>
      <Title fontSize="17px" color="#123249">
        Atribución de venta
      </Title>
      <Bar></Bar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div
            className={
              selectAttribute === "3"
                ? "form-group col-sm-6"
                : "form-group col-sm-12"
            }
          >
            <SelectWithValidation
              label="Seleccionar Atributo"
              options={dataAttribution}
              name="selectAttribute"
              register={register}
              error={String(errors["selectAttribute"]?.message)}
              disabled={currentEdit ? true : false}
              setSelectAttribute={setSelectAttribute}
            />
          </div>
          <div
            className={
              selectAttribute === "3"
                ? "form-group col-sm-6 d-block"
                : "form-group col-sm-6 d-none"
            }
          >
            <InputRegister
              placeholder="ingresa los días de atribución"
              label="Días de atribución"
              id="0"
              type="number"
              min={1}
              max={30}
              name="days"
              register={register}
              error={String(errors["days"]?.message)}
              onChange={(newValue: any) => {
                setDays(newValue.target.value);
              }}
            />
          </div>
          <div
            className={
              selectAttribute === "3"
                ? "form-group col-sm-6 d-block"
                : "form-group col-sm-6 d-none"
            }
          >
            <SelectWithValidation
              label="Atribución aplicada a"
              options={dataAttributionMajorMinor}
              name="setMajorMinor"
              register={register}
              error={String(errors["setMajorMinor"]?.message)}
              disabled={currentEdit ? true : false}
              setSelectAttribute={setSelectMajorMinor}
            />
          </div>
          <div
            className={
              selectAttribute === "3"
                ? "form-group col-sm-6"
                : "form-group col-sm-12"
            }
          >
            <SelectWithValidation
              label="Origen"
              options={dataAttributionOrigen}
              name="selectOrigen"
              register={register}
              error={String(errors["selectOrigen"]?.message)}
              disabled={currentEdit ? true : false}
              setSelectAttribute={setSelectOrigen}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6 offset-6">
            <ButtonsModal className="btn btn-add" type="submit">
              {idEditLead !== 0 ? "Editar" : "Guardar"}
            </ButtonsModal>
          </div>
        </div>
      </form>
    </FormAttributionSale>
  );
};

export default FormAttribution;
