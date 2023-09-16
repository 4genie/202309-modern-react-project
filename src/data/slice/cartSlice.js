import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      if (state[payload.id]) {
        state[payload.id] += 1;
      } else {
        state[payload.id] = 1;
      }
    },
    remove: (state, { payload }) => {
      if (state[payload.id]) {
        state[payload.id] -= 1;
      }
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
