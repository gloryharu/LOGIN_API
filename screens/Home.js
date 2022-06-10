import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../redux_toolkit/user/homeSlice";
import { API } from "../server/API";

const Home = () => {
  const user = useSelector((state) => state.user);
  const item = useSelector((state) => state.home);
  const dispatch = useDispatch();

  const getListItem = async (token) => {
    try {
      const response = await fetch("http://i-web.com.vn/api/v1/auth/post", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({}),
      });
      const json = await response.json();
      console.log("List Item: ", json?.data);
      dispatch(getList(json?.data));
    } catch (error) {
      console.log(error);
    }
  };

  

  // const didMounted = useRef(true);
  // useLayoutEffect(() => {
  //   if (didMounted.current) {
  //     didMounted.current = false;
  //     return;
  //   }
  //   getListItem(user?.userInfo?.accessToken);
  // });

  useEffect(() => {
    getListItem(user?.userInfo?.accessToken);
  }, []);

  // useEffect(() => {
  //   if (didMounted.current) {
  //     didMounted.current = false;
  //     return;
  //   }
  //   getListItem(user?.userInfo?.accessToken);
  // }, [user?.userInfo]);

  return (
    <View style={styles.container}>
      {user?.userInfo?.accessToken ? (
        <View style={{ flex: 1 }}>
          {item?.listItems?.length === 0 ? (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <FlatList
              data={item?.listItems}
              renderItem={({ item }, index) => {
                return (
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: item?.image }}
                    />
                    <Text style={{ margin: 10, fontWeight: "bold" }}>
                      {item?.id} - {item?.name.toUpperCase()} -{" "}
                      {item?.description}
                    </Text>
                  </View>
                );
              }}
            />
          )}
        </View>
      ) : (
        <View style={styles.warningTextContainer}>
          <Text style={{ fontSize: 20 }}>PLEASE LOGIN TO SEE INFO</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: { flex: 1 },
  indicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  warningTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});
