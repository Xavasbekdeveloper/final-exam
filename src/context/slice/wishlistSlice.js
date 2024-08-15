import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    data: JSON.parse(localStorage.getItem("like")) || [],
  },
  reducers: {
    addWishlist: (state, { payload }) => {
      let index = state.data.findIndex((el) => el.id === payload.id);
      if (index < 0) {
        state.data = [...state.data, payload];
      } else {
        state.data = state.data.filter((el) => el.id !== payload.id);
      }
      localStorage.setItem("like", JSON.stringify(state.data));
    },
  },
});

export const { addWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
