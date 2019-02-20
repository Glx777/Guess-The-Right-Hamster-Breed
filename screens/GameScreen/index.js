import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Alert, Text, Image, TouchableHighlight } from 'react-native'

import Final from '../FinalScreen'
import GreenButton from '../../components/Buttons/GreenButton'
import PurpleButton from '../../components/Buttons/PurpleButton'
import BlueButton from '../../components/Buttons/BlueButton'
import OrangeButton from '../../components/Buttons/OrangeButton'
import { hamsterBreeds } from '../../config/hamsterBreeds'

import { styles } from './styles'

class GameScreen extends Component {
  constructor() {
    super()
    this.state = {
      screen: 1,
      score: 0
    }
  }

  onChangeScreen = () => {
    const prevScreen = this.state.screen
    this.setState({ screen: prevScreen + 1 })
  }

  onShowGameScreen = () => {
    this.setState({
      screen: 1,
      score: 0
    })
  }

  onRightGuess = () => {
    Alert.alert('You guessed it right! +1 point')
    const prevScore = this.state.score
    this.setState({ score: prevScore + 1 })
    this.onChangeScreen()
  }

  onWrongGuess = () => {
    Alert.alert('You guessed wrong!')
    this.onChangeScreen()
  }

  render() {
    const { screen } = this.state
    if (screen === 1) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/syrian-hamster.jpg')}
          />
          <GreenButton
            text={hamsterBreeds.syrian}
            onGuess={this.onRightGuess.bind(this)}
          />
          <OrangeButton
            text={hamsterBreeds.robo}
            onGuess={this.onWrongGuess.bind(this)}
          />
          <PurpleButton
            text={hamsterBreeds.chinese}
            onGuess={this.onWrongGuess.bind(this)}
          />
          <BlueButton
            text={hamsterBreeds.winter}
            onGuess={this.onWrongGuess.bind(this)}
          />
        </View>
      )
    } else if (screen === 2) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/robo-hamster.jpg')}
          />
          <GreenButton
            text={hamsterBreeds.campbell}
            onGuess={this.onRightGuess.bind(this)}
          />
          <OrangeButton
            text={hamsterBreeds.winter}
            onGuess={this.onWrongGuess.bind(this)}
          />
          <PurpleButton
            text={hamsterBreeds.syrian}
            onGuess={this.onWrongGuess.bind(this)}
          />
          <BlueButton
            text={hamsterBreeds.robo}
            onGuess={this.onRightGuess.bind(this)}
          />
        </View>
      )
    } else if (screen === 3) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/chinese-hamster.jpg')}
          />
          <TouchableHighlight
            style={styles.greenButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Robo Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.orangeButton}
            onPress={() => this.onRightGuess()}
          >
            <Text style={styles.buttonText}>Chinese Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.purpleButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Campbell’s Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.blueButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Syrian Hamster</Text>
          </TouchableHighlight>
        </View>
      )
    } else if (screen === 4) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/winter-white-hamster.jpg')}
          />
          <TouchableHighlight
            style={styles.greenButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Campbell’s Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.orangeButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Robo Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.purpleButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Syrian Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.blueButton}
            onPress={() => this.onRightGuess()}
          >
            <Text style={styles.buttonText}>Winter White Hamster</Text>
          </TouchableHighlight>
        </View>
      )
    } else if (screen === 5) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/campbells-hamster.jpg')}
          />
          <TouchableHighlight
            style={styles.greenButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Chinese Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.orangeButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Syrian Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.purpleButton}
            onPress={() => this.onRightGuess()}
          >
            <Text style={styles.buttonText}>Campbell’s Hamster</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.blueButton}
            onPress={() => this.onWrongGuess()}
          >
            <Text style={styles.buttonText}>Robo Hamster</Text>
          </TouchableHighlight>
        </View>
      )
    } else if (screen === 6) {
      return (
        <Final
          name={this.props.name}
          score={this.state.score}
          stat={this.state}
          onShowGameScreen={this.onShowGameScreen.bind(this)}
          onShowMainMenu={this.props.onShowMainMenu.bind(this)}
        />
      )
    }
    return null
  }
}

GameScreen.propTypes = {
  name: PropTypes.string.isRequired,
  onShowMainMenu: PropTypes.func.isRequired
}

export default GameScreen
