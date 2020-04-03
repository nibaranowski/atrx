import axios from 'axios';

import {
  GET_ALL_ONETOONES,
  GET_ALL_ONETOONES_BY_USER_ID,
  GET_ONETOONE_BY_ONETOONE_ID,
  ONETOONE_LOADING,
  CLEAR_CURRENT_ONETOONE,
  GET_ERRORS,
  DELETE_ONETOONE_BY_ONETOONE_ID
} from '../types';

// Get all oneToOnes
export const getAllOneToOnes = () => dispatch => {
  dispatch(setOneToOneLoading());
  axios
    .get('/api/one-to-one/all')
    .then(res =>
      dispatch({
        type: GET_ALL_ONETOONES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_ONETOONES,
        payload: null
      })
    );
};

//Get all oneToOnes by user id
export const getAllOneToOnesByUserId = user_id => dispatch => {
  dispatch(setOneToOneLoading());
  axios
    .get(`/api/one-to-one/one-to-one-content/${user_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_ONETOONES_BY_USER_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_ONETOONES_BY_USER_ID,
        payload: null
      })
    );
};

// Get oneToOne by oneToOne id
export const getOneToOneByOneToOneId = oneToOne_id => dispatch => {
  dispatch(setOneToOneLoading());
  axios
    .get(`/api/one-to-one/${oneToOne_id}`)
    .then(res =>
      dispatch({
        type: GET_ONETOONE_BY_ONETOONE_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ONETOONE_BY_ONETOONE_ID,
        payload: null
      })
    );
};

// OneToOne loading
export const setOneToOneLoading = () => {
  return {
    type: ONETOONE_LOADING
  };
};

// Clear current oneToOne
export const clearCurrentOneToOne = () => {
  return {
    type: CLEAR_CURRENT_ONETOONE
  };
};


// Create OneToOne
export const createOneToOne = (oneToOneData, history) => dispatch => {
  axios
    .post('/api/one-to-one', oneToOneData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete oneToOne by oneToOne id
export const deleteOneToOneByOneToOneId = oneToOne_id => dispatch => {
  if (window.confirm('Are you sure?')) {
    axios
      .delete(`/api/one-to-one/${oneToOne_id}`)
      .then(res =>
        dispatch({
          type: DELETE_ONETOONE_BY_ONETOONE_ID,
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
