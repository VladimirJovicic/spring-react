import React from 'react';
import { Link } from 'react-router-dom'
import './NotAuth.css'
const NotAuthorized = () => {
    return (
        <div className='NotAuth'>
            You have no permission to do this. Return to <Link to='/'>home page</Link>
        </div>
    )
}

export default NotAuthorized;