import {SET_CURRENT_USER} from '../constants'
import isEmpty from 'lodash/isEmpty'

// 初始化state
const initialState = {
  // 判断用户是否是登录态
  isAuthenticated:false,
  user:{}
}

const auth=(state=initialState,action)=>{
  switch(action.type){
    case SET_CURRENT_USER:
      return {
        isAuthenticated:!isEmpty(action.user),
        user:action.user
      }
    default:
      return state
  }
}

export default auth