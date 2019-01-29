import React from 'react';
import './UserCard.css'
const userCard = (props) => {
    return (
        <div className="UserCard">
            <p>{props.user.name}  {props.user.surname}</p>
            <img src={"data:image/jpeg;base64, " + props.user.profilePic}
                alt={'Profile'} style={{ minWidth: '0px', width: '150px', height: '150px' }} />
            <br />
            <button className='btn btn-primary'>Visit profile</button>
        </div>
    );
}

export default userCard;