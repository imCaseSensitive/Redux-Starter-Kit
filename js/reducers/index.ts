import { combineReducers } from 'redux'
import UserReducer from './user_reducer'

const allReducers = combineReducers ({
    users: UserReducer
})

export default allReducers;