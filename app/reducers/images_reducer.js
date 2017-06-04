import { RECEIVE_IMAGES } from '../actions/images_actions';

export const imagesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    default:
      return state;
  }
}
