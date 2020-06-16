import React, { Component } from 'react'
import classnames from 'classnames'
import { withRouter } from 'react-router-dom'


class SignupForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      // 按钮是否可以操作
      isLoading: false,
      // 加上username判断后的按钮操作判断
      invalid: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  checkUserExists=(e)=>{
    const field = e.target.name //errors数组中的['username']
    const val = e.target.value
    let invalid
    // 验证用户是否输入内容
    if(val !== ''){
      this.props.signupActions.isUserExists(val)
      .then(res=>{
        let errors = this.state.errors
        if(res.data[0]){
          errors[field] = '用户名已存在:' + val
          invalid = true
        }else{
          errors = ''
          invalid = false
        }
        this.setState({errors,invalid})
      })

    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    this.setState({
      errors: {},
      isLoading: true
    })
    console.log(this.props.signupActions);
    this.props.signupActions.userSignupRequest(this.state)
      .then(
        () => {
          // 添加数据到redux
          this.props.flashActions.addFlashMessage({
            type: 'success',
            text: '注册成功，欢迎你的加入！'
          })
          this.props.history.push("/")
        },
        ({ response }) => { this.setState({ errors: response.data, isLoading: false }) }
      )
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    // 读取this.state中的变量，简化调用
    const { errors, isLoading, invalid } = this.state
    return (
      <form action="" onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        {/* 用户名 */}
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChange}
            onBlur={this.checkUserExists}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.username })}
          />
          {errors.username && <span className="form-text text-muted">{errors.username}</span>}
        </div>
        {/* 邮箱 */}
        <div className="form-group">
          <label className="control-label">Email</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.email })}
          />
          {errors.email && <span className="form-text text-muted">{errors.email}</span>}
        </div>
        {/* 密码 */}
        <div className="form-group">
          <label className="control-label">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.password })}

          />
          {errors.password && <span className="form-text text-muted">{errors.password}</span>}
        </div>
        {/* 确认密码 */}
        <div className="form-group">
          <label className="control-label">passwordConfirmation</label>
          <input
            type="password"
            name="passwordConfirmation"
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            //  className="form-control"
            className={classnames('form-control', { "is-invalid": errors.passwordConfirmation })}

          />
          {errors.passwordConfirmation && <span className="form-text text-muted">{errors.passwordConfirmation}</span>}
        </div>
        <div>
          <div className="form-group">
            <button disabled={isLoading||invalid} className="btn btn-primary btn-lg">注册</button>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(SignupForm)