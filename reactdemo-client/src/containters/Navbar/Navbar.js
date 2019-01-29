import React from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
const navbar = (props) => {

    const logout = () => {
        axios.get('/user/logout')
            .then(() => {
                localStorage.setItem("username", null);
                localStorage.removeItem('token');
                window.location.replace('/')
            })
    }

    return (
        <div className="Navbar">
            <Link to='/'>
                <div className="glyphicon glyphicon-home home">
                </div>
            </Link>
            <div className="userAuth">
                {localStorage.getItem('token') === null
                    ?
                    <React.Fragment>
                        <NavLink to='/login'
                            activeStyle={{ fontWeight: 'bold' }}
                            className='Link'>Login</NavLink> | {' '}
                        < NavLink to='/register'
                            activeStyle={{ fontWeight: 'bold' }}
                            className='Link'>Register</NavLink>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <NavLink to='/profile'
                            activeStyle={{ fontWeight: 'bold', color: 'rgb(15,85,150)' }}
                            className='Link'>Profil
                        <i className="glyphicon glyphicon-user user"></i>
                        </NavLink>
                        <p onClick={logout} className='Link logout'>Logout</p>

                    </React.Fragment>
                }

            </div >
        </div >
    )
}

export default navbar;