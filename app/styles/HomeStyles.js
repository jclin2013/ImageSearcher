import { StyleSheet } from 'react-native';

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
    height: 30,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5
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
