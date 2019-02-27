import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import { setName } from '../../../store/actions'
import { styles } from '../styles'

const StartGameButton = ({
  handleSubmit,
  dispatch,
  name,
  values,
  resetName
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.startGameButton}
      onPress={() => {
        dispatch(setName(name))
        handleSubmit()
        resetName(values)
      }}
    >
      <Text style={styles.startGameButtonText}>Start Game</Text>
    </TouchableOpacity>
  )
}

StartGameButton.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
  resetName: PropTypes.func.isRequired
}

StartGameButton.defaultProps = {
  name: ''
}

export default StartGameButton
