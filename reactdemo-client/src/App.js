import React, { Component } from 'react';
import './App.css';
import Navbar from './containters/Navbar/Navbar';
import Menu from './containters/Menu/Menu';
import Content from './containters/Content/Content';
import { withRouter } from 'react-router-dom';
class App extends Component {

  changeRoute = (route) => {
    this.props.history.push(route)
    //this.setState({ currentClicked: route })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Menu />
        <Content />
      </div>
    );
  }
}

export default withRouter(App);
