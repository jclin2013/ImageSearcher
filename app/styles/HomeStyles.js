import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  scene: {
    flex: 1
  },

  initialLoadScreen: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },

  welcomeMessage: {
    fontSize: 25
  },

  searchSection: {
    flexDirection: 'row',
    height: (Platform.OS === 'ios') ? 30 : 50,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    alignItems: 'center'
  },

  searchInput: {
    flex: 0.85
  },

  searchButton: {
    flex: 0.15,
    borderWidth: 0.5,
    borderColor: 'lightgray'
  }

})
