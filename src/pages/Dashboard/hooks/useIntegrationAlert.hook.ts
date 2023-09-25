import { useState } from "react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";


export const useIntegrationAlert = (tokenfacebook: boolean, tokengoogle: boolean) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('Las integaciones tanto de Facebook como Google estan desactivadas');

  if (tokenfacebook === false && tokengoogle === false) {
    setTitle('Las integraciones tanto de Facebook como Google estan desactivadas');
  } else if (tokenfacebook === false && tokengoogle === true) {
    setTitle('La integacion de Facebook esta desactivada');
  } else if (tokenfacebook === true && tokengoogle === false) {
    setTitle('La integacion de Google esta desactivada');
  }
  console.log('entra 2');
  const showAlert = Swal.fire({
    title: title,
    text: "Si deseas activarlas haz clic en el boton 'Ir a integraciones'",
    icon: 'warning',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ir a Integraciones',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/configuracion");
      // localStorage.setItem("CreateProduct", "3");
    }
  })

  return showAlert;

}