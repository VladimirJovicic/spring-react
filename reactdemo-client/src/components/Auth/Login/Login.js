import React, { Component } from 'react';
import './../Auth.css';
import axios from 'axios';
class Login extends Component {

    state = {
        loginRequest: {
            username: '',
            password: ''
        }
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        axios.post('/user/login', this.state.loginRequest)
            .then((response) => {
                localStorage.setItem('token', response.data['accessToken'])
                localStorage.setItem('username', this.state.loginRequest.username);
                localStorage.setItem('role', response.data['role']);
                this.props.history.replace('/');
                window.location.reload();
            })
            .catch(err => {
                console.log("GRESKA", err);
            })
    }

    onChangeHandler(event, type) {
        this.setState({
            loginRequest: {
                ...this.state.loginRequest,
                [type]: event.target.value
            }
        })
    }

    render() {
        return (
            <div className='Auth-container'>
                <form className='Form' onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control InputForm"
                            /* aria-describedby="emailHelp" */ placeholder="Enter username"
                            onChange={(event) => { this.onChangeHandler(event, 'username') }}
                            value={this.state.loginRequest.username} />
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control InputForm"
                            placeholder="Password"
                            onChange={(event) => { this.onChangeHandler(event, 'password') }}
                            value={this.state.loginRequest.password} />
                    </div>
                    <button className="btn btn-primary FormButton">Submit</button>
                </form>
            </div >

        )
    }

}

export default Login;