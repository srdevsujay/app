import {
  getDataProduct,
  createProductService,
  editProductService,
  deleteProductService,
} from "../../../../pages/Tracking/services/index";
import { AppThunk } from "../../../store";
import { setProduct, starLoading } from "./trackingSlice";
import _ from "lodash";
import Swal from "sweetalert2";

export const obtainApiProduct = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataProduct();
      const currentDataProduct: any = _.orderBy(result.data, "id", "desc");
      dispatch(setProduct(currentDataProduct));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await createProductService(data);
      if (result.data.message === "Create product successfully!") {
        dispatch(obtainApiProduct());
        Swal.fire("Correcto", "Producto Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editProduct = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await editProductService(data);
      if (result.data.message === "Edit product successfully!") {
        dispatch(obtainApiProduct());
        Swal.fire("Correcto", "Producto Editado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProducto = (id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta seguro que quiere borrar el Producto.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#109cf1",
        cancelButtonColor: "#E71D36",
        confirmButtonText: "Sí, Borrar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const objId = {
              id,
            };
            const resultData = await deleteProductService(objId);
            if (resultData.data.message === "Delete product successfully!") {
              dispatch(obtainApiProduct());
              Swal.fire(
                "Eliminado!",
                "El Producto se ha eliminado correctamente.",
                "success"
              );
            }
          } catch (error) {}
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
};
