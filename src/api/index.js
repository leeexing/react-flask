import http from './http'

const DoubanMusicApi = {
  getIndex () {
    return http.get('/')
  },
  getMusicList (data) {
    return http.post('/list', data)
  }
}

export default DoubanMusicApi

