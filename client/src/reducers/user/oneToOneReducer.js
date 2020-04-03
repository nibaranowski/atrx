import {
  GET_ALL_ONETOONES,
  GET_ALL_ONETOONES_BY_USER_ID,
  GET_ONETOONE_BY_ONETOONE_ID,
  ONETOONE_LOADING,
  DELETE_ONETOONE_BY_ONETOONE_ID
} from '../../actions/types';

const initialState = {
    oneToOne: null,
    oneToOnes: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
      case GET_ALL_ONETOONES:
          return {
              ...state,
              oneToOnes: action.payload,
              loading: false
          }
      case GET_ALL_ONETOONES_BY_USER_ID:
          return {
              ...state,
              oneToOnes: action.payload,
              loading: false
          }
      case GET_ONETOONE_BY_ONETOONE_ID:
          return {
              ...state,
              oneToOne: action.payload,
              loading: false
          }
      case ONETOONE_LOADING:
          return {
              ...state,
              loading: true
          }
      case DELETE_ONETOONE_BY_ONETOONE_ID:
          return {
              ...state,
              oneToOne: null
          }
      default:
          return state;
    }
}
