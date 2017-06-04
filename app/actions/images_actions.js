import { fetchImages } from '../util/api';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';

export const receiveImages = images => (
  {type: RECEIVE_IMAGES, images}
);

export const fetchImages = searchTerms => dispatch => {
  return fetchImages(searchTerms)
    .then(images => dispatch(receiveImages(images)));
};
