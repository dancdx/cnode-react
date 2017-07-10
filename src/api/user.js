import request from './request'

/**
 * 验证用户accessToken
 * @ option 
 * mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */ 
export const login = (param) => {
  return request.post({
    url: '/accesstoken',
    param: param
  })
}
