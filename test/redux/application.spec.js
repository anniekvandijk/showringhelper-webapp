import { setSelectedMenuItem, navigationReducer, actionType } from '../../src/redux/navigationReducer';

describe('Menu set selected', () => {
  it('should return selected menu item', () => {
    const expectedIndex = 1;
    const expectedHeader = 'Test';
    const menu = setSelectedMenuItem(1, 'Test');
    expect(menu.payload.selectedMenuItem).toEqual(expectedIndex);
    expect(menu.payload.headerText).toEqual(expectedHeader);
  });
  it('should have an initial state', () => {
    const expectedIndex = 0;
    const expectedHeader = 'Home';
    const state = navigationReducer(undefined, actionType.SET_SELECTED_MENU_ITEM);
    expect(state.menu.selectedMenuItem).toEqual(expectedIndex);
    expect(state.menu.headerText).toEqual(expectedHeader);
  });
  it('should change state', () => {
    const expectedIndex = 2;
    const expectedHeader = 'Test';
    const state = navigationReducer({ menu: { selectedMenuItem: 2, headerText: 'Test' } }, actionType.SET_SELECTED_MENU_ITEM);
    expect(state.menu.selectedMenuItem).toEqual(expectedIndex);
    expect(state.menu.headerText).toEqual(expectedHeader);
  });
});
