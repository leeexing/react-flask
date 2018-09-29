import React, { Component } from 'react'
import { Row, Col, Carousel, Card, Skeleton  } from 'antd'
import api from '@/api'
import 'styles/topic.less'

class Topic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 1,
      banner: '',
      topics: []
    }
    this.loadMore = this.loadMore.bind(this)
  }
  componentDidMount () {
    api.getTopicsData().then(res => {
      if(res.result) {
        this.setState({
          banner: res.data.slideTrack,
          topics: res.data.topics
        })
      }
    })
  }
  loadMore () {
    this.setState({
      page: this.state.page + 1
    }, () => {
      let data = {
        start: (this.state.page - 1) * 8,
        limit: this.state.page * 8
      }
      api.getTopicsMore(data).then(res => {
        if (res.result) {
          this.setState({
            topics: [...this.state.topics, ...res.data.topicsMore]
          })
        }
      })
    })
  }
  render () {
    const headerStyle = {
      position: 'absolute',
      bottom: '90px',
      width: '100%',
      border: 'none',
      background:'rgba(59,59,59,0.7)',
      color: '#1FD5A8',
    }
    return (
      <div className="app-home m-topic">
        {this.state.banner === ''
          ? <Skeleton/>
          : <Carousel>
              <div>
                <img src={this.state.banner} alt=""/>
              </div>
            </Carousel>
        }
        <div className="seperate">全部专题</div>
        <Row type="flex" gutter={40}>
          {this.state.topics.length < 1
            ? <Skeleton/>
            : this.state.topics.map((topic, index) => (
                <Col span={12} key={index} style={{marginBottom: '30px'}}>
                  <Card
                    hoverable
                    title={topic.coverText}
                    headStyle={{...headerStyle, position: topic.cover === '' ? 'relative' : 'absolute', bottom: topic.cover === '' ? '' : '90px'}}
                    bodyStyle={{height: '90px'}}
                    cover={<img src={topic.cover} alt=""/>}
                  >
                    <Card.Meta
                      title={topic.topicInfo}
                      description={topic.topicTime}
                    ></Card.Meta>
                  </Card>
                </Col>
              ))
          }
        </Row>
        <div className="load-more">
          <a onClick={this.loadMore}>加载更多</a>
        </div>
      </div>
    )
  }
}

export default Topic
