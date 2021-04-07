import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../LogginPage/GoogleAuth'
import '../../Stylesheet/App.css'
function Nav() {
    return (
        <div className='navigation'>
            <Link to='/' className='link'>
                <h4>Kite</h4>
            </Link>
            <div className='navRightSide'>
                <Link to='/spot' className='link'>
                    Spots
                </Link>
                <Link to='/user' className='link'>
                    Users
                </Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Nav
