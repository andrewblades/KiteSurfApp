export const LocationActionTypes = {
    FETCH_LOCATION_START: 'FETCH_LOCATION_START',
    FETCH_LOCATION_SUCCESS: 'FETCH_LOCATION_SUCCESS',
    FETCH_LOCATION_FAIL: 'FETCH_LOCATION_FAIL',

}



export const fetchLocationStart = () => ({
    type: 'FETCH_LOCATION_START'
})


export const fetchLocationSuccess = (location) => ({
    type: 'FETCH_LOCATION_SUCCESS',
    payload: location

})



export const fetchLocationFail = (errMessage) => ({
    type: 'FETCH_LOCATION_Fail',
    payload: errMessage
})


export const fetchLocation = () => {
    return dispatch => {
        dispatch(fetchLocationStart());

        fetch(`https://606c716ec445570017a47140.mockapi.io/spot`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch(fetchLocationSuccess(data));

            })
            .catch((e) => dispatch(fetchLocationFail(e.message)))
    }
}