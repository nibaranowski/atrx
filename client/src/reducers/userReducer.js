import {
  GET_ALL_USERS,
  GET_ALL_USERS_BY_POSITION_ID,
  GET_ALL_USERS_BY_COMPANY_ID,
  GET_USER_BY_USER_ID,
  USER_LOADING,
  DELETE_USER_BY_USER_ID
} from '../actions/types';

const initialState = {
    user: null,
    users: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
      case GET_ALL_USERS:
          return {
              ...state,
              users: action.payload,
              loading: false
          }
      case GET_ALL_USERS_BY_POSITION_ID:
          return {
              ...state,
              users: action.payload,
              loading: false
          }
      case GET_ALL_USERS_BY_COMPANY_ID:
          return {
              ...state,
              users: action.payload,
              loading: false
          }
      case GET_USER_BY_USER_ID:
          return {
              ...state,
              user: action.payload,
              loading: false
          }
      case USER_LOADING:
          return {
              ...state,
              loading: true
          }
      case DELETE_USER_BY_USER_ID:
          return {
              ...state,
              user: null
          }
      default:
          return state;
    }
}
