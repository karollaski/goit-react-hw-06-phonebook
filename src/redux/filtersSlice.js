import { createSlice } from '@reduxjs/toolkit';

const filtrInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filtrInitialState,
  reducers: {
    changeFilter(_, action) {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
