import React, { Component } from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'
// 引入input输入框是否为空验证
import validateInput from '../../utils/validations/login'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    }
  }

  isValid = (e) => {
    const { errors, isValid } = validateInput(this.state)
    if (!isValid) {
      this.setState({ errors })
    }
    return isValid
  }

  onSubmit = (e) => {
    e.preventDefault()
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.login(this.state)
        .then(
          () => this.props.history.push('/'),
          ({ response }) => { this.setState({ errors: response.data.errors, isLoading: false }) }
        )
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }



  render() {
    const { username, password, errors, isLoading } = this.state
    return (
      <form action="" onSubmit={this.onSubmit}>
        <h1>Login</h1>
        {errors.form && <div className="alert alert-danger">{errors.form}</div>}
        {/* 用户名 */}
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.onChange}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.username })}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>

        {/* 密码 */}
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.password })}
          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        <div>
          <div className="form-group">
            <button disabled={isLoading} className="btn btn-primary btn-lg">登录</button>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(LoginForm)