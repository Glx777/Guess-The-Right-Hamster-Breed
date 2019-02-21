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

class SecondGameScreen extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../../assets/images/robo-hamster.jpg')}
        />
        <GreenButton
          text={hamsters.campbell}
          onGuess={() => onWrongGuess(navigation, 'ThirdGameScreen')}
        />
        <OrangeButton
          text={hamsters.winter}
          onGuess={() => onWrongGuess(navigation, 'ThirdGameScreen')}
        />
        <PurpleButton
          text={hamsters.syrian}
          onGuess={() => onWrongGuess(navigation, 'ThirdGameScreen')}
        />
        <BlueButton
          text={hamsters.robo}
          onGuess={() => onRightGuess(dispatch, navigation, 'ThirdGameScreen')}
        />
      </View>
    )
  }
}

SecondGameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(null)(SecondGameScreen)
