import {
  GET_ALL_COMPANYS,
  GET_ALL_COMPANYS_BY_ADMINUSER_ID,
  GET_COMPANY_BY_COMPANY_ID,
  COMPANY_LOADING,
  DELETE_COMPANY_BY_COMPANY_ID
} from '../actions/types';

const initialState = {
    company: null,
    companys: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
      case GET_ALL_COMPANYS:
          return {
              ...state,
              companys: action.payload,
              loading: false
          }
      case GET_ALL_COMPANYS_BY_ADMINUSER_ID:
          return {
              ...state,
              companys: action.payload,
              loading: false
          }
      case GET_COMPANY_BY_COMPANY_ID:
          return {
              ...state,
              company: action.payload,
              loading: false
          }
      case COMPANY_LOADING:
          return {
              ...state,
              loading: true
          }
      case DELETE_COMPANY_BY_COMPANY_ID:
          return {
              ...state,
              company: null
          }
      default:
          return state;
    }
}
