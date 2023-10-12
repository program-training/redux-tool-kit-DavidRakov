import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./animalSlice";
export const store = configureStore({
  reducer: {
    header: animalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
