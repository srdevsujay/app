import { useState } from "react";
import Swal from "sweetalert2";

export const IntegrationAlert = (title: string, navigate: any) => {
  Swal.fire({
    title: title,
    text: "Si deseas activarlas haz clic en el boton 'Ir a integraciones'",
    icon: "warning",
    showCancelButton: false,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ir a Integraciones",
  }).then((result) => {
    if (result.isConfirmed) {
      localStorage.setItem("setIntegrationTab", "2");
      navigate("/configuracion");
    }
  });
};
