import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import './index.css'

import * as api from '../../api/user'

class User extends Component{

  constructor () {
    super()
    this.state = {
      accesstoken: ''
    }

    this.returnList = this.returnList.bind(this)
    this.login = this.login.bind(this)
    this.setAccessToken = this.setAccessToken.bind(this)
  }

  returnList () {
    console.log(this.props)
    this.props.history.push('/list',{tab: this.props.location.state.tab})
  }

  async login () { 
    try {
      const data= await api.login({
        accesstoken: this.input.value
      })
      console.log(data)
    } catch (e) {
      Toast.info('错误的accessToken')
    }
  }

  setAccessToken (e) {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render(){
    return(
      <div className='wrap'>
        <div className='return' onClick={this.returnList.bind(this)}>
            &larr;<span>返回</span>
        </div>
        <div className='inputBox'>
          <input 
            type="text" 
            placeholder='Access Token:' 
            name='accesstoken' 
            value={this.state.accesstoken} 
            onChange={this.setAccessToken} 
          />
          <button onClick={this.login.bind(this)}>登录</button>
        </div>
      </div>
    )
  }
}

export default User
