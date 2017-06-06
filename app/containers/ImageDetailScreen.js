import React, { Component } from 'react';
import { ListView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';

class ImageDetailScreen extends Component {
  static navigationOptions = {
    title: 'Image Details'
  };

  render() {
    const { params } = this.props.navigation.state;
    debugger
    // <Text>{params.testText}</Text>

    return (
      <View>
        <Text>"HI THIS IS THE IMAGE DETAIL SCREEN"</Text>
      </View>
    )
  }
}

export default ImageDetailScreen;
