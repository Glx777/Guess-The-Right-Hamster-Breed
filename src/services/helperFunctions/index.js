import { Alert, Dimensions } from 'react-native'

import { setScore } from '../../store/actions'

export const onRightGuess = (dispatch, navigation, screen) => {
  dispatch(setScore())
  Alert.alert('Right Guess!', 'You guessed it right! +1 point', [
    {
      text: 'OK',
      onPress: () => navigation.navigate(screen)
    }
  ])
}

export const onWrongGuess = (navigation, screen) => {
  Alert.alert('Wrong Guess!', 'You guessed wrong! +0 points', [
    {
      text: 'OK',
      onPress: () => navigation.navigate(screen)
    }
  ])
}

export const getWidth = () => Dimensions.get('window').width

export const getHeight = () => Dimensions.get('window').height
