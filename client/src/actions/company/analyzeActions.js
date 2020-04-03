// import axios from 'axios';
//
// import {
//   GET_ALL_COMPANYS,
//   GET_ALL_COMPANYS_BY_ADMINUSER_ID,
//   GET_COMPANY_BY_COMPANY_ID,
//   COMPANY_LOADING,
//   CLEAR_CURRENT_COMPANY,
//   GET_ERRORS,
//   DELETE_COMPANY_BY_COMPANY_ID
// } from './types';
//
// // Get all companys
// export const getAllCompanys = () => dispatch => {
//   dispatch(setCompanyLoading());
//   axios
//     .get('/api/company/all')
//     .then(res =>
//       dispatch({
//         type: GET_ALL_COMPANYS,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_COMPANYS,
//         payload: null
//       })
//     );
// };
//
// //Get all companys by adminUser id
// export const getAllCompanysByAdminUserId = adminUser_id => dispatch => {
//   dispatch(setCompanyLoading());
//   axios
//     .get(`/api/company/user/${adminUser_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_ALL_COMPANYS_BY_ADMINUSER_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ALL_COMPANYS_BY_ADMINUSER_ID,
//         payload: null
//       })
//     );
// };
//
// // Get company by company id
// export const getCompanyByCompanyId = company_id => dispatch => {
//   dispatch(setCompanyLoading());
//   axios
//     .get(`/api/company/${company_id}`)
//     .then(res =>
//       dispatch({
//         type: GET_COMPANY_BY_COMPANY_ID,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_COMPANY_BY_COMPANY_ID,
//         payload: null
//       })
//     );
// };
//
// // Company loading
// export const setCompanyLoading = () => {
//   return {
//     type: COMPANY_LOADING
//   };
// };
//
// // Clear current company
// export const clearCurrentCompany = () => {
//   return {
//     type: CLEAR_CURRENT_COMPANY
//   };
// };
//
//
// // Create Company
// export const createCompany = (companyData, history) => dispatch => {
//   axios
//     .post('/api/company', companyData)
//     .then(res => history.push('/dashboard'))
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };
//
// // Delete company by company id
// export const deleteCompanyByCompanyId = company_id => dispatch => {
//   if (window.confirm('Are you sure?')) {
//     axios
//       .delete(`/api/company/${company_id}`)
//       .then(res =>
//         dispatch({
//           type: DELETE_COMPANY_BY_COMPANY_ID,
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
