import React, { Component } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import StartGameButton from '../../components/Buttons/StartGameButton'
import { setName } from '../../store/actions'

import { styles } from './styles'

class HomeScreen extends Component {
  render() {
    const { dispatch, name, navigation } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView style={styles.itemGroup} behavior="position">
          <Text style={styles.heading}>Guess The Right Hamster Breed</Text>
          <TextInput
            onChangeText={text => dispatch(setName(text))}
            placeholderTextColor="#fff"
            style={styles.textInput}
            value={name}
            placeholder="Enter Your Name"
          />
          <StartGameButton
            name={name}
            navigation={navigation}
            screen={'FirstGameScreen'}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

HomeScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  name: state.name
})

export default connect(mapStateToProps)(HomeScreen)
