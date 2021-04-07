import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from '../LogginPage/GoogleAuth'
import '../../Stylesheet/App.css'
function Nav() {
    const [open, setOpen] = useState(false)

    return (
        <div className='navigation'>
            <Link to='/' className='link'>
                <h4 className='Logo'>Kite</h4>
            </Link>
            <div className='hamburger' onClick={(() => setOpen(!open))}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            {!open ? <div className='navRightSide' id='navRightSide'>
                <Link to='/spot' className='link'>
                    Spots
                </Link>
                <Link to='/user' className='link'>
                    Users
                </Link>
                <GoogleAuth />
            </div>
                :
                <div className='openNav' id='openNav'>
                    <Link to='/spot' className='link'>
                        Spots
                </Link>
                    <Link to='/user' className='link'>
                        Users
                </Link>
                    <GoogleAuth />

                </div>}
        </div>

    )
}

export default Nav
