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

class FirstGameScreen extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../../../assets/images/syrian-hamster.jpg')}
        />
        <GreenButton
          text={hamsters.syrian}
          onGuess={() => onRightGuess(dispatch, navigation, 'SecondGameScreen')}
        />
        <OrangeButton
          text={hamsters.robo}
          onGuess={() => onWrongGuess(navigation, 'SecondGameScreen')}
        />
        <PurpleButton
          text={hamsters.chinese}
          onGuess={() => onWrongGuess(navigation, 'SecondGameScreen')}
        />
        <BlueButton
          text={hamsters.winter}
          onGuess={() => onWrongGuess(navigation, 'SecondGameScreen')}
        />
      </View>
    )
  }
}

FirstGameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(null)(FirstGameScreen)
