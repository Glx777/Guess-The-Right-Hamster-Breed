import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  image: {
    width: 200,
    height: Dimensions.get('window').height * 0.5
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  greenButton: {
    backgroundColor: '#008000'
  },
  orangeButton: {
    backgroundColor: '#FFA500'
  },
  purpleButton: {
    backgroundColor: '#800080'
  },
  blueButton: {
    backgroundColor: '#369fff'
  },
  buttonText: {
    color: '#fff',
    fontSize: 22
  }
})
