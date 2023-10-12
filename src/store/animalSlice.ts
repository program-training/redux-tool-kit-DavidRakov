import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimalSliceState {
  animal: string;
}

const initialState: AnimalSliceState = { animal: "" };

const animalSlice = createSlice({
  name: "animalSlice",
  initialState: initialState,
  reducers: {
    showAnimal(state: AnimalSliceState, action: PayloadAction<string>) {
      state.animal = action.payload;
      return state;
    },
  },
});

export const { showAnimal } = animalSlice.actions;

export default animalSlice.reducer;
