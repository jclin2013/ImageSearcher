import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImages, fetchMoreImages } from '../actions/ImagesActions';
import Home from '../components/Home';

class AppContainer extends Component {
  static navigationOptions = {
    title: 'ImageSearcher'
  };

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
