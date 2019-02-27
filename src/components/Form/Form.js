import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import StartGameButton from '../Buttons/StartGameButton'

import { styles } from './styles'

class Form extends Component {
  resetName = values => {
    values.name = ''
  }

  render() {
    const { handleChange, handleSubmit, errors, values, dispatch } = this.props
    return (
      <View onSubmit={handleSubmit}>
        <TextInput
          onChangeText={handleChange('name')}
          placeholderTextColor="#fff"
          style={styles.textInput}
          value={values.name}
          placeholder="Enter Your Name"
        />
        <Text style={styles.errorMessage}>{errors.name}</Text>
        <StartGameButton
          dispatch={dispatch}
          values={values}
          name={values.name}
          handleSubmit={handleSubmit}
          resetName={this.resetName.bind(this)}
        />
      </View>
    )
  }
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default connect()(Form)
