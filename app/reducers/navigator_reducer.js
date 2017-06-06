import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('ImageDetailScreen');
const initialNavState = AppNavigator.router.getStateForAction(
  tempNavState
);

export const nav = (state = initialNavState, action) => {
  let nextState;
  switch (action.type) {
    case 'Home':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Home'}),
        state
      );
      break;
    case 'ImageDetailScreen':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'ImageDetailScreen'}),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}
