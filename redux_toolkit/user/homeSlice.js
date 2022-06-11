import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listItems: [],
  loading: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getList: state => {
      return {...state, loading: true};
    },
    getList_SUCCESS: (state, action) => {

      return {...state, listItems: action.payload.data, loading: false};
    },
  },
});

export const {getList, getList_SUCCESS} = homeSlice.actions;
export default homeSlice.reducer;
