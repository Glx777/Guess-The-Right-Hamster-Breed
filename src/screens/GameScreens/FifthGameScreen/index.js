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

class FifthGameScreen extends Component {
  render() {
    const { dispatch, navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require('../../../../assets/images/campbells-hamster.jpg')}
        />
        <GreenButton
          text={hamsters.winter}
          onGuess={() => onWrongGuess(navigation, 'Final')}
        />
        <OrangeButton
          text={hamsters.robo}
          onGuess={() => onWrongGuess(navigation, 'Final')}
        />
        <PurpleButton
          text={hamsters.campbell}
          onGuess={() => onRightGuess(dispatch, navigation, 'Final')}
        />
        <BlueButton
          text={hamsters.chinese}
          onGuess={() => onWrongGuess(navigation, 'Final')}
        />
      </View>
    )
  }
}

FifthGameScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
}

export default connect(null)(FifthGameScreen)
