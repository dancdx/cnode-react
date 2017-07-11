/**
 * 侧边划出的抽屉组件
**/ 
import React, { Component } from 'react';
import { Drawer, List, NavBar } from 'antd-mobile'
import HomeList from './HomeList'
import { Link } from 'react-router-dom'
import './index.css'

class LeftDraw extends Component {
  constructor(props){
    super(props)
    this.renderLoginPart=this.renderLoginPart.bind(this)
    this.state={
      open: false,
      position: 'left',
      title:this.props.title
    }
  }

  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
  }
  changeSort(obj){
    this.setState({ title: obj})
    this.onOpenChange()
    if(this.props.onChangeData){
      this.props.onChangeData(obj.ename
      )
    }
  }
  renderLoginPart(){
    console.log(this.props.loginInfo)
    if(this.props.loginInfo){      
      return(
        <div>
          <Link to={{pathname: '/user', state: {tab:this.state.title}}} >
          <div className="am-list-item am-list-item-middle am-list-line" >{this.props.loginInfo.loginInfo.loginname}</div>
          </Link>
          <Link to={{pathname: '/user', state: {tab:this.state.title}}} >
          <div className="am-list-item am-list-item-middle" >我的消息</div>
          </Link>
        </div>
      )      
    }
    return (
      <div>
        <Link to={{pathname: '/user', state: {tab:this.state.title}}} >
          <div className="am-list-item am-list-item-middle " >登录</div>
        </Link>
      </div>
    )
    
  }
  render() {
    const menuArr=[{name:'全部',ename:"all"},{name:'精华',ename:"good"},{name:'分享',ename:"share"},{name:'问答',ename:"ask"},{name:'招聘',ename:"job"}]
    const sidebar = (<List>
      {this.renderLoginPart()}
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
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>{this.state.title.name}</NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight - 200 }}
        dragHandleStyle={{ display: 'none' }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        {...drawerProps}
      >
        <HomeList datalist={this.props.datalist} sort={this.state.title}/>
      </Drawer>
    </div>);
  }
}

export default LeftDraw;
