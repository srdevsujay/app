import { useEffect, useRef, useState } from "react";
import camera from "../../../../assets/images/Camera.svg";
import borrar from "../../../../assets/images/Delete.svg";
import subirFoto from "../../../../assets/images/subirFoto.svg";
import { useAppSelector, useAppDispatch } from "../../../../hooks/appDispatch";
import Modal from "../../../../components/modal/Modal.component";
import FormProfileEdit from "./FormProfileEdit";
import { getCurrentUser } from "../../../../utilities/localstorage.utility";
import {
  addFile,
  removeFile,
} from "../../../../redux/state/slices/login/loginThunk";
import {
  ButtonsProfile,
  ButtonDelete,
} from "../../../../styled-components/button/index";
import {
  Title,
  TitleHelvetica,
} from "../../../../styled-components/Title/index";

const ProfileTab = () => {
  const dispatch = useAppDispatch();
  const perfil = useAppSelector((state) => state.user.user);
  const { userEdit, profilePicture, pictureTime, deleteProfilePicture } =
    useAppSelector((state) => state.user);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [picturePerfil, setPicturePerfil] = useState<any>();
  const [preview, setPreview] = useState();

  console.log("userEdit", userEdit);
  console.log("picturePerfil", picturePerfil);
  const toggleModal = () => setModalOpen(!isModalOpen);

  // useEffect(() => {
  //   if (!isModalOpen) {
  //     setCurrentEdit(null as any);
  //   }
  // }, [isModalOpen]);

  const openModal = () => {
    if (!isModalOpen) {
      setModalOpen(true);
    }
  };

  useEffect(() => {
    const user = JSON.parse(getCurrentUser());
    setPicturePerfil(user);
  }, [deleteProfilePicture, perfil]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedFile);
    console.log("objectUrl", objectUrl);
    setPreview(objectUrl);
    localStorage.setItem("profilePicture", objectUrl);

    // free memory when ever this component is unmounted
    dispatch(addFile(selectedFile, perfil.id));
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const deleteFile = (e: any) => {
    e.preventDefault();
    dispatch(removeFile(perfil.id));
  };

  const onSelectFile = (e: any) => {
    console.log("eeeeee", e.target.files[0]);
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      // setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };

  const hiddenFileInput = useRef<any>(null);
  const capturingFile = (e: any) => {
    e.preventDefault();
    hiddenFileInput.current.click();
    // document.querySelector(".fileInput").click();
  };

  return (
    <div className="row mt-3">
      <section className="col-sm-6">
        <div className="row">
          <div className="form-group col-sm-6">
            <Title>Nombre</Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {userEdit?.length !== 0 ? userEdit?.name : perfil.name}
                </TitleHelvetica>
              </>
            )}
          </div>
          <div className="form-group col-sm-6">
            <Title className="font-text-title-Configuracion">Apellido</Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {userEdit?.length !== 0
                    ? userEdit.last_name
                    : perfil.last_name}
                </TitleHelvetica>
              </>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <Title className="font-text-title-Configuracion">Correo</Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {userEdit?.length !== 0 ? userEdit.email : perfil.email}
                </TitleHelvetica>
              </>
            )}
          </div>
          <div className="form-group col-sm-6">
            <Title className="font-text-title-Configuracion">
              Tipo de usuario
            </Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {perfil.user_type === 1 ? "Administrador" : "Usuario"}
                </TitleHelvetica>
              </>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-6">
            <Title className="font-text-title-Configuracion">
              Zona Horaria
            </Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {userEdit?.length !== 0
                    ? userEdit.time_zone
                    : perfil.time_zone}
                </TitleHelvetica>
              </>
            )}
          </div>
          <div className="form-group col-sm-6">
            <Title className="font-text-title-Configuracion">
              Tipo de Moneda
            </Title>
            {perfil && (
              <>
                <br />
                <TitleHelvetica
                  className="font-text-Configuracion"
                  style={{ color: "#939393" }}
                >
                  {perfil.type_currency == "1" ? "$ USD" : ""}
                </TitleHelvetica>
              </>
            )}
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-4">
            <ButtonsProfile className="btn w-100" onClick={toggleModal}>
              Editar Perfil
            </ButtonsProfile>
          </div>
        </div>
      </section>
      <section className="col-sm-6">
        <div className="row">
          <div className="form-group col-sm-4 d-flex justify-content-center align-items-center">
            <div className="avatar-photo mt-2">
              {perfil.image_name ? (
                <div className="positionFile">
                  <img
                    src={`${process.env.REACT_APP_BASE_URL_S3}${
                      profilePicture
                        ? profilePicture
                        : picturePerfil?.user?.image_name
                    }?${pictureTime}`}
                    style={{
                      borderRadius: "73px",
                      height: "120px",
                      width: "120px",
                    }}
                  />{" "}
                </div>
              ) : (
                <span>
                  <img src={camera} alt="" height="25" />
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-group col-sm-4 d-flex justify-content-center align-items-center">
            <input
              type="file"
              className="fileInput d-none"
              ref={hiddenFileInput}
              onChange={onSelectFile}
            />
            <div
              className="form-group d-flex justify-content-center align-items-center"
              style={{ width: "85%" }}
            >
              <ButtonsProfile
                className="btn btn-add-photo w-100"
                onClick={capturingFile}
              >
                <img src={subirFoto} alt="" height="15" className="mr-1" />
                <span>Subir Foto</span>
              </ButtonsProfile>
            </div>
          </div>

          <div className="form-group col-sm-5"></div>
          <div className="form-group col-sm-4 d-flex justify-content-center align-items-center">
            <ButtonDelete className="btn btn-delete-photo" onClick={deleteFile}>
              <img src={borrar} alt="" height="15" className="mb-1 mr-1" />
              <span>Eliminar</span>
            </ButtonDelete>
          </div>
        </div>
      </section>
      <Modal
        title="Editar Usuario"
        isOpen={isModalOpen}
        onClose={toggleModal}
        width="450px"
        padding="10px 32px"
        bottom="14px"
        height="480px"
        btnClose={1}
      >
        <FormProfileEdit
          onClose={toggleModal}
          // currentEdit={currentEdit}
          // setCurrentEdit={setCurrentEdit}
          perfil={perfil}
        />
      </Modal>
    </div>
  );
};

export default ProfileTab;
