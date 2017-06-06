import { combineReducers } from 'redux';
import { imagesReducer } from './ImagesReducer';
import { nav } from './NavigatorReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  nav: nav
});

export default rootReducer;
