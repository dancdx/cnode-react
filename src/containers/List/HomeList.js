import React, { Component } from 'react'
import { List } from 'antd-mobile'
import './index.css'

class HomeList extends Component {
  constructor (props) {
    super(props)
    this.renderList = this.renderList.bind(this)
  }

  renderList () {
    if (!this.props.datalist) return null
    return (
      this.props.datalist.map((item, index) => 
        <List.Item key={item.id}>
          {item.title}
        </List.Item>
      )
    )
  }

  render () {
    return (
      <List>
        {this.renderList()}
      </List>
    );
  }
}

export default HomeList
