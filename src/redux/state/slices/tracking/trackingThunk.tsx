import {
  getDataProduct,
  createProductService,
  editProductService,
  deleteProductService,
} from "../../../../pages/Tracking/services/index";
import { AppThunk } from "../../../store";
import {
  setAttribution,
  setProduct,
  setRule,
  setTag,
  starLoading,
} from "./trackingSlice";
import _ from "lodash";
import Swal from "sweetalert2";
import { deleteRuleURLService } from "../../../../pages/Tracking/services/index";
import {
  createRuleURLService,
  editRuleURLService,
} from "../../../../pages/Tracking/services/index";
import {
  createAttributionService,
  getDataRuleURL,
} from "../../../../pages/Tracking/services/index";
import {
  getDataTag,
  getDataAttribution,
} from "../../../../pages/Tracking/services/index";

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

export const obtainApiTag = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataTag();
      const currentDataTag: any = _.orderBy(result.data.data, "id", "desc");
      dispatch(setTag(currentDataTag));
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainApiAttribution = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataAttribution();
      const DataAttribution: any = _.orderBy(result.data.data, "id", "asc");
      dispatch(setAttribution(DataAttribution));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createAttribution = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await createAttributionService(data);
      console.log("resultAttribution", result);
      if (
        result.data.message === "Update rule attribution user successfully!"
      ) {
        // dispatch(obtainApiProduct());
        Swal.fire(
          "Correcto",
          "Regla de Atribución creada correctamente!!",
          "success"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const obtainApiRuleURL = (): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await getDataRuleURL();
      const currentDataRule: any = _.orderBy(result.data, "created_on", "desc");
      dispatch(setRule(currentDataRule));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createRuleURL = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await createRuleURLService(data);
      if (result.data.message === "Create rule successfully!") {
        dispatch(obtainApiRuleURL());
        Swal.fire("Correcto", "Regla Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editRuleURL = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      const result = await editRuleURLService(data);
      if (result.data.message === "Create rule successfully!") {
        dispatch(obtainApiRuleURL());
        Swal.fire("Correcto", "Regla Editada correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRuleURL = (id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading);
    try {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta seguro que quiere borrar la Regla de URL.",
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
            const resultData = await deleteRuleURLService(objId);
            if (resultData.data.message === "Delete rule successfully!") {
              dispatch(obtainApiRuleURL());
              Swal.fire(
                "Eliminado!",
                "La regla se ha eliminado correctamente.",
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
