import http from './http'

const DoubanMusicApi = {
  // !右边
  getJoinInfo () { // ^我要加入
    return http.get('/joinInfo')
  },
  getWeekPopularSongs (data) {
    return http.get('/weekPopularSongs', data)
  },
  getDouban250 (data) {
    return http.get('/douban250', data)
  },
  // !左边
  getTopBannerImgs (data) { // ^头部轮播图
    return http.get('/topBanner', data)
  },
  getPopularArtists (data) {
    return http.get('/popularArtist', data)
  },
  getEditorFeatureSongs (data) {
    return http.get('/editorFeature', data)
  },
}

export default DoubanMusicApi
