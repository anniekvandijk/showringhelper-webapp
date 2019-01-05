import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { navigationReducer } from './navigationReducer';
import { showsReducer } from './showsReducer';

const rootReducer = combineReducers({
  navigation: navigationReducer,
  form: formReducer,
  shows: showsReducer
});

export default rootReducer;
