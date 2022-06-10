import {call, put, takeEvery} from 'redux-saga/effects';
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
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

function* saga() {
  yield takeEvery('user/login', loginSaga);
}

export default saga;
