import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth
} from 'react-native-responsive-dimensions'

import StartGameButton from '../Buttons/StartGameButton'

const Container = styled.View``

const TextInput = styled.TextInput`
  border-width: ${responsiveWidth(0.5)};
  border-color: #fff;
  border-radius: ${responsiveHeight(1.5)};
  font-size: ${responsiveFontSize(3.5)};
  width: ${responsiveWidth(96)};
  padding-left: ${responsiveWidth(3)};
  padding-right: ${responsiveWidth(3)};
  padding-bottom: ${responsiveHeight(2.5)};
  padding-top: ${responsiveHeight(2.5)};
  color: #fff;
`
const ErrorMessage = styled.Text`
  color: red;
  font-size: ${responsiveFontSize(3)};
  margin-top: ${responsiveHeight(1)};
  margin-bottom: ${responsiveHeight(1)};
`

class Form extends Component {
  resetName = values => {
    values.name = ''
  }

  render() {
    const { handleChange, handleSubmit, errors, values, dispatch } = this.props
    return (
      <Container onSubmit={handleSubmit}>
        <TextInput
          onChangeText={handleChange('name')}
          placeholderTextColor="#fff"
          value={values.name}
          placeholder="Enter Your Name"
        />
        <ErrorMessage>{errors.name}</ErrorMessage>
        <StartGameButton
          dispatch={dispatch}
          values={values}
          name={values.name}
          handleSubmit={handleSubmit}
          resetName={this.resetName.bind(this)}
        />
      </Container>
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
