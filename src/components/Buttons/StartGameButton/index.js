import React from 'react'
import { Alert, Keyboard, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { styles } from '../styles'

const StartGameButton = ({ name, navigation, screen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.startGameButton}
      onPress={() => {
        if (name) {
          Keyboard.dismiss()
          navigation.navigate(screen)
        } else {
          Alert.alert('Name cannot be empty!')
        }
      }}
    >
      <Text style={styles.startGameButtonText}>Start Game</Text>
    </TouchableOpacity>
  )
}

StartGameButton.propTypes = {
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  screen: PropTypes.string.isRequired
}

export default StartGameButton
