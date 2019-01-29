import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import UserCard from './../UserCard/UserCard';
import './UserCards.css';
import './../../../containters/fixedBacground.css';
import { connect } from 'react-redux';
import { getAllUsers } from '../../../store/actions/userActions'

class UserCards extends Component {

    componentDidMount() {
        this.props.getAllUsers();
    }

    render() {
        let users = [];
        if (this.props.users !== undefined) {
            this.props.users.map(user => {
                users.push(<UserCard user={user} key={user.username} />)
                return user;
            })
        }
        return (
            <React.Fragment>
                <div className='UserCards fixedImage'>
                    {users}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getAllUsers
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCards);