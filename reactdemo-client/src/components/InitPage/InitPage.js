import React from 'react';
import '../../containters/fixedBacground.css';
import UserCards from './UserCards/UserCards'
const initPage = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <UserCards />
        </div>
    )
}

export default initPage