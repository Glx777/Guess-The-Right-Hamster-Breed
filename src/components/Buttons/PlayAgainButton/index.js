import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'

const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  border-radius: ${responsiveHeight(1.5)};
  margin-top: ${responsiveHeight(1)};
  width: ${responsiveWidth(96)};
`

const ButtonText = styled.Text`
  color: #008000;
  font-size: ${responsiveFontSize(3)};
  padding-bottom: ${responsiveHeight(3)};
  padding-top: ${responsiveHeight(3)};
`

const PlayAgainButton = ({ dispatch, navigation, onPlayAgain }) => {
  return (
    <Button
      activeOpacity={0.8}
      onPress={() => onPlayAgain(dispatch, navigation)}
    >
      <ButtonText>Play Again</ButtonText>
    </Button>
  )
}

PlayAgainButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  onPlayAgain: PropTypes.func.isRequired
}

export default PlayAgainButton
