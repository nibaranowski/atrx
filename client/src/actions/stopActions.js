// import axios from 'axios';
//
// import {
//   GET_ALL_STOPS,
//   GET_ALL_STOPS_BY_TRIP_ID,
//   GET_STOP_BY_STOP_ID,
//   STOP_LOADING,
//   CLEAR_CURRENT_STOP,
//   GET_ERRORS,
//   DELETE_STOP_BY_STOP_ID
// } from './types';
//
// // Get all stops
// export const getAllStops = () => dispatch => {
//   dispatch(setStopLoading());
//   axios
//     .get('/api/stop/all')
//     .then(res =>
//       dispatch({
//         type: GET_ALL_STOPS,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_STOPS,
//         payload: null
//       })
//     );
// };
//
// //Get all stops by trip id
// export const getAllStopsByTripId = trip_id => dispatch => {
//   dispatch(setStopLoading());
//   axios
//     .get(`/api/stop/trip/${trip_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_ALL_STOPS_BY_TRIP_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_STOPS_BY_TRIP_ID,
//         payload: null
//       })
//     );
// };
//
// // Get stop by stop id
// export const getStopByStopId = stop_id => dispatch => {
//   dispatch(setStopLoading());
//   axios
//     .get(`/api/stop/${stop_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_STOP_BY_STOP_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_STOP_BY_STOP_ID,
//         payload: null
//       })
//     );
// };
//
// // Stop loading
// export const setStopLoading = () => {
//   return {
//     type: STOP_LOADING
//   };
// };
//
// // Clear current stop
// export const clearCurrentStop = () => {
//   return {
//     type: CLEAR_CURRENT_STOP
//   };
// };
//
//
// // Create Stop
// export const createStop = (stopData, history) => dispatch => {
//   axios
//     .post('/api/stop', stopData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
//
// // Delete stop by stop id
// export const deleteStopByStopId = stop_id => dispatch => {
//   if (window.confirm('Are you sure?')) {
//     axios
//       .delete(`/api/stop/${stop_id}`)
//       .then(res =>
//         dispatch({
//           type: DELETE_STOP_BY_STOP_ID,
//           payload: {}
//         })
//       )
//       .catch(err =>
//         dispatch({
//           type: GET_ERRORS,
//           payload: err.response.data
//         })
//       );
//   }
// };
