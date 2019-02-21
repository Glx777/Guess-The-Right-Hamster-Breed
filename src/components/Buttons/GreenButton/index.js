import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from '../styles'

const GreenButton = ({ text, onGuess }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.button, styles.greenButton]}
      onPress={() => onGuess()}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  onGuess: PropTypes.func.isRequired
}

export default GreenButton
