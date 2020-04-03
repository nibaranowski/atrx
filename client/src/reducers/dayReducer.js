// import {
//   GET_ALL_DAYS,
//   GET_ALL_DAYS_BY_STOP_ID,
//   GET_DAY_BY_DAY_ID,
//   DAY_LOADING,
//   DELETE_DAY_BY_DAY_ID
// } from '../actions/types';
//
// const initialState = {
//     day: null,
//     days: null,
//     loading: false
// }
//
// export default function(state = initialState, action) {
//     switch(action.type) {
//       case GET_ALL_DAYS:
//           return {
//               ...state,
//               days: action.payload,
//               loading: false
//           }
//       case GET_ALL_DAYS_BY_STOP_ID:
//           return {
//               ...state,
//               days: action.payload,
//               loading: false
//           }
//       case GET_DAY_BY_DAY_ID:
//           return {
//               ...state,
//               day: action.payload,
//               loading: false
//           }
//       case DAY_LOADING:
//           return {
//               ...state,
//               loading: true
//           }
//       case DELETE_DAY_BY_DAY_ID:
//           return {
//               ...state,
//               day: null
//           }
//       default:
//           return state;
//     }
// }
