import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import homeReducer from "./user/homeSlice";
import createSagaMiddleware from "@redux-saga/core";
import saga from "../redux-saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    home: homeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;
