import { createSlice } from "@reduxjs/toolkit";

export const contactState: any = {
  isLoading: false,
  dataLead: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {
    starLoading: (state) => {
      state.isLoading = true;
    },
    setLeads: (state, action) => {
      state.dataLead = action.payload;
    },
  },
});

export const { starLoading, setLeads } = contactSlice.actions;
export default contactSlice.reducer;
