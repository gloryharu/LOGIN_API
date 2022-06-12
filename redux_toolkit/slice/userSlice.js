import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  account: {},
  userInfo: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      return {...state, account: action.payload};
    },
    login_res: (state, action) => {
      return {...state, userInfo: action.payload.data};
    },
    logout: () => {
      return initialState;
    },
  },
});

export const {login, logout} = userSlice.actions;
export default userSlice.reducer;
