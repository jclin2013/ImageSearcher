import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages, fetchMoreImages } from '../actions/images_actions';
import Home from './Home';

class AppContainer extends Component {
  render() {
    return (
      <Home {...this.props} />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchImages: searchTerms => dispatch(fetchImages(searchTerms)),
    fetchMoreImages: (searchTerms, pageNum) => dispatch(fetchMoreImages(searchTerms, pageNum))
  };
}

export default connect(null, mapDispatchToProps)(AppContainer);
