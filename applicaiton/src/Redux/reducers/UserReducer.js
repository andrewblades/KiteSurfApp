import { UserActionTypes } from '../actions/UserAction'

const INITIAL_STATE = {
    user: null,
    isFetching: false,
    errMessage: null,
}


const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER_START:
            return {
                ...state,
                isFetching: true
            }
        case UserActionTypes.FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                user: action.payload
            }
        case UserActionTypes.FETCH_USER_FAIL:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }

        default:
            return state;

    }
}


export default userReducer