import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTag } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { getList } from '@/store/broadcast/action'

import './index.less'

@connect(({ broadcast }) => ({
  broadcast
}), {
  dispatchGetBroadcastList: getList
})

class Index extends Component {
  config = {
    navigationBarTitleText: '高校通',
    navigationBarBackgroundColor: '#3a9cf3',
    navigationBarTextStyle: 'white'
  }

  constructor(props) {
    super(props)
    this.state = {
      swiperList: [{
        img: 'https://s2.ax1x.com/2019/08/04/e6x94U.jpg',
      }, {
        img: 'https://s2.ax1x.com/2019/08/04/e6x94U.jpg',
      }, {
        img: 'https://s2.ax1x.com/2019/08/04/e6x94U.jpg',
      }]
    }
  }

  componentDidMount () {
    // 获取广播轮播
    this.props.dispatchGetBroadcastList()
  }

  /**
   * 轮播图片点击回调
   */
  handleSwiperClick (item) {
    console.log(item)
  }

  render () {
    return (
      <View className='index'>
        <Swiper
          className='swiper'
          indicatorColor='#bfc7d0'
          indicatorActiveColor='#fff'
          circular
          indicatorDots
          autoplay
          interval='5000'
        >
        {
          this.state.swiperList.map(item => {
            return <SwiperItem
              key={item.img}
              className='swiper-item'
            >
              <Image
                onClick={this.handleSwiperClick.bind(this, item)}
                className='swiper-img'
                src={item.img}
              ></Image>
            </SwiperItem>
          })
        }
        </Swiper>

        <Swiper
          className='swiper-broadcast'
          circular
          autoplay
          vertical
          interval='3000'
        >
        {
          this.props.broadcast.list.map(item => {
            return <SwiperItem
              key={item}
              className='swiper-item'
            >
              <View className='broadcast-item'>
                <AtTag
                  className='broadcast-tag'
                  size='small'
                  circle
                >{item.type}</AtTag>
                <View className='info-wrap'>
                  <View className='inner-info'>{ item.message }</View>
                </View>
              </View>
            </SwiperItem>
          })
        }
        </Swiper>

        <View className='btn-group'>
          <Button className='btn'>查询大学</Button>
          <Button className='btn'>查分数线</Button>
          <Button className='btn'>查假大学</Button>
        </View>
      </View>
    )
  }
}

export default Index
