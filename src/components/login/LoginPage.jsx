import React, { Component } from 'react'
import LoginFrom from './LoginForm'

import {connect} from 'react-redux'
import {login} from '../../actions/login'

class LoginPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <LoginFrom login={this.props.login} />
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
}



export default connect(null,{login})(LoginPage)
