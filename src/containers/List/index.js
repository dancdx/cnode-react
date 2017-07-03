import React, { Component } from 'react'
import Draw from './LeftDraw'
import './index.css'

import * as api from '../../api/topics'

class List extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      data: null
    }
    this.getList = this.getList.bind(this)
  }

  // 获取主题列表
  async getList () {
    const data = await api.getTopics({
      page: 1,
      tab: 'ask',
      limit: 10
    })
    console.log(data)
    this.setState({
      data: data
    })
  } 

  componentDidMount () {
    this.getList()
  }

  render () {
    return (
      <div className="list">
        <Draw />
      </div>
    );
  }
}

export default List
