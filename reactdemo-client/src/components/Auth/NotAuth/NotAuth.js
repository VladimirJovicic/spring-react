import React from 'react';
import { Link } from 'react-router-dom'
import './NotAuth.css'
const NotAuth = () => {
    return (
        <div className='NotAuth'>
            You are not authentificated to do this. Please <Link to='/login'>log in</Link>
        </div>
    )
}

export default NotAuth;