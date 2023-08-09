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
import { Bar } from "../../../Dashboard/styled-components/dashboardStyled";
import { Title } from "../../../../styled-components/Title/index";
import HelpVideo from "../../../../components/HelpVideo/HelpVideo";
import {
  createProduct,
  editProduct,
} from "../../../../redux/state/slices/tracking/trackingThunk";
import video from "../../../../assets/images/video.svg";
import videoDark from "../../../../assets/images/videoDark.svg";

const dataAttributionMajorMinor: any = [
  { id: 0, value: 0, name: "Menor igual (Dias ingresados)" },
  { id: 1, value: 1, name: "Mayor igual (Dias ingresados)" },
];

const dataAttributionOrigen: any = [
  { id: 0, value: 0, name: "Primer clic" },
  { id: 1, value: 1, name: "Ultimo clic" },
  { id: 2, value: 2, name: "Condicional" },
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
    // selectAttribute: yup.string().required(),
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

  // useEffect(() => {
  //   console.log("dataAttribution", dataAttribution);

  //   // if (!dataAttribution) return;
  //   // setSelectAttribute(dataAttribution[0].id);
  // }, [dataAttribution]);

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
    const dataUserAttributionRule: any = userattributionrule;
    const currentOperator =
      selectOrigen === "1" ? "?" : selectOrigen === "0" ? "?" : "<=";
    const currentclick =
      selectOrigen === "1" ? "ASC" : selectOrigen === "0" ? "ASC" : "DESC";
    const currentDays = data.days === "" ? days : data.days;
    const form = {
      id: dataUserAttributionRule[0].id,
      value: currentDays,
      operator: currentOperator,
      rule_attribution_rule: dataUserAttributionRule[0].rule_attribution_rule,
      click: currentclick,
    };
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
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeState = JSON.parse(themeLocalStorage);

  return (
    <FormAttributionSale>
      {/* <div className="row align-content-center flex-column"> */}
      <div className="row">
        <Title fontSize="17px" color="#123249" className="text-center">
          Atribución de venta
        </Title>
        <Bar></Bar>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <div className="row align-content-center flex-column"> */}
        <div className="row flex-column">
          <div className="col-sm-6">
            <div className="w-50 mb-3">
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
            <div
              className={
                selectOrigen === "2" ? "w-50 mb-3 d-block" : "w-50 d-none"
              }
            >
              <InputRegister
                placeholder="ingresa los días de atribución"
                label="Fuente de origen mas antiguo de"
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
            {/* <div
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
            </div> */}
            <div className="w-50 mb-3">
              <ButtonsModal className="btn btn-add" type="submit">
                {idEditLead !== 0 ? "Editar" : "Guardar"}
              </ButtonsModal>
            </div>
          </div>
          <div className="col-sm-6">
            <HelpVideo
              title={"Video Tutorial Atribución"}
              image={themeState ? video : videoDark}
              url={
                "https://www.youtube.com/watch?v=fF7c1esNhGI&feature=youtu.be"
              }
            />
          </div>
        </div>
      </form>
    </FormAttributionSale>
  );
};

export default FormAttribution;
