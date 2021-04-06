import { LocationActionTypes } from '../actions/Locationaction'

const INITIAL_STATE = {
    location: null,
    isFetching: false,
    errMessage: null,
}


const locationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LocationActionTypes.FETCH_LOCATION_START:
            return {
                ...state,
                isFetching: true
            }
        case LocationActionTypes.FETCH_LOCATION_SUCCESS:
            return {
                ...state,
                isFetching: false,
                location: action.payload
            }
        case LocationActionTypes.FETCH_LOCATION_FAIL:
            return {
                ...state,
                isFetching: false,
                errMessage: action.payload
            }
        default:
            return state;
    }
}

export default locationReducer;