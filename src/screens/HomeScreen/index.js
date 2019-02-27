import React from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'

import Form from '../../components/Form'

import { styles } from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.itemGroup} behavior="position">
        <Text style={styles.heading}>Guess The Right Hamster Breed</Text>
        <Form navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreen
