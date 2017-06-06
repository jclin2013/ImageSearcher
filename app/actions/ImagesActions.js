import * as API from '../util/api';

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_MORE_IMAGES = 'RECEIVE_MORE_IMAGES';

export const receiveImages = images => (
  {type: RECEIVE_IMAGES, images}
);

export const receiveMoreImages = images => (
  {type: RECEIVE_MORE_IMAGES, images}
);

export const fetchImages = searchTerms => dispatch => {
  return API.fetchImages(searchTerms)
    .then(response => response.json())
    .then(responseData => dispatch(receiveImages(responseData.hits)))
};

export const fetchMoreImages = (searchTerms, pageNum) => dispatch => {
  return API.fetchMoreImages(searchTerms, pageNum)
    .then(response => response.json())
    .then(responseData => dispatch(receiveMoreImages(responseData.hits)))
}
