import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from 'reducers/index'
import './App.css'
import Main from 'containers/CalendarMain.jsx'

const store = createStore(rootReducer)

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

export default App
