import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import recipes from "../reducers/recipes";
import specials from "../reducers/specials";

export const store = configureStore({
  reducer: {
    recipes,
    specials,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
