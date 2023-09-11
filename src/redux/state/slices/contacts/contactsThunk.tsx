import { AppThunk } from "../../../store";
import {
  setBooking,
  setLeads,
  setProduct,
  setSale,
  setUser,
  starLoading,
} from "./contactsSlice";
import {
  createBookingService,
  createLeadService,
  deleteLeadService,
  editLeadService,
  getDataBooking,
  getDataLeads,
  editBookingService,
  deleteBookingService,
  editSaleService,
  createTrafficSourceService,
} from "../../../../pages/Contacts/services/index";
import _ from "lodash";
import Swal from "sweetalert2";
import { signOut } from "../../../../utilities/localstorage.utility";
import {
  createSaleService,
  deleteSaleService,
  editBookingStateService,
} from "../../../../pages/Contacts/services/index";
import {
  getDataSales,
  getUserProfile,
} from "../../../../pages/Contacts/services/index";
import { logoutUser } from "../login/authSlice";

export const obtainApiContacts = (page: number, pageSize: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const form = {
        page: page,
        per_page: pageSize,
      };
      let resultGetLeads = await getDataLeads(form);
      if (
        resultGetLeads.data.message === "Token is invalid!" ||
        resultGetLeads.data.error === "Signature has expired"
      ) {
        signOut();
        dispatch(logoutUser());
      } else {
        let resultCurrentFor: any =
          resultGetLeads.data.total_results / resultGetLeads.data.per_page;
        console.log("resultCurrentFor", Math.ceil(resultCurrentFor));

        let allData: any = [];
        // for (let i = 1; i <= Math.ceil(resultCurrentFor); i++) {
        const form = {
          // page: i,
          page: resultGetLeads.data.page,
          per_page: resultGetLeads.data.total_results,
        };
        const result = await getDataLeads(form);
        console.log("result.data.data", result.data.data);

        const currentDataLead: any = _.orderBy(result.data.data, "id", "desc");
        console.log("resultContactos", result);
        allData = [...allData, ...currentDataLead];
        // };
        console.log("allData", allData);
        // const form = {
        //   page: 1,
        //   per_page: resultGetLeads.data.total_results,
        // };
        // console.log("form", form);
        // const result = await getDataLeads(form);
        // const currentDataLead: any = _.orderBy(result.data.data, "id", "desc");
        dispatch(setLeads(allData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createLead = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const today = new Date().toISOString();
      const form = {
        create_date: today,
        email: data.email,
        funnel_id: data.selectFunnel,
        name: data.fullName,
        phone: data.telephone,
      };
      const result = await createLeadService(form);
      if (result.data.message === "Create Lead successfully!") {
        dispatch(obtainApiContacts(1, 100));
        Swal.fire("Correcto", "Lead Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editLead = (data: any, id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const today = new Date().toISOString();
      const form = {
        id: id,
        create_date: today,
        email: data.email,
        funnel_id: data.selectFunnel,
        name: data.fullName,
        phone: data.telephone,
      };
      const result = await editLeadService(form);
      if (result.data.message === "Create Event and device successfully!") {
        dispatch(obtainApiContacts(1, 100));
        Swal.fire("Correcto", "Lead Editado correctamente!!", "success");
      }
      // setCreateLead
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteLead = (id: number): AppThunk => {
  return async (dispatch) => {
    // dispatch(starLoading());
    try {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta acción va a eliminar toda la información de tracking relacionado con este  lead. Tenga en cuenta que esta acción es permanente y no se podrá deshacer.",
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
            const resultData = await deleteLeadService(objId);
            if (resultData.data.message === "Delete lead successfully!") {
              dispatch(obtainApiContacts(1, 100));
              Swal.fire(
                "Eliminado!",
                "El Lead se ha eliminado correctamente.",
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

export const obtainApiBooking = (page: number, pageSize: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const form = {
        page: page,
        per_page: pageSize,
      };
      console.log("resultGetBookform", form);
      let resultGetBook = await getDataBooking(form);
      console.log("resultGetBook", resultGetBook);

      if (
        resultGetBook.data.message === "Token is invalid!" ||
        resultGetBook.data.error === "Signature has expired"
      ) {
        signOut();
        dispatch(logoutUser());
      } else {
        let resultCurrentFor: any =
          resultGetBook.data.total_results / resultGetBook.data.per_page;
        console.log("resultCurrentFor", Math.ceil(resultCurrentFor));

        let allData: any = [];
        // for (let i = 1; i <= Math.ceil(resultCurrentFor); i++) {
        const form = {
          // page: i,
          // per_page: resultGetBook.data.per_page,
          page: resultGetBook.data.page,
          per_page: resultGetBook.data.total_results,
        };
        const result = await getDataBooking(form);
        const currentDataBook: any = _.orderBy(
          result.data.data,
          ["id", "appoiment_date"],
          ["desc", "asc"]
        );
        console.log("resultContactos", result);
        allData = [...allData, ...currentDataBook];
        // }:
        console.log("allData", allData);
        dispatch(setBooking(allData));
      }
      // const currentDataLead: any = _.orderBy(
      //   resultGetBook.data,
      //   ["id", "appoiment_date"],
      //   ["desc", "asc"]
      // );
      // console.log("currentDataLead", currentDataLead);

      // const sortedDataBook = resultGetBook.data.sort(
      //   (a: any, b: any) =>
      //     new Date(b.date).getTime() - new Date(a.date).getTime()
      // );
      // dispatch(setBooking(currentDataLead));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createBooking = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await createBookingService(data);
      if (result.data.message === "Create Booking successfully!") {
        dispatch(obtainApiBooking(1, 100));
        Swal.fire("Correcto", "Booking Creado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editBooking = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await editBookingService(data);
      if (result.data.message === "Edit Booking successfully!") {
        dispatch(obtainApiBooking(1, 100));
        Swal.fire("Correcto", "Booking Editado correctamente!!", "success");
      }
      // setCreateLead
    } catch (error) {
      console.log(error);
    }
  };
};

export const editStateBooking = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await editBookingStateService(data);
      if (result.data.message === "Edit Booking successfully!") {
        dispatch(obtainApiBooking(1, 100));
        Swal.fire(
          "Correcto",
          "El estado del booking ha sido editado correctamente!!",
          "success"
        );
      }
      // setCreateLead
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteBooking = (id: number): AppThunk => {
  return async (dispatch) => {
    try {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta seguro que quiere borrar el Booking.",
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
            const resultData = await deleteBookingService(objId);
            if (resultData.data.message === "Delete Booking successfully!") {
              dispatch(starLoading());
              dispatch(obtainApiBooking(1, 100));
              Swal.fire(
                "Eliminado!",
                "El Booking se ha eliminado correctamente.",
                "success"
              );
            }
          } catch (error) {}
        }
      });
    } catch (error) {}
  };
};

export const obtainApiSale = (page: number, pageSize: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const form = {
        page: page,
        per_page: pageSize,
      };
      const resultGetSale = await getDataSales(form);
      if (
        resultGetSale.data.message === "Token is invalid!" ||
        resultGetSale.data.error === "Signature has expired"
      ) {
        signOut();
        dispatch(logoutUser());
      } else {
        const form = {
          // page: i,
          // per_page: resultGetBook.data.per_page,
          page: resultGetSale.data.page,
          per_page: resultGetSale.data.total_results,
        };
        const result = await getDataSales(form);
        const currentDataLead: any = _.orderBy(
          result.data.data,
          "date",
          "desc"
        );
        dispatch(setSale(currentDataLead));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const createSale = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await createSaleService(data);
      if (
        result.data.message === "Create Sale and device successfully!" ||
        result.data.message === "Create Sale successfully!"
      ) {
        dispatch(obtainApiSale(1, 100));
        Swal.fire("Correcto", "Venta Creada correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const editSale = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await editSaleService(data);
      if (result.data.message === "Edit Sale successfully!") {
        dispatch(obtainApiSale(1, 100));
        Swal.fire("Correcto", "Venta Editada correctamente!!", "success");
      }
      // setCreateLead
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteSale = (id: number): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      Swal.fire({
        title: "¿Estas seguro?",
        text: "Esta seguro que quiere eliminar la venta.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#109cf1",
        cancelButtonColor: "#E71D36",
        confirmButtonText: "Sí, Borrar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            const objId = {
              id_event: id,
            };
            const resultData = await deleteSaleService(objId);
            if (resultData.data.message === "Delete Sale successfully!") {
              dispatch(obtainApiSale(1, 100));
              Swal.fire(
                "Eliminado!",
                "La venta se ha eliminado correctamente.",
                "success"
              );
            }
          } catch (error) {}
        }
      });
    } catch (error) {}
  };
};

export const obtainUserProfile = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await getUserProfile(data);
      console.log("resultProfile", result);
      const currentDataLead: any = result.data.data;
      dispatch(setUser(currentDataLead));
    } catch (error) {
      console.log(error);
    }
  };
};

export const createTrafficSource = (data: any): AppThunk => {
  return async (dispatch) => {
    dispatch(starLoading());
    try {
      const result = await createTrafficSourceService(data);
      console.log("resultTraficc", result);
      if (result.data.message === "Attribution Of Sale successfully!") {
        dispatch(obtainApiSale(1, 100));
        dispatch(obtainApiContacts(1, 100));
        Swal.fire("Correcto", "Trafico Editado correctamente!!", "success");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const closeUserDetail = (): AppThunk => {
  return async (dispatch) => {
    try {
      dispatch(setUser([]));
    } catch (error) {
      console.log(error);
    }
  };
};
