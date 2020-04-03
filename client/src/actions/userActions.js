import axios from 'axios';

import {
  GET_ALL_USERS,
  GET_ALL_USERS_BY_POSITION_ID,
  GET_ALL_USERS_BY_COMPANY_ID,
  GET_USER_BY_USER_ID,
  USER_LOADING,
  CLEAR_CURRENT_USER,
  GET_ERRORS,
  DELETE_USER_BY_USER_ID
} from './types';

// Get all users
export const getAllUsers = () => dispatch => {
  dispatch(setUserLoading());
  axios
    .get('/api/user/all')
    .then(res =>
      dispatch({
        type: GET_ALL_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_USERS,
        payload: null
      })
    );
};

//Get all users by position id
export const getAllUsersByPositionId = position_id => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`/api/position/position/${position_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_USERS_BY_POSITION_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_USERS_BY_POSITION_ID,
        payload: null
      })
    );
};

//Get all users by company id
export const getAllUsersByCompanyId = company_id => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`/api/company/company-content/${company_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_USERS_BY_COMPANY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_USERS_BY_COMPANY_ID,
        payload: null
      })
    );
};

// Get user by user id
export const getUserByUserId = user_id => dispatch => {
  dispatch(setUserLoading());
  axios
    .get(`/api/user/${user_id}`)
    .then(res =>
      dispatch({
        type: GET_USER_BY_USER_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_USER_BY_USER_ID,
        payload: null
      })
    );
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Clear current user
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};


// Create User
export const createUser = (userData, history) => dispatch => {
  axios
    .post('/api/user', userData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete user by user id
export const deleteUserByUserId = user_id => dispatch => {
  if (window.confirm('Are you sure?')) {
    axios
      .delete(`/api/user/${user_id}`)
      .then(res =>
        dispatch({
          type: DELETE_USER_BY_USER_ID,
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
