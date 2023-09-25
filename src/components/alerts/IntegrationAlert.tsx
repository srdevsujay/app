import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const IntegrationAlert = (title: string, navigate: any) => {
  toast.info(`${title} 'Clic para ir a integraciones'`, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 15000,
    onClick: () => {
      navigate("/configuracion");
    },
  });
  // Swal.fire({
  //   title: title,
  //   text: "Si deseas activarlas haz clic en el boton 'Ir a integraciones'",
  //   icon: "warning",
  //   showCancelButton: false,
  //   confirmButtonColor: "#3085d6",
  //   cancelButtonColor: "#d33",
  //   confirmButtonText: "Ir a Integraciones",
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     localStorage.setItem("setIntegrationTab", "2");
  //     navigate("/configuracion");
  //   }
  // });
};

export const IntegrationAlertPermissionFacebook = (title: string) => {
  toast.info(title, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 15000,
  });
};
