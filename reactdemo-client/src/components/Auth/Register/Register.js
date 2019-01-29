import React, { Component } from 'react';
import './../Auth.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
class Register extends Component {

    state = {
        newUser: {
            name: "",
            surname: "",
            username: "",
            password: "",
            email: "",
            phone: ""
        },
        passwordRepeat: "",
        validInputs: {
            name: true,
            surname: true,
            username: true,
            password: true,
            email: true,
            phone: true
        },
        userNameExists: false,
        emailExists: false
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        if (this.state.passwordRepeat !== this.state.newUser['password']) {
            alert('sifre nisu iste')
        } else {
            if (this.formIsValid(this.state.newUser)) {
                axios.post('/user/register', this.state.newUser)
                    .then(() => {
                        this.props.history.replace('/login');
                        window.location.reload();
                    })
                    .catch(err => {
                        if (err.response.data === 'USERNAME_EXISTS') {
                            //alert('username postoji...')
                            this.setState({ userNameExists: true })
                        }
                        if (err.response.data === 'EMAIL_EXISTS') {
                            //alert('email postoji...')
                            this.setState({ emailExists: true })
                        }
                    })
            }
        }
    }

    onChangeHandler = (event, type) => {
        if (type === 'username') {
            this.setState({ userNameExists: false })
        }
        if (type === 'email') {
            this.setState({ emailExists: false })
        }
        this.setState({
            newUser: {
                ...this.state.newUser,
                [type]: event.target.value
            },
            validInputs: {
                ...this.state.validInputs,
                [type]: true
            }
        })
    }

    formIsValid = (newUser) => {
        //Sconsole.log(this.state.validInputs)
        let retVal = true;
        let mapOfValidators = {
            name: true,
            surname: true,
            username: true,
            password: true,
            email: true,
            phone: true
        }
        if (newUser['username'].trim().length < 6) {
            mapOfValidators['username'] = false
            retVal = false
        }

        if (newUser['name'].trim().length === 0) {
            mapOfValidators['name'] = false
            retVal = false;
        }

        if (newUser['surname'].trim().length === 0) {
            mapOfValidators['surname'] = false
            retVal = false
        }
        if (newUser['email'].trim().length === 0) {
            mapOfValidators['email'] = false
            retVal = false
        }
        if (newUser['password'].trim().length < 8) {
            mapOfValidators['password'] = false
            retVal = false
        }

        if (newUser['phone'].trim().length < 5) {
            mapOfValidators['phone'] = false
            retVal = false
        }
        this.setState({ validInputs: mapOfValidators })
        return retVal;
    }

    render() {
        return (
            <div className='Auth-container'>
                <form className='Form' onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control InputForm"
                            placeholder="Enter username"
                            onChange={(event) => this.onChangeHandler(event, 'username')}
                            value={this.state.newUser.username} />
                        {!this.state.validInputs['username']
                            ? <p className="NotValidMessage">Username must contain at least 6 characters</p> : null}
                        {this.state.userNameExists
                            ? <p className="NotValidMessage">A user with the same username alredy exists</p> : null}
                    </div>

                    <div className="form-group">
                        <label >First name</label>
                        <input type="text" className="form-control InputForm"
                            placeholder="Enter your first name"
                            onChange={(event) => this.onChangeHandler(event, 'name')}
                            value={this.state.newUser.name} />
                        {!this.state.validInputs['name']
                            ? <p className="NotValidMessage">Please enter a name</p> : null}
                    </div>

                    <div className="form-group">
                        <label >Last name</label>
                        <input type="text" className="form-control InputForm"
                            placeholder="Enter your last name"
                            onChange={(event) => this.onChangeHandler(event, 'surname')}
                            value={this.state.newUser.surname} />
                        {!this.state.validInputs['surname']
                            ? <p className="NotValidMessage">Please enter a name</p> : null}
                    </div>

                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" className="form-control InputForm"
                            aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={(event) => this.onChangeHandler(event, 'email')}
                            value={this.state.newUser.email} />
                        {!this.state.validInputs['email']
                            ? <p className="NotValidMessage">Please enter a name</p> : null}
                        {this.state.emailExists
                            ? <p className="NotValidMessage">A user with the same email adress alredy exists</p> : null}
                    </div>

                    <div className="form-group">
                        <label >Phone number</label>
                        <input type="text" className="form-control InputForm"
                            placeholder="Enter your phone number"
                            onChange={(event) => this.onChangeHandler(event, 'phone')}
                            value={this.state.newUser.phone} />
                        {!this.state.validInputs['phone']
                            ? <p className="NotValidMessage">Please enter a phone number</p> : null}
                    </div>




                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control InputForm"
                            placeholder="Enter Password"
                            onChange={(event) => this.onChangeHandler(event, 'password')}
                            value={this.state.newUser.password} />
                        {!this.state.validInputs['password']
                            ? <p className="NotValidMessage">Password must be at least 8 characters long</p> : null}
                    </div>

                    <div className="form-group">
                        <label>Repeat password</label>
                        <input type="password" className="form-control InputForm"
                            placeholder="Repeat password"
                            onChange={(event) => this.setState({ passwordRepeat: event.target.value })}
                            value={this.state.passwordRepeat} />
                    </div>
                    <p style={{ fontSize: '20px', display: 'table', margin: 'auto' }}>Have an account? <Link to='login'>Login</Link></p>
                    <button className="btn btn-primary FormButton">Submit</button>
                </form>
            </div>
        )

    }
}

export default Register;