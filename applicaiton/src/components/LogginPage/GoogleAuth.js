import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { signIn, signOut } from '../../Redux/actions/SignAction'
import '../../Stylesheet/App.css'
const GoogleAuth = ({ isSignedIn }) => {

    const [auth, setAuth] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const params = {
            clientId: '496554101054-9f9hh8cfpin79kf6kc2ceehmunuk1utq.apps.googleusercontent.com',
            scope: 'email',
        }

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init(params).then(() => {
                setAuth(window.gapi.auth2.getAuthInstance());
                onAuthChange(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                window.gapi.auth2.getAuthInstance().isSignedIn.listen(onAuthChange)
            });
        });
    }, [])



    const onAuthChange = (isSingIn) => {
        if (isSingIn) {
            dispatch(
                signIn(
                    window.gapi.auth2.getAuthInstance().currentUser.get().getId()
                )
            );
        } else {
            dispatch(signOut())
        }
    }

    const onSignInClick = () => {
        auth.signIn();
    }
    const onSignOutClick = () => {
        auth.signOut();
    }


    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <div>
                    <button className='signBtn' onClick={onSignOutClick}>Sign Out</button>
                </div>)
        } else {
            return (<button className='signBtn' onClick={onSignInClick}>Sign in</button>)
        }
    }



    return (
        <div>
            {renderAuthButton()}
        </div>
    )

}


const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)