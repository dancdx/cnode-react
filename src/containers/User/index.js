import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import * as api from '../../api/user'

class User extends Component{
  returnList(){
    console.log(this.props)
    this.props.history.push('/list',{tab: this.props.location.state.tab})
  }
  async login(){ 
  try {
    const data= await api.login({
      accesstoken:this.input.value
    })
    console.log(data)
  } catch (e) {
    //错误处理
    alert('错误的accessToken')
  }
}
  render(){
    return(
      <div className='wrap'>
        <div className='return' onClick={this.returnList.bind(this)}>
            &larr;<span>返回</span>
        </div>
        <div className='inputBox'>
          <input type="text" placeholder='Access Token:' ref={(input)=>{this.input=input}}/>
          <button onClick={this.login.bind(this)}>登录</button>
        </div>
      </div>
    )
  }
}

export default User
