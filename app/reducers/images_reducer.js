import { RECEIVE_IMAGES, RECEIVE_MORE_IMAGES} from '../actions/images_actions';

export const imagesReducer = (state = [], action) => {

  switch (action.type) {
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_MORE_IMAGES:
      return state.concat(action.images);
    default:
      return state;
  }
}
