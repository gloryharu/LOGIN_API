import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NavPage from "./navigation/NavPage";
import store from "./redux_toolkit/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavPage />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
