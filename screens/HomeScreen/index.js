import React, { Component } from 'react'
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  KeyboardAvoidingView
} from 'react-native'

import GameScreen from '../GameScreen'

import { styles } from './styles'

class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      name: null,
      isGameScreen: false
    }
  }

  onShowMainMenu = () => {
    this.setState({ isGameScreen: false, name: null })
  }

  onChange = () => {
    if (this.state.name === null) {
      Alert.alert('Name cannot be empty')
    } else {
      this.setState({ isGameScreen: true })
    }
  }

  render() {
    const { isGameScreen, name } = this.state
    if (isGameScreen) {
      return (
        <GameScreen
          name={name}
          onShowMainMenu={this.onShowMainMenu.bind(this)}
        />
      )
    }
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.itemGroup} behavior="position">
          <Text style={styles.heading}>Guess The Right Hamster Breed</Text>
          <TextInput
            placeholderTextColor="#fff"
            style={styles.textInput}
            onChangeText={text => this.setState({ name: text })}
            placeholder="Enter Your Name"
            // eslint-disable-next-line react/no-string-refs
            ref="name"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onChange()}
          >
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default HomeScreen
