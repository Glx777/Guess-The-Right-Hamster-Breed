import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'

import { setName } from '../../../store/actions'

const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: ${responsiveWidth(96)};
  align-items: center;
  border-radius: ${responsiveHeight(2)};
`

const ButtonText = styled.Text`
  padding-top: ${responsiveFontSize(3)};
  padding-bottom: ${responsiveFontSize(3)};
  color: #800080;
  font-size: ${responsiveFontSize(3)};
`
const StartGameButton = ({
  handleSubmit,
  dispatch,
  name,
  values,
  resetName
}) => {
  return (
    <Button
      activeOpacity={0.8}
      onPress={() => {
        dispatch(setName(name))
        handleSubmit()
        resetName(values)
      }}
    >
      <ButtonText>Start Game</ButtonText>
    </Button>
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
