import Swal from "sweetalert2";

export const ProductAlert = (navigate: any, word: string) => {
  Swal.fire({
    title: `Para crear ${word} debes crear un producto. Por favor ir a crear un producto para continuar.`,
    confirmButtonText: "Ir a producto",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      navigate("/tracking");
      // addFunnels();
      localStorage.setItem("CreateProduct", "3");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};
