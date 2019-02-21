import { StyleSheet } from 'react-native'

import { getHeight, getWidth } from '../../services/helperFunctions'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#008000',
    flex: 1
  },
  wrapper: {
    alignItems: 'center',
    height: getHeight(),
    marginTop: getHeight() * 0.3
  },
  heading: {
    color: '#fff',
    fontSize: getWidth() * 0.06
  },
  buttonGroup: {
    alignItems: 'center',
    marginTop: getHeight() * 0.02,
    width: getWidth()
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: getHeight() * 0.04,
    width: getWidth() * 0.96
  },
  buttonText: {
    color: '#008000',
    fontSize: getWidth() * 0.06,
    paddingBottom: getHeight() * 0.03,
    paddingTop: getHeight() * 0.03
  }
})
