import axios from 'axios';

import {
  GET_ALL_EVENTS,
  GET_ALL_EVENTS_BY_USER_ID,
  GET_ALL_EVENTS_BY_DAY_ID,
  GET_EVENT_BY_EVENT_ID,
  EVENT_LOADING,
  CLEAR_CURRENT_EVENT,
  GET_ERRORS,
  DELETE_EVENT_BY_EVENT_ID
} from './types';

// Get all events
export const getAllEvents = () => dispatch => {
  dispatch(setEventLoading());
  axios
    .get('/api/event/all')
    .then(res =>
      dispatch({
        type: GET_ALL_EVENTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_EVENTS,
        payload: null
      })
    );
};

//Get all events by user_id
export const getAllEventsByuser_id = user_id => dispatch => {
  dispatch(setEventLoading());
  axios
    .get(`/api/event/user/${user_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_EVENTS_BY_USER_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_EVENTS_BY_USER_ID,
        payload: null
      })
    );
};

//Get all events by day id
export const getAllEventsByDayId = day_id => dispatch => {
  dispatch(setEventLoading());
  axios
    .get(`/api/event/day/${day_id}`)
    .then(res =>
      dispatch({
        type: GET_ALL_EVENTS_BY_DAY_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ALL_EVENTS_BY_DAY_ID,
        payload: null
      })
    );
};

// Get event by event id
export const getEventByEventId = event_id => dispatch => {
  dispatch(setEventLoading());
  axios
    .get(`/api/event/event/${event_id}`)
    .then(res =>
      dispatch({
        type: GET_EVENT_BY_EVENT_ID,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_EVENT_BY_EVENT_ID,
        payload: null
      })
    );
};

// Event loading
export const setEventLoading = () => {
  return {
    type: EVENT_LOADING
  };
};

// Clear current event
export const clearCurrentEvent = () => {
  return {
    type: CLEAR_CURRENT_EVENT
  };
};


// Create Event
export const createEvent = (eventData, history) => dispatch => {
  axios
    .post('/api/event', eventData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete event by event id
export const deleteEventByEventId = event_id => dispatch => {
  if (window.confirm('Are you sure?')) {
    axios
      .delete(`/api/event/${event_id}`)
      .then(res =>
        dispatch({
          type: DELETE_EVENT_BY_EVENT_ID,
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
