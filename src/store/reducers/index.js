const initialState = {
  score: 0,
  name: ''
}

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload }
      break
    case 'SET_SCORE':
      const prevScore = state.score
      return { ...state, score: prevScore + 1 }
      break
    case 'RESET_NAME':
      state.name = ''
      return { ...state }
      break
    case 'RESET_SCORE':
      state.score = 0
      return { ...state }
      break
    default:
      return state
  }
}
