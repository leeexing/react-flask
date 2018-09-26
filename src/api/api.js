import http from './http'

const DoubanMusicApi = {
  // *首页左侧数据
  getHomePageData () {
    return http.get('/api/home')
  },
  // *首页react相关组件渲染数据
  getHomeReactData () {
    return http.get('/api/home/reactData')
  },
  // *左边
  getTopBannerImgs () { // ^头部轮播图
    return http.get('/topBanner')
  },
  getPopularArtists () { // ^本周流行音乐人
    return http.get('/popularArtist')
  },
  getEditorFeatureSongs () { // ^编辑推荐
    return http.get('/editorFeature')
  },
  // *右边
  getJoinInfo () { // ^我要加入
    return http.get('/joinInfo')
  },
  getDouban250 () { // ^豆瓣音乐250
    return http.get('/douban250')
  },
  // *单独使用react方式渲染出来的data
  getPopularSongs () { // ^新碟版、近期热门歌单、本周单曲榜
    return http.get('/reactRenderData')
  },
}

export default DoubanMusicApi
