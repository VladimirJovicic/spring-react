import React from 'react';
import './Content.css'
import Articles from '../Articles/Articles'
import { Route, Switch } from 'react-router-dom';
import InitPage from '../../components/InitPage/InitPage';
import FullArticle from './../Articles/FullArticle/FullArticle';
import './../fixedBacground.css';
import Register from '../../components/Auth/Register/Register';
import Login from '../../components/Auth/Login/Login';
import Profile from '../../components/Profile/Profile';
import NewSection from '../../components/NewSection/NewSection'
const content = () => {
    return (
        <div className="Content fixedImage">
            <Switch>
                <Route path={'/sections/article/:id'} component={FullArticle} />
                <Route path={'/sections/:id'} component={Articles} />
                <Route path={'/register'} component={Register} />
                <Route path={'/login'} component={Login} />
                <Route path={'/profile'} component={Profile} />
                <Route path={'/new-section'} component={NewSection} />
                <Route exact path={'/'} component={InitPage} />
            </Switch>
        </div>
    )
}
export default content;