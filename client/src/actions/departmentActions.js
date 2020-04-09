import axios from 'axios';

import {
  GET_ALL_DEPARTMENTS,
  GET_ALL_DEPARTMENTS_BY_COMPANY_ID,
  GET_DEPARTMENT_BY_DEPARTMENT_ID,
  DEPARTMENT_LOADING,
  CLEAR_CURRENT_DEPARTMENT,
  GET_ERRORS,
  DELETE_DEPARTMENT_BY_DEPARTMENT_ID
} from './types';

// Get all departments
export const getAllDepartments = () => dispatch => {
  dispatch(setDepartmentLoading());
  axios
    .get('/api/department/all')
    .then(res =>
      dispatch({
        type: GET_ALL_DEPARTMENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_DEPARTMENTS,
        payload: null
      })
    );
};

//Get all departments by adminUser id
export const getAllDepartmentsByCompanyId = company_id => dispatch => {
  dispatch(setDepartmentLoading());
  axios
    .get(`/api/department/company/${company_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_DEPARTMENTS_BY_COMPANY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_DEPARTMENTS_BY_COMPANY_ID,
        payload: null
      })
    );
};

// Get department by department id
export const getDepartmentByDepartmentId = department_id => dispatch => {
  dispatch(setDepartmentLoading());
  axios
    .get(`/api/department/${department_id}`)
    .then(res =>
      dispatch({
        type: GET_DEPARTMENT_BY_DEPARTMENT_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_DEPARTMENT_BY_DEPARTMENT_ID,
        payload: null
      })
    );
};

// Department loading
export const setDepartmentLoading = () => {
  return {
    type: DEPARTMENT_LOADING
  };
};

// Clear current department
export const clearCurrentDepartment = () => {
  return {
    type: CLEAR_CURRENT_DEPARTMENT
  };
};


// Create Department
export const createDepartment = (departmentData, history) => dispatch => {
  console.log('departmentData',departmentData )
  axios
    .post('/api/department', departmentData)
    .then(res => history.push(`/admin-user/${departmentData.adminUserId}/company/${departmentData.companyId}/`)) // this is where we push to new page after action
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete department by department id
export const deleteDepartmentByDepartmentId = department_id => dispatch => {
  if (window.confirm('Are you sure?')) {
    axios
      .delete(`/api/department/${department_id}`)
      .then(res =>
        dispatch({
          type: DELETE_DEPARTMENT_BY_DEPARTMENT_ID,
          payload: {}
        })
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  }
};
