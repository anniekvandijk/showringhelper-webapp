import { createAction } from 'redux-actions';
import Api from '../client/api/Api';

const initialState = {
  shows: null
};

const actionType = {
  API_CALL_STARTED: 'API_CALL_STARTED',
  READ_API_SUCCESS: 'READ_API_SUCCESS',
  API_ERROR: 'API_ERROR'
};

const apiCallStarted = createAction(actionType.API_CALL_STARTED);
const readApiSuccess = createAction(actionType.READ_API_SUCCESS);
const apiError = createAction(actionType.API_ERROR);

const readRecords = path => (dispatch) => {
  dispatch(apiCallStarted());
  Api.get(path)
    .then(shows => dispatch(readApiSuccess(shows)))
    .catch(error => dispatch(apiError(error)));
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.API_CALL_STARTED:
      return state;
    case actionType.READ_API_SUCCESS:
      return { shows: action.payload };
    case actionType.API_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export {
  showsReducer,
  readRecords
};
