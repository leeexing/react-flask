import http from './http'

const DoubanMusicApi = {
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
  // !右边
  getJoinInfo () { // ^我要加入
    return http.get('/joinInfo')
  },
  getPopularSongs (data) {
    return http.get('/reactRenderData', data)
  },
  getDouban250 (data) {
    return http.get('/douban250', data)
  },
}

export default DoubanMusicApi
