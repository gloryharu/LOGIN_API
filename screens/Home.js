import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getList} from '../redux_toolkit/slice/homeSlice';


const Home = () => {
  const user = useSelector(state => state.user);
  const item = useSelector(state => state.home);
  const dispatch = useDispatch();


  useEffect(() => {
    if (user?.userInfo?.accessToken) {
      setTimeout(() => {
        dispatch(getList());
      }, 1800);
    }
  }, [user?.userInfo]);

  return (
    <View style={styles.container}>
      {user?.userInfo.accessToken ? (
        <View style={{flex: 1}}>
          {item?.loading ? (
            <View style={styles.indicatorContainer}>
              <ActivityIndicator size="large" />
            </View>
          ) : (
            <FlatList
              data={item?.listItems}
              renderItem={({item}, index) => {
                return (
                  <View style={styles.itemContainer}>
                    <Image
                      style={styles.imageStyle}
                      source={{uri: item?.image}}
                    />
                    <Text style={{margin: 10, fontWeight: 'bold'}}>
                      {item?.id} - {item?.name.toUpperCase()} -{' '}
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
          <Text style={{fontSize: 20}}>PLEASE LOGIN TO SEE INFO</Text>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1},
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});
