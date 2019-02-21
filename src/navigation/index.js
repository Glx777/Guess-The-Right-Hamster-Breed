import { createStackNavigator, createAppContainer } from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import FirstGameScreen from '../screens/GameScreens/FirstGameScreen'
import SecondGameScreen from '../screens/GameScreens/SecondGameScreen'
import ThirdGameScreen from '../screens/GameScreens/ThirdGameScreen'
import FourthGameScreen from '../screens/GameScreens/FourthGameScreen'
import FifthGameScreen from '../screens/GameScreens/FifthGameScreen'
import FinalScreen from '../screens/FinalScreen'

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  FirstGameScreen: {
    screen: FirstGameScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  SecondGameScreen: {
    screen: SecondGameScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  ThirdGameScreen: {
    screen: ThirdGameScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  FourthGameScreen: {
    screen: FourthGameScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  FifthGameScreen: {
    screen: FifthGameScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  },
  Final: {
    screen: FinalScreen,
    navigationOptions: {
      header: null,
      gesturesEnabled: false
    }
  }
})

export const AppContainer = createAppContainer(MainNavigator)
