import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
    this.searchPressed = this.searchPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {searchTerms: "", searching: false};
  }

  searchPressed() {
    this.setState({searching: true});
    this.props.fetchImages(this.state.searchTerms)
      .then(() => this.setState({searching: false}));
  }

  handleChange(text) {
    this.setState({ searchTerms: text });
  }

  render() {

    let imageList = this.props.images.map(image =>
      <View key={image.id}>
        <Image source={{uri: image.webformatURL}} style={{height: 300}} />
      </View>
    )

    return (
      <View style={styles.scene}>

        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            returnKeyType='search'
            placeholder='Type keywords here...'
            onChangeText={ this.handleChange }
            value={ this.state.searchTerms.toLowerCase() }
          />

          <TouchableHighlight style={styles.searchButton} onPress={ this.searchPressed }>
            <Text>Search</Text>
          </TouchableHighlight>
        </View>

        {this.state.searching && <ActivityIndicator
            animating={this.state.searching}
            style={{height: 600}}
            size="large"
          />}

        <ScrollView style={styles.scrollSection}>
          {!this.state.searching && imageList}
        </ScrollView>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },

  searchSection: {
    flexDirection: 'row',
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5
  },

  searchInput: {
    flex: 0.85
  },

  searchButton: {
    flex: 0.15
  },

  scrollSection: {
  }

})

const mapStateToProps = state => {
  return { images: state.images }
};

export default connect(mapStateToProps)(Home);
