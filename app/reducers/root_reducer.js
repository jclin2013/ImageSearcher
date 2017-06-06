import { combineReducers } from 'redux';
import { imagesReducer } from './images_reducer';
import { nav } from './navigator_reducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  nav: nav
});

export default rootReducer;
