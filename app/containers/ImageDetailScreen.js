import React, { Component } from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

class ImageDetailScreen extends Component {
  static navigationOptions = {
    title: 'Image Details'
  };

  render() {
    const { params } = this.props.navigation.state;

    return (
      <ScrollView>
        <Image source={{uri: params.imageUrl}} style={{height: 300}} />
        <View style={{marginTop: 20}}>
          <Text style={styles.photoInfo}>Photo Uploaded By: {params.user}</Text>
          <Text style={styles.photoInfo}>Tags: {params.tags}</Text>
          <Text style={styles.photoInfo}>Resolution: {params.dimensions}</Text>
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  photoInfo: {
    fontSize: 20
  }
});

export default ImageDetailScreen;
