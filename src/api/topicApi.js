import http from './http'

export default {
  // *专题：
  getTopicsData (data) {
    return http.get('/api/topics', data)
  },
  getTopicsMore (data) {
    return http.get('/api/topic/more', data)
  },
  // -分类: 分类浏览
  getTagsData (data) {
    return http.get('/api/tags', data)
  },
  // -分类：所有热门标签
  getTagsHotData (data) {
    return http.get('/api/tags/cloud', data)
  },
  // -音乐标签：标签详情
  getTagDetail (tagName, data) {
    return http.get(`/api/tags/${tagName}`, data)
  },
  // -音乐标签：相关标签
  getTagRelated (tagName) {
    return http.get(`/api/tags/${tagName}/related`)
  },
  // ^主题：
  getSubjectDetail (id) {
    return http.get(`/api/subject/${id}`)
  },
}
