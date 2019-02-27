import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'

import { styles } from '../styles'

const PlayAgainAsAnotherPlayerButton = ({
  dispatch,
  navigation,
  onPlayAgainAsAnotherPlayer
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.playAgainButton}
      onPress={() => onPlayAgainAsAnotherPlayer(dispatch, navigation)}
    >
      <Text style={styles.playAgainButtonText}>
        Play Again As Another Player
      </Text>
    </TouchableOpacity>
  )
}

PlayAgainAsAnotherPlayerButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  onPlayAgainAsAnotherPlayer: PropTypes.func.isRequired
}

export default PlayAgainAsAnotherPlayerButton
