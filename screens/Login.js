import {StyleSheet, View, Button, Text} from 'react-native';
import React, {useState} from 'react';
import Input from '../components/Input';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from '../redux_toolkit/user/userSlice';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
    setUsername('');
    setPassword('');
  };

  // const userLogin = async () => {
  //   try {
  //     const response = await fetch("http://i-web.com.vn/api/v1/auth/signin", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         client_data: {
  //           username: username,
  //           password: password,
  //         },
  //       }),
  //     });
  //     const json = await response.json();
  //     console.log("LOGIN: ", json?.data);
  //     dispatch(login(json?.data))
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.container}>
      {!user?.userInfo?.isLogin ? (
        /* Login View */
        <View>
          <Input
            placeholder="Username"
            value={username}
            onChangeText={newText => setUsername(newText)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChangeText={newPassword => setPassword(newPassword)}
          />
          <View style={styles.btnContainer}>
            <Button
              title="Login"
              onPress={() =>
                dispatch(
                  login({username: username, password: password}),
                )
              }
            />
          </View>
        </View>
      ) : (
        /* Logout View */
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Login Successful
          </Text>
          <Text style={{fontSize: 15, marginVertical: 10}}>
            Your username : {user?.userInfo?.username}
          </Text>
          <Button title="Logout" onPress={() => userLogout()} />
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btnContainer: {
    marginHorizontal: 15,
  },
});
