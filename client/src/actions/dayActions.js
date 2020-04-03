// import axios from 'axios';
//
// import {
//   GET_ALL_DAYS,
//   GET_ALL_DAYS_BY_STOP_ID,
//   GET_DAY_BY_DAY_ID,
//   DAY_LOADING,
//   CLEAR_CURRENT_DAY,
//   GET_ERRORS,
//   DELETE_DAY_BY_DAY_ID
// } from './types';
//
// // Get all days
// export const getAllDays = () => dispatch => {
//   dispatch(setDayLoading());
//   axios
//     .get('/api/day/all')
//     .then(res =>
//       dispatch({
//         type: GET_ALL_DAYS,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_DAYS,
//         payload: null
//       })
//     );
// };
//
// //Get all days by stop id
// export const getAllDaysByStopId = stop_id => dispatch => {
//   dispatch(setDayLoading());
//   axios
//     .get(`/api/day/stop/${stop_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_ALL_DAYS_BY_STOP_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_DAYS_BY_STOP_ID,
//         payload: null
//       })
//     );
// };
//
// // Get day by day id
// export const getDayByDayId = day_id => dispatch => {
//   dispatch(setDayLoading());
//   axios
//     .get(`/api/day/${day_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_DAY_BY_DAY_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_DAY_BY_DAY_ID,
//         payload: null
//       })
//     );
// };
//
// // Day loading
// export const setDayLoading = () => {
//   return {
//     type: DAY_LOADING
//   };
// };
//
// // Clear current day
// export const clearCurrentDay = () => {
//   return {
//     type: CLEAR_CURRENT_DAY
//   };
// };
//
//
// // Create Day
// export const createDay = (dayData, history) => dispatch => {
//   axios
//     .post('/api/day', dayData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
//
// // Delete day by day id
// export const deleteDayByDayId = day_id => dispatch => {
//   if (window.confirm('Are you sure?')) {
//     axios
//       .delete(`/api/day/${day_id}`)
//       .then(res =>
//         dispatch({
//           type: DELETE_DAY_BY_DAY_ID,
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
