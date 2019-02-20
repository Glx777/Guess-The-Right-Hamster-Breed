import { StyleSheet, Dimensions } from 'react-native'

const getWidth = () => Dimensions.get('window').width
const getHeight = () => Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: getWidth() * 0.07,
    marginBottom: getHeight() * 0.03
  },
  itemGroup: {
    marginTop: getHeight() * 0.5
  },
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
  button: {
    backgroundColor: '#fff',
    width: getWidth() * 0.96,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: getHeight() * 0.03
  },
  buttonText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: '#800080',
    fontSize: getWidth() * 0.06
  }
})