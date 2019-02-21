import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from '../styles'

const OrangeButton = ({ text, onGuess }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, styles.orangeButton]}
      onPress={() => onGuess()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

OrangeButton.propTypes = {
  text: PropTypes.string.isRequired,
  onGuess: PropTypes.func.isRequired
}

export default OrangeButton
