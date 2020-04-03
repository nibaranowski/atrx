// import {
//   GET_ALL_EVENTS,
//   GET_ALL_EVENTS_BY_DAY_ID,
//   GET_EVENT_BY_EVENT_ID,
//   EVENT_LOADING,
//   DELETE_EVENT_BY_EVENT_ID
// } from '../actions/types';
//
// const initialState = {
//     event: null,
//     events: null,
//     loading: false
// }
//
// export default function(state = initialState, action) {
//     switch(action.type) {
//       case GET_ALL_EVENTS:
//           return {
//               ...state,
//               events: action.payload,
//               loading: false
//           }
//       case GET_ALL_EVENTS_BY_DAY_ID:
//           return {
//               ...state,
//               events: action.payload,
//               loading: false
//           }
//       case GET_EVENT_BY_EVENT_ID:
//           return {
//               ...state,
//               event: action.payload,
//               loading: false
//           }
//       case EVENT_LOADING:
//           return {
//               ...state,
//               loading: true
//           }
//       case DELETE_EVENT_BY_EVENT_ID:
//           return {
//               ...state,
//               event: null
//           }
//       default:
//           return state;
//     }
// }
