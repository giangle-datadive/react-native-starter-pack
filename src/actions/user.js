export const SET_USER = 'SET_USER'
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

export const setUser = user => ({ type: SET_USER, user })
export const login = code => ({ type: LOGIN, code })
export const logout = () => ({ type: LOGOUT })