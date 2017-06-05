import React, { Component } from 'react';
import { ListView, View, Text, TextInput, Image, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

    this.searchPressed = this.searchPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.state = {searchTerms: "", pageNum: 1, searching: false, dataSource: ds.cloneWithRows([])};

  }

  searchPressed() {
    this.setState({searching: true});

    this.props.fetchImages(this.state.searchTerms)
      .then(() => this.setState({
        searching: false,
        dataSource: this.state.dataSource.cloneWithRows(this.props.images)
      }));
  }

  handleChange(text) {
    this.setState({ searchTerms: text });
  }

  renderImageRow(image) {
      console.log('rendering!');
      return (
        <View key={image.id}>
          <Image source={{uri: image.webformatURL}} style={{height: 300}} />
        </View>
      )
  }

  onEndReached() {
    this.setState({pageNum: this.state.pageNum + 1},
      () => {
              this.props.fetchMoreImages(this.state.searchTerms, this.state.pageNum)
                .then(() => this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(this.props.images)
                }));
            }
    )
  }

  render() {
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

        {!this.state.searching && <ListView
          dataSource={this.state.dataSource}
          renderRow={ image => this.renderImageRow(image) }
          enableEmptySections={true}
          onEndReached={this.onEndReached}
        />}

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
  }

})

const mapStateToProps = state => {
  return { images: state.images }
};

export default connect(mapStateToProps)(Home);
