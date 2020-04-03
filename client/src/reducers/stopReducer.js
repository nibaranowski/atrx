// import {
//   GET_ALL_STOPS,
//   GET_ALL_STOPS_BY_TRIP_ID,
//   GET_STOP_BY_STOP_ID,
//   STOP_LOADING,
//   DELETE_STOP_BY_STOP_ID
// } from '../actions/types';
//
// const initialState = {
//     stop: null,
//     stops: null,
//     loading: false
// }
//
// export default function(state = initialState, action) {
//     switch(action.type) {
//       case GET_ALL_STOPS:
//           return {
//               ...state,
//               stops: action.payload,
//               loading: false
//           }
//       case GET_ALL_STOPS_BY_TRIP_ID:
//           return {
//               ...state,
//               stops: action.payload,
//               loading: false
//           }
//       case GET_STOP_BY_STOP_ID:
//           return {
//               ...state,
//               stop: action.payload,
//               loading: false
//           }
//       case STOP_LOADING:
//           return {
//               ...state,
//               loading: true
//           }
//       case DELETE_STOP_BY_STOP_ID:
//           return {
//               ...state,
//               stop: null
//           }
//       default:
//           return state;
//     }
// }
