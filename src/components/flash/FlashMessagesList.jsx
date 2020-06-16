import React, { Component } from 'react'
import FlashMessage from './FlashMessage' 
import {connect} from "react-redux"
// 引入删除方法
import {deleteFlashMessage} from '../../actions/flashMessages'

class FlashMessagesList extends Component {
  render() {
    // message是数组格式，所以需要遍历
    const messages = this.props.messages.map(message => {
     return <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    })
    return (
      <div className='container'>
          {messages}
      </div>
    )
  }
}

const mapStateToProps =(state)=> {
  return{
    messages:state.flashMessages
  }
}

export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessagesList)
