import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers/index'
import App from './components/App'

const store = createStore(allReducers)
