import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Image } from 'react-native'
import { connect } from 'react-redux'

import GreenButton from '../../../components/Buttons/GreenButton'
import PurpleButton from '../../../components/Buttons/PurpleButton'
import BlueButton from '../../../components/Buttons/BlueButton'
import OrangeButton from '../../../components/Buttons/OrangeButton'
import { hamsters } from '../../../config/hamsters'
import { styles } from '../styles'
import { onRightGuess } from '../../../services/helperFunctions'
import { onWrongGuess } from '../../../services/helperFunctions'

class FourthGameScreen extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require('../../../../assets/images/winter-white-hamster.jpg')}
        />
        <GreenButton
          text={hamsters.campbell}
          onGuess={() => onWrongGuess(navigation, 'FifthGameScreen')}
        />
        <OrangeButton
          text={hamsters.robo}
          onGuess={() => onWrongGuess(navigation, 'FifthGameScreen')}
        />
        <PurpleButton
          text={hamsters.syrian}
          onGuess={() => onWrongGuess(navigation, 'FifthGameScreen')}
        />
        <BlueButton
          text={hamsters.winter}
          onGuess={() => onRightGuess(dispatch, navigation, 'FifthGameScreen')}
        />
      </View>
    )
  }
}

FourthGameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(null)(FourthGameScreen)
