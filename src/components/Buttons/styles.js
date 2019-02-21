import { StyleSheet } from 'react-native'

import { getHeight, getWidth } from '../../services/helperFunctions'

export const styles = StyleSheet.create({
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
    fontSize: getWidth() * 0.08
  },
  startGameButton: {
    backgroundColor: '#fff',
    width: getWidth() * 0.96,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: getHeight() * 0.03
  },
  startGameButtonText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: '#800080',
    fontSize: getWidth() * 0.06
  }
})
