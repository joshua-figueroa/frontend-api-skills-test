import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../redux/store";
import { Recipe } from "../types";

interface CounterState {
  data: Recipe[];
}

const initialState: CounterState = {
  data: [],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addAllRecipes: (state: { data: Recipe[] }, action: PayloadAction<Recipe[]>) => {
      state.data = action.payload;
    },
    addRecipe: (state: { data: Recipe[] }, action: PayloadAction<Recipe>) => {
      state.data = [...state.data, action.payload];
    },
    updateRecipe: (state: { data: Recipe[] }, action: PayloadAction<Recipe>) => {
      const data = [...state.data];
      const index = data.findIndex(recipe => recipe.uuid === action.payload.uuid);
      data[index] = action.payload;
      state.data = data;
    },
    clearRecipes: state => {
      state.data = [];
    },
  },
});

export const { clearRecipes, addAllRecipes } = recipesSlice.actions;

export const getRecipes = (): AppThunk => async (dispatch: (arg0: any) => void) => {
  const { data } = await axios.get("http://localhost:3001/recipes");
  dispatch(addAllRecipes(data));
};

export const selectRecipes = (state: RootState) => state.recipes.data;

export default recipesSlice.reducer;
