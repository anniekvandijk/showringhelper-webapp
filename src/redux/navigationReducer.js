import { createAction } from 'redux-actions';

const initialState = {
  menu: {
    selectedMenuItem: 0,
    headerText: 'Home'
  }
};

const actionType = {
  SET_SELECTED_MENU_ITEM: 'SET_SELECTED_MENU_ITEM'
};

const setSelectedMenuItem = createAction(actionType.SET_SELECTED_MENU_ITEM,
  (selectedMenuItem, headerText) => ({ selectedMenuItem, headerText }));


const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_SELECTED_MENU_ITEM:
    {
      const selectedMenuItem = action.payload.selectedMenuItem;
      const headerText = action.payload.headerText;
      return { ...state, menu: { selectedMenuItem, headerText } };
    }
    default:
      return state;
  }
};

export { setSelectedMenuItem, navigationReducer, actionType };
