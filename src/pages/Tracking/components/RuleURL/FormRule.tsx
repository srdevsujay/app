import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputRegister from "../../../../components/input/InputRegister.component";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import { ButtonsModal } from "../../../../styled-components/button/index";
import * as yup from "yup";
import { ExceptionDiv } from "../../styled-components/TableRule";
import SelectOnlyForProduct from "../../../Contacts/components/SelectProduct/index";
import clickIcon from "../../../../assets/images/click.svg";
import venta from "../../../../assets/images/venta.svg";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { BackColorsTableOrigin } from "../../../../styled-components/Table/index";
import {
  createRuleURL,
  editRuleURL,
} from "../../../../redux/state/slices/tracking/trackingThunk";

const dataTypeTag: any = [
  { id: 0, value: 0, name: "Origen" },
  { id: 1, value: 1, name: "Acción" },
  { id: 2, value: 2, name: "Venta" },
];

const FormRule = ({ onClose, currentEdit, setCurrentEdit }: any) => {
  const dispatch = useAppDispatch();
  const funnels: any = useAppSelector((state) => state.dashboard.dataTracking);
  const [idEditLead, setIdEditLead] = useState<number>(0);
  const [selectFunnel, setSelectFunnel] = useState(funnels[0]?.id);
  const [exception, setException] = useState<any>([]);
  const [selectTypeTagOnchange, setSelectTypeTagOnchange] = useState("Venta");
  const [words, setWords] = useState<any>([]);
  const schema = yup.object().shape({
    name: yup.string().required("El nombre del producto es requerido"),
    tag: yup.string().required("La Categoria es requerido"),
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
    if (currentEdit) {
      setValue("name", currentEdit.name);
      const tagEdit = currentEdit.tag.substring(1);
      setValue("tag", tagEdit);
      setIdEditLead(currentEdit.id);
      setException(JSON.parse(currentEdit.exeptions));
      setWords(JSON.parse(currentEdit.words));
      const currentTypeTag = currentEdit.tag.substring(1, 0);
      console.log("currentTypeTag", currentTypeTag);
      const tag =
        currentTypeTag === "@"
          ? "Origen"
          : currentTypeTag === "!"
          ? "Acción"
          : "Venta";
      setValue("selectTypeTag", tag);
      setSelectTypeTagOnchange(tag);
    }
  }, [currentEdit, setValue]);

  const onSubmit = (data: any) => {
    const exceptionJSON = JSON.stringify(exception);
    const wordsJSON = JSON.stringify(words);
    const form: any = {
      apply_to: apply,
      exeptions: exceptionJSON,
      name: data.name,
      tag: data.tag,
      words: wordsJSON,
    };

    if (idEditLead !== 0) {
      form.id = idEditLead;
      console.log("form", form);
      dispatch(editRuleURL(form));
      setCurrentEdit();
      setIdEditLead(0);
    } else {
      form.tag =
        data.selectTypeTag === "Origen"
          ? `@${data.tag}`
          : data.selectTypeTag === "Accion"
          ? `!${data.tag}`
          : `$${data.tag}`;
      console.log("form", form);
      dispatch(createRuleURL(form));
    }
    onClose();
  };

  const [apply, setApply] = useState("URL Anterior");
  console.log("apply", apply);
  console.log("exception", exception);

  const onChangeFormApply = (e: any) => {
    setApply(e.target.value);
  };

  const handleRemove = (elem: any) => {
    setException(exception.filter((exception: any) => exception !== elem));
  };

  const handleRemoveWord = (elem: any) => {
    setWords(words.filter((words: any) => words !== elem));
  };

  console.log("selectTypeTagOnchange", selectTypeTagOnchange);
  console.log("words.tag", words);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Aplicar a</label>
        </div>
        <div
          className="btn-group btn-group-toggle col-sm-12 active-radio"
          data-toggle="buttons"
        >
          <label
            className={`btn btn-secondary title-label-popup ${
              currentEdit?.apply_to === "URL Anterior"
                ? "active"
                : currentEdit?.length !== 0
                ? ""
                : "active"
            }`}
          >
            <input
              type="radio"
              name="apply"
              id="option1"
              // autocomplete="off"
              checked
              value="URL Anterior"
              onClick={(e) => onChangeFormApply(e)}
            />{" "}
            URL Anterior
          </label>
          <label
            className={`btn ${
              currentEdit?.apply_to === "URL Actual" ? "active" : ""
            } btn-secondary title-label-popup`}
          >
            <input
              type="radio"
              name="apply"
              id="option2"
              // autocomplete="off"
              value="URL Actual"
              onClick={(e) => onChangeFormApply(e)}
            />{" "}
            URL Actual
          </label>
          <label
            className={`btn ${
              currentEdit?.apply_to === "Ambas URL" ? "active" : ""
            } btn-secondary title-label-popup`}
          >
            <input
              type="radio"
              name="apply"
              id="option3"
              // autocomplete="off"
              value="Ambas URL"
              onClick={(e) => onChangeFormApply(e)}
            />{" "}
            Ambas URL
          </label>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Ingresa el nombre de la regla"
            label="Nombre"
            id="0"
            type="text"
            min={3}
            name="name"
            register={register}
            error={String(errors["name"]?.message)}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Excepciones</label>
          <label
            className="title-label-popup"
            style={{ fontSize: "10px", opacity: "0.5" }}
          >
            *Ingresa la(s) palabra(s) que debe contener la URL para NO cumplir
            la regla y NO añadirse la etiqueta. Luego presiona enter.
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Presiona enter para agregar una nueva excepción."
            name="exeptions"
            id="exeptions"
            // defaultValue={user.password}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const valueException = e.target.value;
                setException((prevContact: any) => [
                  ...prevContact,
                  valueException,
                ]);
                // document.querySelector("#exeptions").value = '';
              }
            }}
          />
        </div>
      </div>
      <div className="row">
        <ExceptionDiv className="form-group col-sm-12">
          {exception.map((exception: any, i: number) => {
            return (
              <div className="" key={i}>
                {exception}
                <span
                  // removeException={exception}
                  onClick={(e) => handleRemove(exception)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  x
                </span>
              </div>
            );
          })}
        </ExceptionDiv>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <label className="title-label-popup">Coincidencias</label>
          <label
            className="title-label-popup"
            style={{ fontSize: "10px", opacity: "0.5" }}
          >
            *Ingresa la(s) palabra(s) que debe contener la URL para cumplir la
            regla y añadirse la etiqueta. Luego presiona enter.
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Presiona enter para agregar una nueva coincidencia."
            name="words"
            id="words"
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                e.preventDefault();

                const valueWord = e.target.value;
                setWords((prevContact: any) => [...prevContact, valueWord]);
                // document.querySelector("#words").value = '';
              }
            }}
          />
        </div>
      </div>
      <div className="row">
        <ExceptionDiv className="form-group col-sm-12">
          {words.map((word: any, i: number) => {
            return (
              <div className="" key={i}>
                {word}
                <span
                  // removeException={word}
                  onClick={() => handleRemoveWord(word)}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                >
                  x
                </span>
              </div>
            );
          })}
        </ExceptionDiv>
      </div>
      <div className="row">
        <div className="form-group col-sm-10">
          <SelectOnlyForProduct
            label="Seleccionar Producto"
            options={dataTypeTag}
            name="selectTypeTag"
            register={register}
            error={String(errors["selectTypeTag"]?.message)}
            setSelectProductOnchange={setSelectTypeTagOnchange}
          />
        </div>
        <div className="col-sm-2 pl-2" style={{ marginTop: "34px" }}>
          <BackColorsTableOrigin
            width="max-content"
            marginBottom="5px"
            className={`${
              selectTypeTagOnchange === "Origen"
                ? "back-lila"
                : selectTypeTagOnchange === "Acción"
                ? "back-orange"
                : "back-green"
            }`}
          >
            {selectTypeTagOnchange === "Origen" ? (
              <img
                src={clickIcon}
                alt=""
                className="iconos-table-origin ml-1"
              />
            ) : selectTypeTagOnchange === "Acción" ? (
              <CheckCircleOutlinedIcon
                style={{ color: "#F08303", marginLeft: "0px" }}
              />
            ) : (
              <img src={venta} alt="" className="iconos-table-origin ml-1" />
            )}
          </BackColorsTableOrigin>
        </div>
      </div>
      <div className="row">
        <div className="form-group col-sm-12">
          <InputRegister
            placeholder="Aplicar regla a..."
            label="Etiqueta"
            id="0"
            type="text"
            min={3}
            name="tag"
            register={register}
            error={String(errors["tag"]?.message)}
          />
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
            {idEditLead !== 0 ? "Editar" : "Guardar"}
          </ButtonsModal>
        </div>
      </div>
    </form>
  );
};

export default FormRule;
