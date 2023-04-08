import {
  getDataProduct,
  createProductService,
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
      console.log("resultProduct", result);
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
      console.log("resultProduct", result);
      if (result.data.message === "Create product successfully!") {
        dispatch(obtainApiProduct());
        Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

// export const editLead = (data: any, id: number): AppThunk => {
//   return async (dispatch) => {
//     dispatch(starLoading);
//     try {
//       const today = new Date().toISOString();
//       const form = {
//         id: id,
//         create_date: today,
//         email: data.email,
//         funnel_id: data.selectFunnel,
//         name: data.fullName,
//         phone: data.telephone,
//       };
//       const result = await editLeadService(form);
//       if (result.data.message === "Create Event and device successfully!") {
//         dispatch(obtainApiContacts());
//         Swal.fire("Correcto", "Lead Editado correctamente!!", "success");
//       }
//       // setCreateLead
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const deleteLead = (id: number): AppThunk => {
//   return async (dispatch) => {
//     dispatch(starLoading);
//     try {
//       Swal.fire({
//         title: "¿Estas seguro?",
//         text: "Esta acción va a eliminar toda la información de tracking relacionado con este  lead. Tenga en cuenta que esta acción es permanente y no se podrá deshacer.",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#109cf1",
//         cancelButtonColor: "#E71D36",
//         confirmButtonText: "Sí, Borrar!",
//       }).then(async (result) => {
//         console.log("result", result);
//         console.log("resultid", id);
//         if (result.isConfirmed) {
//           try {
//             const objId = {
//               id,
//             };
//             const resultData = await deleteLeadService(objId);
//             console.log("resultData", resultData);
//             if (resultData.data.message === "Delete lead successfully!") {
//               dispatch(obtainApiContacts());
//               Swal.fire(
//                 "Eliminado!",
//                 "El Lead se ha eliminado correctamente.",
//                 "success"
//               );
//             }
//           } catch (error) {}
//         }
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
