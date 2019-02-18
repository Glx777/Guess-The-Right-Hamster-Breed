import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, Alert, StyleSheet, KeyboardAvoidingView } from 'react-native'

import GameScreen from './GameScreen'

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

  render(){
    if (this.state.isGameScreen) {
      return (
        <GameScreen
          name={this.state.name} 
          onShowMainMenu={this.onShowMainMenu.bind(this)}
        />
      )
    }
    return (
      <View style={styles.container}>
      <KeyboardAvoidingView style={styles.itemGroup} behavior="position">
        <Text style={styles.heading}>Guess The Right Hamster Breed</Text>
        <TextInput
          placeholderTextColor='#fff' 
          style={styles.textInput} 
          onChangeText={(text) => this.setState({ name: text })}
          placeholder="Enter Your Name"
          ref="name"
        />
        <TouchableOpacity style={styles.button} onPress={() => this.onChange()}>
          <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 30
  },
  itemGroup: {
    marginTop: 270
  },
  textInput: {
    borderWidth: 1, 
    borderColor: '#fff',
    borderRadius: 10,
    fontSize: 20,
    width: 300,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    color: '#fff'
  },
  button: {
    backgroundColor: '#fff', 
    width: 300, 
    alignItems: 'center', 
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    paddingTop: 20,
    paddingBottom: 20,
    color: '#800080',
    fontSize: 16
  }
})

export default HomeScreen