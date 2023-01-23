import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: [],
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { setFilters } = filterSlice.actions;

export const selectFiltersState = (state) => state.filterGlobalState.filters;

export default filterSlice.reducer;
