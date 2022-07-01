import { customReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    custom: customReducer,
  },
});

export default store;
