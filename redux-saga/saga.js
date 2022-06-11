import {call, put, takeEvery, select} from 'redux-saga/effects';
import {API} from '../server/API';

function* loginSaga(action) {
  try {
    const response = yield call(API, {
      endPoint: 'signin',
      method: 'POST',
      isLogin: true,
      param: {
        client_data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      },
    });
    yield put({type: 'user/login_res', payload: response});
  } catch (error) {
    console.log(error);
  }
}

function* getListSaga() {
  try {
    const {user} = yield select();
    const response = yield call(API, {
      endPoint: 'post',
      method: 'post',
      token: user?.userInfo?.accessToken,
      param: null,
    });
    console.log(response);
    yield put({type: 'home/getList_SUCCESS', payload: response});
  } catch (error) {
    console.log(error);
  }
}

function* saga() {
  yield takeEvery('user/login', loginSaga);
  yield takeEvery('home/getList', getListSaga);
}

export default saga;
