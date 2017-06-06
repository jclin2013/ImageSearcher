import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { styles } from './HomeStyles'
import {
  ListView,
  View,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator } from 'react-native';

class Home extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

    this.searchPressed = this.searchPressed.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onEndReached = this.onEndReached.bind(this);

    this.state = {
      searchTerms: "",
      pageNum: 1,
      searching: false,
      dataSource: ds.cloneWithRows([]),
      initialLoadScreen: true
    };

  }

  initialLoadScreen() {
    return (
      <View style={styles.initialLoadScreen}>
        <Text style={styles.welcomeMessage}>Welcome to ImageSearcher!</Text>
        <Text>Type in a query and hit search to find some images.</Text>
      </View>
    )
  }

  searchPressed() {
    this.setState({searching: true, initialLoadScreen: false});

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
      return (
        <TouchableOpacity
          key={image.id}
          style={styles.individualImage}
          onPress={() =>
            this.props.dispatch(NavigationActions.navigate({
              routeName: 'ImageDetailScreen',
              params: {
                imageUrl: image.webformatURL,
                user: image.user,
                tags: image.tags,
                dimensions: `${image.webformatWidth} x ${image.webformatHeight}`
              }
            }))}
          >

          <Image source={{uri: image.webformatURL}} style={{height: 300}} />

        </TouchableOpacity>
      )
  }

  onEndReached() {
    if (this.state.searchTerms === "") { return; }

    this.setState({pageNum: this.state.pageNum + 1},
      () => {
              this.props.fetchMoreImages(this.state.searchTerms, this.state.pageNum)
                .then(() => this.setState({
                            dataSource: this.state.dataSource.cloneWithRows(this.props.images)
                          })
                    );
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

          <TouchableHighlight style={styles.searchButton} onPress={this.searchPressed}>
            <Text style={{textAlign: 'center'}}>Search</Text>
          </TouchableHighlight>
        </View>

        {this.state.initialLoadScreen && this.initialLoadScreen()}

        {this.state.searching && <ActivityIndicator
            animating={this.state.searching}
            style={{height:'90%'}}
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

const mapStateToProps = state => {
  return { images: state.images }
};

export default connect(mapStateToProps)(Home);
