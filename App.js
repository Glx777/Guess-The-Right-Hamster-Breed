import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { AppContainer } from './src/navigation'
import { reducers } from './src/store/reducers'

const store = createStore(reducers)

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default App
