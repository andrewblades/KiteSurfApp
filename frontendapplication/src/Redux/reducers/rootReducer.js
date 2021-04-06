import { combineReducers } from 'redux'

import locationReducer from './LocationReducer'
import userReducer from './UserReducer'
const rootReducer = combineReducers({
    location: locationReducer,
    user: userReducer
})

export default rootReducer;