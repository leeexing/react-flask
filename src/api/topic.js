import http from './http'

export default {
  getTopicsData (data) {
    return http.get('/api/topics', data)
  },
  getTopicsMore (data) {
    return http.get('/api/topic/more', data)
  },
  // -分类
  getTagsData (data) {
    return http.get('/api/tags', data)
  },
}
