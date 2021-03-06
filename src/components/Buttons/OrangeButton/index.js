import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { responsiveFontSize } from 'react-native-responsive-dimensions'

const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffa500;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: ${responsiveFontSize(4)};
`

const OrangeButton = ({ text, onGuess }) => {
  return (
    <Button activeOpacity={0.6} onPress={() => onGuess()}>
      <ButtonText>{text}</ButtonText>
    </Button>
  )
}

OrangeButton.propTypes = {
  text: PropTypes.string.isRequired,
  onGuess: PropTypes.func.isRequired
}

export default OrangeButton
