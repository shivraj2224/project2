import React from 'react'

function Header() {
    return (
        <div className='header'>
            <div className='header__left'>
                <h2>Access</h2>
            </div>
            <div className='header__right'>
                <h3 className='active'>Home</h3>
                <h3>About</h3>
                <h3>Services</h3>
            </div>
        </div>
    )
}

export default Header
