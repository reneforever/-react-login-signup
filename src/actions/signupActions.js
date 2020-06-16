import axios from 'axios'

// 异步请求都写在actions中
export const userSignupRequest = (userData) => {
  return dispatch => {
    return axios.post('/api/users',userData)
  }
}

export const isUserExists = (username) => {
  return dispatch => {
    return axios.get(`/api/users/${username}`,username)
  }
}