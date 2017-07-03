import request from './request'

/**
 * 获取主题列表
 * @ option 
 * page Number 页数
 * tab String 主题分类。目前有 ask share job good
 * limit Number 每一页的主题数量
 * mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
 */ 
export const getTopics = (param) => {
  return request.get({
    url: '/topics',
    param: param
  })
}
