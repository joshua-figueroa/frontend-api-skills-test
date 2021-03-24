import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk, RootState } from "../redux/store";
import { Special } from "../types";

interface CounterState {
  data: [Special] | [];
}

const initialState: CounterState = {
  data: [],
};

export const specialsSlice = createSlice({
  name: "specials",
  initialState,
  reducers: {
    addAllSpecials: (state: { data: Special[] }, action: PayloadAction<Array<Special>>) => {
      state.data = action.payload;
    },
    addSpecial: (state: { data: Special[] }, action: PayloadAction<Special>) => {
      state.data = [...state.data, action.payload];
    },
    updateSpecial: (state: { data: Special[] }, action: PayloadAction<Special>) => {
      const data = [...state.data];
      const index = data.findIndex(special => special.uuid === action.payload.uuid);
      data[index] = action.payload;
      state.data = data;
    },
    clearSpecials: state => {
      state.data = [];
    },
  },
});

export const { clearSpecials, addAllSpecials } = specialsSlice.actions;

export const getSpecials = (): AppThunk => async (dispatch: (arg0: any) => void) => {
  const { data } = await axios.get("http://localhost:3001/specials");
  dispatch(addAllSpecials(data));
};

export const selectSpecials = (state: RootState) => state.specials.data;

export default specialsSlice.reducer;
