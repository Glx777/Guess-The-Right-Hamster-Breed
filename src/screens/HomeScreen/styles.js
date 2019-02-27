import { StyleSheet, Dimensions } from 'react-native'

const getWidth = () => Dimensions.get('window').width
const getHeight = () => Dimensions.get('window').height

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center'
  },
  itemGroup: {
    marginTop: getHeight() * 0.4
  },
  heading: {
    color: '#fff',
    fontSize: getWidth() * 0.07,
    marginBottom: getHeight() * 0.03
  }
})
