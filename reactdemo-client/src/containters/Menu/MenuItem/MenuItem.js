import React from 'react';
import './MenuItem.css';
import { NavLink } from 'react-router-dom';
const menuItem = (props) => {
    return (
        <p className='Menu-Item'>
            <NavLink to={props.linkTo} className="linkMenuItem"
                activeStyle={{
                    fontWeight: "bold",
                    color: "rgb(173,173,173)",
                    fontSize: '35px',
                    textDecoration: 'underline'
                }}>
                {props.content}
            </NavLink >
        </p>
    )
}

export default menuItem;