import { combineReducers } from 'redux';
import { imagesReducer } from './images_reducer';

const rootReducer = combineReducers({
  images: imagesReducer
});

export default rootReducer;
