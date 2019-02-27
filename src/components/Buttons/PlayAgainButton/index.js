import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from '../styles'

const PlayAgainButton = ({ dispatch, navigation, onPlayAgain }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playAgainButton}
      onPress={() => onPlayAgain(dispatch, navigation)}
    >
      <Text style={styles.playAgainButtonText}>Play Again</Text>
    </TouchableOpacity>
  )
}

PlayAgainButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  onPlayAgain: PropTypes.func.isRequired
}

export default PlayAgainButton
