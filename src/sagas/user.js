import { takeLatest } from 'redux-saga/effects'
import { LOGIN } from '../actions/user'

function* handleLogin() {
  try {

  } catch (e) {
    console.log(e)
  }
}

export default [takeLatest(LOGIN, handleLogin)]