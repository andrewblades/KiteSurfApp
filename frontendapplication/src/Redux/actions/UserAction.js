export const UserActionTypes = {
    FETCH_USER_START: 'FETCH_USER_START',
    FETCH_USER_SUCCESS: 'FETCH_USER_SUCCESS',
    FETCH_USER_FAIL: 'FETCH_USER_FAIL',

}



export const fetchUserStart = () => ({
    type: 'FETCH_USER_START'
})


export const fetchUserSuccess = (user) => ({
    type: 'FETCH_USER_SUCCESS',
    payload: user

})



export const fetchUserFail = (errMessage) => ({
    type: 'FETCH_USER_Fail',
    payload: errMessage
})



export const getUser = () => {
    return (dispatch) => {
        dispatch(fetchUserStart())
        fetch(`https://606c716ec445570017a47140.mockapi.io/user`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                dispatch(fetchUserSuccess(data));
            })
            .catch((e) => dispatch(fetchUserFail(e.errMessage)))
    }
}