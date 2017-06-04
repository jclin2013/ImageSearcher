import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.searchPressed = this.searchPressed.bind(this);
  }

  searchPressed() {
    this.props.fetchImages('yellow flower');
  }

  render() {
    return (
      <View style={{marginTop: 20}}>

        <View>
          <TouchableHighlight onPress={ this.searchPressed }>
            <Text>Fetch Images</Text>
          </TouchableHighlight>
        </View>

        <ScrollView>
        </ScrollView>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return { images: state.images }
};

export default connect(mapStateToProps)(Home);
