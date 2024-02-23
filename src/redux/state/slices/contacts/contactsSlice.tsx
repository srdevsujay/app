import { createSlice } from "@reduxjs/toolkit";

export const contactState: any = {
  isLoading: false,
  dataLead: [],
  registerLead: [],
  dataBooking: [],
  dataSale: [],
  dataProduct: [],
  dataUser: [],
  totalPageLead: 0,
  totalPageBook: 0,
  totalPageSale: 0,
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setLeads: (state, action) => {
      state.isLoading = false;
      state.dataLead = action.payload.dataLead;
      state.totalPageLead = action.payload.totalResults;
    },
    setLeadsTotal: (state, action) => {
      state.totalPageLead = action.payload.totalResults;
    },
    setCreateLead: (state, action) => {
      state.isLoading = false;
      // state.registerLead = action.payload;
    },
    setEditLead: (state, action) => {
      state.isLoading = false;
      // state.registerLead = action.payload;
    },
    setBooking: (state, action) => {
      state.isLoading = false;
      state.dataBooking = action.payload.dataBooking;
      state.totalPageBook = action.payload.totalPageBook;
    },
    setBookingTotal: (state, action) => {
      state.totalPageBook = action.payload.totalPageBook;
    },
    setSale: (state, action) => {
      state.isLoading = false;
      state.dataSale = action.payload.dataSale;
      state.totalPageSale = action.payload.totalPageSale;
    },
    setProduct: (state, action) => {
      state.isLoading = false;
      state.dataProduct = action.payload;
    },
    setUser: (state, action) => {
      state.isLoading = false;
      state.dataUser = action.payload;
    },
  },
});

export const {
  starLoading,
  setLeads,
  setLeadsTotal,
  setCreateLead,
  setBookingTotal,
  setBooking,
  setSale,
  setProduct,
  setUser,
} = contactSlice.actions;
export default contactSlice.reducer;
