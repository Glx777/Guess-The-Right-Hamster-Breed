import { StyleSheet } from 'react-native'

import { getWidth } from '../../services/helperFunctions'

export const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    fontSize: getWidth() * 0.07,
    width: getWidth() * 0.96,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    paddingTop: 15,
    color: '#fff'
  },
  errorMessage: {
    color: 'red',
    fontSize: 20,
    marginTop: 5,
    marginBottom: 5
  }
})
