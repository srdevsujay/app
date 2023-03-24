import { createSlice } from "@reduxjs/toolkit";

export const contactState: any = {
  isLoading: false,
  dataLead: [],
  registerLead: [],
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
  },
});

export const { starLoading, setLeads, setCreateLead } = contactSlice.actions;
export default contactSlice.reducer;
