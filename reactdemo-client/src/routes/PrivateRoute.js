import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends React.Component {
    renderRoute = () => {
        if (localStorage.getItem('token') === null) {
            return <Redirect to='/not-auth' />
        }
        const Omponent = this.props.component;
        return (
            <Omponent {...this.props} />
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

export default PrivateRoute;