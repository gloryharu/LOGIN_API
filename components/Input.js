import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({placeholder, value, onChangeText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    paddingHorizontal: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
});
