import React, { Component } from 'react'
import { List } from 'antd-mobile'
import moment from 'moment'
import 'moment/locale/zh-cn'
import { Link } from 'react-router-dom'
import './index.css'

moment.locale('zh-cn')
class HomeList extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }

  renderSort (obj) {
    if (obj.top) {
      return '置顶'
    } else if (!obj.top && obj.good) {
      return '精华'
    } else if (!obj.top && !obj.good) {
      switch (obj.tab) {
        case 'share':
          return '分享'
        case 'ask':
          return '问答'
        case 'job':
          return '招聘'
      }
    }
  }
  renderTime (str) {
    var m = moment(str)
    return m.fromNow()
  }
  renderList () {
    if (!this.props.datalist) return null
    return (
      this.props.datalist.map((item, index) =>        
        <List.Item key={item.id}>
          <Link to={{pathname:'/detail'}} >
            <div className='articleTitle'>{item.title}</div>
            <div className='articleMessage'>
              <span className={(item.good || item.top) ? 'changeGreen articleSort' : 'articleSort'}>{this.renderSort({top: item.top, good: item.good, tab: item.tab})}</span>
              <span className='articleAuthorName'>{item.author.loginname}</span>
              <span className='articleTime'>{this.renderTime(item.create_at)}</span>
            </div>
          </Link>
        </List.Item>        
      )
    )
  }

  render () {
    return (
      <List>
        {this.renderList()}
      </List>
    )
  }
}

export default HomeList
