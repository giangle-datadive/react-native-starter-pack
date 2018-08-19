import { createSelector } from 'reselect'

export const getUser = state => state.user

export const accessTokenSelector = createSelector(getUser, user => user.access_token)