import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import './index.css'

class Detail extends Component {
  constructor () {
    super()
  }
  onReturn () {
    window.history.go(-1)
  }
  render () {
    return (
      <div>
        <NavBar leftContent='返回' onLeftClick={this.onReturn.bind(this)}>详情</NavBar>
        <div className='articleContent'>
          <h3 className='articleTitle'>{this.props.location.state.title}</h3>
          <div className='articleAuthorInfo'>
            <span className='avatar'><img src={this.props.location.state.avatar} alt='' /></span>
            <span className='authorName'>{this.props.location.state.name}</span>
            <span className='createTime'>{this.props.location.state.time}</span>
          </div>
          <div className='mainArticle' dangerouslySetInnerHTML={{__html: this.props.location.state.content}} />
        </div>
      </div>
    )
  }
}

export default Detail
