import axios from 'axios';

import {
  DELETE_USER_BY_USER_ID
} from './types';


// Delete user by user_id
export const deleteUserByuser_id = () => dispatch => {
  if (window.confirm('Are you sure? This cannot be undone')) {
    axios
    .delete(`/api/user/user-content/${user_id}`)
      .then(res =>
        dispatch({
          type: SET_CURRENT_USER,
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
