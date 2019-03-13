import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  responsiveFontSize,
  responsiveHeight
} from 'react-native-responsive-dimensions'

import { resetName, resetScore } from '../../store/actions'
import PlayAgainButton from '../../components/Buttons/PlayAgainButton'
import PlayAgainAsAnotherPlayerButton from '../../components/Buttons/PlayAgainAsAnotherPlayerButton'

import { styles } from './styles'

const Container = styled.View`
  background-color: #008000;
  flex: 1;
`

class FinalScreen extends Component {
  onPlayAgain = (dispatch, navigation) => {
    dispatch(resetScore())
    navigation.navigate('FirstGameScreen')
  }

  onPlayAgainAsAnotherPlayer = (dispatch, navigation) => {
    dispatch(resetScore())
    dispatch(resetName())
    navigation.navigate('Home')
  }

  render() {
    const { dispatch, name, navigation, score } = this.props
    return (
      <Container>
        <View style={styles.wrapper}>
          <Text style={styles.heading}>
            Hello {`${name}`}. You scored {`${score}`} out of 5.
          </Text>
          <View style={styles.buttonGroup}>
            <PlayAgainButton
              dispatch={dispatch}
              navigation={navigation}
              onPlayAgain={this.onPlayAgain.bind(this)}
            />
            <PlayAgainAsAnotherPlayerButton
              dispatch={dispatch}
              navigation={navigation}
              onPlayAgainAsAnotherPlayer={this.onPlayAgainAsAnotherPlayer.bind(
                this
              )}
            />
          </View>
        </View>
      </Container>
    )
  }
}

FinalScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
}

const mapStateToProps = state => ({
  name: state.name,
  score: state.score
})

export default connect(mapStateToProps)(FinalScreen)
