import React, { Component } from 'react'
import LeftDraw from './LeftDraw'
import './index.css'

import * as api from '../../api/topics'

class List extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      data: null
    }
    this.getList = this.getList.bind(this)
    this.changeData=this.changeData.bind(this)
    this.getLoginInfo=this.getLoginInfo.bind(this)
  }

  // 获取主题列表
  async getList (obj) {
    const data = await api.getTopics({
      page: 1,
      tab: this.props.location.state ? this.props.location.state.tab.ename: 'all',
      limit: 10,
      ...obj
    })
    console.log(data)
    this.setState({
      data: data
    })
  } 

  changeData(str){
    console.log(str)
    this.getList({page:1,tab:str})
  }

  componentDidMount () {
    this.getList()
    console.log(this.props)
  }
  getLoginInfo(){
    if(this.props.location.state){
      if(this.props.location.state.accesstoken){
        return this.props.location.state
      }
    }
    return null
  }

  render () {
    return (
      <div className="list">
        <LeftDraw datalist={this.state.data} onChangeData={this.changeData} title={this.props.location.state ? this.props.location.state.tab:{name:'全部',ename:"all"}} loginInfo={this.getLoginInfo()}/>
      </div>
    )
  }
}

export default List
