import 'whatwg-fetch'
import qs from 'qs'

const parseJSON = (response) => {
  return response.json()
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

const baseUrl = 'https://cnodejs.org/api/v1'

const request = async (url, options) => {
  try {
    let response = await fetch(baseUrl + url, options)
    response = checkStatus(response)
    return parseJSON(response)
  } catch(e) {
    throw new Error('接口异常: ' + e)
  }
  
}
/**
 * @options {url: 'xxx', param: {a: xxx, b: xxx}}
 */ 
request.get = async (options) => {
  const data = await request(`${options.url}?${qs.stringify(options.param)}`)
  if (data.success) return data.data
  else throw new Error('接口异常: success => false')
}

request.post = async (options) => {
  const data = await request(options.url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options.param)
  })
  if (data.success) return data.data
  else throw new Error('接口异常: success => false')
}

export default request
