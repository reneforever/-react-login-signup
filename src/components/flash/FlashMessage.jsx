import React, { Component } from 'react'
import className from 'classnames'

export default class FlashMessage extends Component {
  onClick=()=>{
    // 对于action操作的删除redux中对应数据的方法
    this.props.deleteFlashMessage(this.props.message.id)
  }
  render() {
    const {type,text} = this.props.message
    return (
      <div className={className('alert',{
        "alert-success":type==="success",
        "alert-danger":type==="danger"
      })}>
        {/* 提示文本 */}
        <button onClick={this.onClick} className="close">&times;</button>
        {text}
      </div>
    )
  }
}
