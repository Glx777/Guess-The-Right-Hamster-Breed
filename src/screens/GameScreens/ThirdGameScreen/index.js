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

class ThirdGameScreen extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../../assets/images/chinese-hamster.jpg')}
        />
        <GreenButton
          text={hamsters.robo}
          onGuess={() => onWrongGuess(navigation, 'FourthGameScreen')}
        />
        <OrangeButton
          text={hamsters.chinese}
          onGuess={() => onRightGuess(dispatch, navigation, 'FourthGameScreen')}
        />
        <PurpleButton
          text={hamsters.campbell}
          onGuess={() => onWrongGuess(navigation, 'FourthGameScreen')}
        />
        <BlueButton
          text={hamsters.syrian}
          onGuess={() => onWrongGuess(navigation, 'FourthGameScreen')}
        />
      </View>
    )
  }
}

ThirdGameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(null)(ThirdGameScreen)
