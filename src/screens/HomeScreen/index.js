import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  responsiveFontSize,
  responsiveHeight
} from 'react-native-responsive-dimensions'

import Form from '../../components/Form'

const Container = styled.View`
  flex: 1;
  background-color: #800080;
`
const ItemGroup = styled.KeyboardAvoidingView`
  margin-top: ${responsiveHeight(40)};
`

const Heading = styled.Text`
  color: #fff;
  font-size: ${responsiveFontSize(3.5)};
  margin-bottom: ${responsiveHeight(3)};
`

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <ItemGroup behavior="position">
        <Heading>Guess The Right Hamster Breed</Heading>
        <Form navigation={navigation} />
      </ItemGroup>
    </Container>
  )
}

HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default HomeScreen
