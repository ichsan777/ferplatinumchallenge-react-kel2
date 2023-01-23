import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
import filterReducer from "./filterSlice";

export const store = configureStore({
  reducer: {
    carGlobalState: carReducer,
    filterGlobalState: filterReducer,
  },
});
