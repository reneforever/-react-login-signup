import validator from 'validator'
import isEmpty from 'lodash/isEmpty'

// 验证login输入框是否为空
const validateInput = (data) => {
  let errors = {}
  if(validator.isEmpty(data.username)){
    errors.username = '请输入用户名'
  }
  if(validator.isEmpty(data.password)){
    errors.password = '请输入密码'
  }

  return {
    errors,
    isValid:isEmpty(errors)
  }
}

export default validateInput
