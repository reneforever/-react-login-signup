import axios from 'axios'
import setAuthorizationToken from '../utils/setAuthorizationToken'
import { SET_CURRENT_USER } from '../constants'
import jwtDecode from 'jwt-decode'

export const setCurrentUser = (user) => {
  return {
    type:SET_CURRENT_USER,
    user
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('jwtToken')
    // 取消请求头
    setAuthorizationToken(false)
    // 清除redux数据
    dispatch(setCurrentUser({}))
  }
}

export const login = (data) => {
  return dispatch => {
    return axios.post('/api/auth',data).then(res=>{
      // 拿到token并储存到localStorage中
      const token = res.data
      localStorage.setItem('jwtToken',token)
      // 请求头携带token
      setAuthorizationToken(token)
      dispatch(setCurrentUser(jwtDecode(token)))
    })
  }
}