import React, { Component } from 'react';
import { ListView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';

class ImageDetailScreen extends Component {
  static navigationOptions = {
    title: 'Image Details'
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View>
        <Image source={{uri: params.imageUrl}} style={{height: 300}} />
      </View>
    )
  }
}

export default ImageDetailScreen;
