import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../actions/login'


class NavigationBar extends Component {
  logout = (e) => {
    e.preventDefault()
    this.props.logout()
  }
  render() {
    const { isAuthenticated } = this.props.auth
    console.log(isAuthenticated);

    const userLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a href="/" className="nav-link" onClick={this.logout}>leave</a>
        </li>
      </ul>
    )

    const guestLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/signup">signup</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">login</NavLink>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {isAuthenticated ? userLinks : guestLinks}
          </div>

        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{logout})(NavigationBar)
