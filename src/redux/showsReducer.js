import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  shows: null,
  updateShow: null
};

const actionType = {
  API_CALL_STARTED: 'API_CALL_STARTED',
  READ_API_SUCCESS: 'READ_API_SUCCESS',
  CREATE_API_SUCCESS: 'CREATE_API_SUCCESS',
  DELETE_API_SUCCESS: 'DELETE_API_SUCCESS',
  UPDATE_API_SUCCESS: 'UPDATE_API_SUCCESS',
  API_ERROR: 'API_ERROR',
  SET_UPDATE_RECORD: 'SET_UPDATE_RECORD',
  UNSET_UPDATE_RECORD: 'UNSET_UPDATE_RECORD'
};

const apiCallStarted = createAction(actionType.API_CALL_STARTED);
const readApiSuccess = createAction(actionType.READ_API_SUCCESS);
const createApiSuccess = createAction(actionType.CREATE_API_SUCCESS);
const deleteApiSuccess = createAction(actionType.DELETE_API_SUCCESS);
const updateApiSuccess = createAction(actionType.UPDATE_API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);
const setUpdateRecord = createAction(actionType.SET_UPDATE_RECORD);
const unsetUpdateRecord = createAction(actionType.UNSET_UPDATE_RECORD);

const readRecords = path => (dispatch) => {
  dispatch(apiCallStarted());
  Api.get(path)
    .then(shows => dispatch(readApiSuccess(shows)))
    .catch(error => dispatch(apiError(error)));
};

const createRecord = (path, body) => (dispatch) => {
  dispatch(apiCallStarted());
  Api.post(path, body)
    .then(show => dispatch(createApiSuccess(show)))
    .catch(error => dispatch(apiError(error)));
};

const updateRecord = (path, body) => (dispatch) => {
  dispatch(apiCallStarted());
  Api.put(path, body)
    .then(show => dispatch(updateApiSuccess(show)))
    .catch(error => dispatch(apiError(error)));
};

const deleteRecord = path => (dispatch) => {
  dispatch(apiCallStarted());
  Api.delete(path)
    .then(showId => dispatch(deleteApiSuccess(showId)))
    .catch(error => dispatch(apiError(error)));
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_UPDATE_RECORD:
      return {
        ...state,
        updateShow: state.shows.filter(shows => shows.id === action.payload)[0]
      };
    case actionType.UNSET_UPDATE_RECORD:
      return {
        ...state,
        updateShow: null
      };
    case actionType.API_CALL_STARTED:
      return state;
    case actionType.READ_API_SUCCESS:
      return { shows: action.payload };
    case actionType.CREATE_API_SUCCESS:
      // return {
      //   ...state,
      //   shows: state.shows.concat(action.payload)
      // };
      return null;
    case actionType.UPDATE_API_SUCCESS:
      // return {
      //   ...state,
      //   shows: state.shows.filter(shows => shows.id !== action.payload.id).concat(action.payload)
      // };
      return null;
    case actionType.DELETE_API_SUCCESS:
      // return {
      //   ...state,
      //   shows: state.shows.filter(shows => shows.id !== action.payload)
      // };
      return null;
    case actionType.API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export {
  showsReducer,
  readRecords,
  createRecord,
  deleteRecord,
  setUpdateRecord,
  updateRecord,
  unsetUpdateRecord
};
