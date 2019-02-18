import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

class Final extends Component {
  render() {
    const score = this.props.score
    const name = this.props.name
  
    return (
      <View style={{flex: 1, height: '100%', backgroundColor: '#008000'}}>
        <View style={styles.container}>
          <Text style={styles.heading}>Hello {`${name}`}. You scored {`${score}`} out of 5.</Text>
          <View style={styles.buttonGroup}>
            <TouchableHighlight style={styles.button} onPress={() => this.props.onShowGameScreen()}>
              <Text style={styles.buttonText}>Play Again</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={() => this.props.onShowMainMenu()}>
              <Text style={styles.buttonText}>Play As Another Player</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '70%',
    alignItems: 'center',
    height: '100%'
  },
  heading: {
    fontSize: 22,
    color: '#fff',
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonGroup: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#fff',
    width: '96%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },
  buttonText: {
    color: '#008000',
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20
  }
})

Final.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onShowGameScreen: PropTypes.func.isRequired,
  onShowMainMenu: PropTypes.func.isRequired
}

export default Final