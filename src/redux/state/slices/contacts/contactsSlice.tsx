import { createSlice } from "@reduxjs/toolkit";

export const contactState: any = {
  isLoading: false,
  dataLead: [],
  registerLead: [],
  dataBooking: [],
  dataSale: [],
  dataProduct: [],
  dataUser: [],
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
      state.dataLead = action.payload;
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
      state.dataBooking = action.payload;
    },
    setSale: (state, action) => {
      state.isLoading = false;
      state.dataSale = action.payload;
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
  setCreateLead,
  setBooking,
  setSale,
  setProduct,
  setUser,
} = contactSlice.actions;
export default contactSlice.reducer;
