import { createAction } from 'redux-actions';

const initialState = {
  shows: null
};

const actionType = {
  READ_SUCCESS: 'READ_SUCCESS'
};

const readSuccess = createAction(actionType.READ_SUCCESS);

const createRecords = shows => (dispatch) => {
  dispatch(readSuccess(shows));
};

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.READ_SUCCESS:
      return { shows: action.payload };
    default:
      return state;
  }
};

export {
  showsReducer,
  createRecords
};
