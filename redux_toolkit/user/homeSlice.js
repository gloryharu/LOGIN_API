import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getList: (state, action) => {
      return { ...state, listItems: action.payload };
    },
  },
});

export const { getList } = homeSlice.actions;
export default homeSlice.reducer;
