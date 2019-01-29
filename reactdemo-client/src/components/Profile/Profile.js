import React, { Component } from 'react'
import axios from 'axios';
import './Profile.css';
import { connect } from 'react-redux';
import { getOneUser } from '../../store/actions/userActions'
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            currentProfilePic: null,
        };
    }

    componentDidMount() {
        this.props.getOneUser();
    }













    uploadFile = (event) => {
        const file = event.target.files[0];
        if (file !== undefined) {
            let reader = new FileReader();

            reader.onloadend = () => {
                this.setState({
                    currentProfilePic: reader.result,
                });
            }

            reader.readAsDataURL(file)
            let data = new FormData();
            data.append('file', file);
            data.append('name', file.name);
            axios.post('user/changePicture', data)
                .catch(err => {
                    //this.setState({ error: err });
                });
        }
    }

    render() {
        return (
            <div className="Profile">
                {this.props.user !== undefined ?
                    <React.Fragment>
                        <div className="ProfileInfo">
                            <p><b>Username:</b> {this.props.user.username}</p>
                            <p><b>Ime:</b> {this.props.user.name}</p>
                            <p><b>Prezime:</b> {this.props.user.surname}</p>
                            <p><b>Uloga:</b> {this.props.user.role}</p>
                            <p><b>Email:</b> {this.props.user.email}</p>
                            <p><b>Kontakt telefon:</b> {this.props.user.phone}</p>
                        </div>
                        <div className="ProfilePic">
                            {this.props.user.profilePic
                                ? (
                                    <img
                                        src={
                                            this.state.currentProfilePic ||
                                            ("data:image/jpeg;base64, " + this.props.user.profilePic)
                                        }
                                        alt={'Profilna'}
                                        className='Picture'
                                    />
                                )
                                : null}
                            <label className="custom-file-upload">
                                <input type="file" onChange={this.uploadFile} accept="image/*" />
                                Promeni sliku
                    </label>
                        </div>

                        <hr />
                    </React.Fragment>
                    : 'loding...'
                }
            </div >

        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOneUser: () => dispatch(getOneUser())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);