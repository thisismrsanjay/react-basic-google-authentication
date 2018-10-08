import React, { Component } from "react";
import logo from '../logo.svg'

class Navbar extends Component {

  //this.props allows to send function
  // componentDidMount(){
  //   console.log(this.props);
  // }

 


  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          React-Basics
        </a>
        <ul className="navbar-nav ml-auto">
        
          {/* { console.log(this.props.state.isLoggedIn)} */}
          {this.props.state.isLoggedIn?
            <span> 
            <li className="nav-item"><a className="  nav-link" onClick={this.props.logout}>Logout</a> </li>
            <a className="navbar-brand" href="#">
            <img src={this.props.state.user.image} width="30" height="30" alt=""/>
            </a>
            <li className="nav-item"><a className="  nav-link" > {this.props.state.user.name}</a> </li>  </span>:  
            <li className="nav-item"><a className=" button nav-link" onClick={this.props.login}>Login</a> </li>}

        </ul>
      </nav>
    );
  }
}

export default Navbar;