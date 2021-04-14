import { combineReducers } from 'redux'

import locationReducer from './LocationReducer'
import userReducer from './UserReducer'
import { authReducer } from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    location: locationReducer,
    user: userReducer,

})

export default rootReducer;