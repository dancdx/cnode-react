import React, { Component } from 'react'
import Draw from './LeftDraw'
import './index.css'

class List extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      data: null
    }
    this.getList = this.getList.bind(TouchList)
  }

  getList () {
    console.log('getList')
    this.setState({
      data: []
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
