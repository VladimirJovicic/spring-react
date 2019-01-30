import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class RoleRoute extends React.Component {
    renderRoute = () => {
        if (localStorage.getItem('token') === null || localStorage.getItem('role') !== this.props.roleName) {
            return <Redirect to='/not-authorized' />
        }
        const Component = this.props.component;
        return (
            <Component {...this.props} />
        );
    }

    render() {
        return (
            <Route
                render={this.renderRoute}
            />
        );
    }
}

export default RoleRoute;