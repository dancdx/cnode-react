/**
 * 侧边划出的抽屉组件
**/ 
import React, { Component } from 'react';
import { Drawer, List, NavBar } from 'antd-mobile'
import './index.css'
import HomeList from './HomeList'

class LeftDraw extends Component {
  state = {
    open: false,
    position: 'left',
    title:'全部'
  }
  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  changeSort(obj){
    this.setState({ title: obj.name})
    this.onOpenChange()
    if(this.props.onChangeData){
      this.props.onChangeData(obj.ename
      )
    }
  }
  render() {
    const menuArr=[{name:'全部',ename:"all"},{name:'精华',ename:"good"},{name:'分享',ename:"share"},{name:'问答',ename:"ask"},{name:'招聘',ename:"job"}]
    const sidebar = (<List>
      <div className="am-list-item am-list-item-middle">登录</div>
      <div className="themeSort">板块</div>
      {menuArr.map((item,index)=>{
        return (
          <List.Item key={index} onClick={this.changeSort.bind(this,item)}>{item.name}</List.Item>
        )
      })}
    </List>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>{this.state.title}</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        {...drawerProps}
      >
        <HomeList datalist={this.props.datalist} />
      </Drawer>
    </div>);
  }
}

export default LeftDraw;
