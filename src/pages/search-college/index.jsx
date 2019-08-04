import Taro, { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtTag } from 'taro-ui'
import 'taro-ui/dist/style/index.scss'
import { getList } from '../../store/broadcast/action'

import './index.less'

@connect(({ broadcast }) => ({
  broadcast
}), {
  dispatchGetBroadcastList: getList
})

class SearchCollege extends Component {
  config = {
    navigationBarTitleText: '查大学',
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

      </View>
    )
  }
}

export default SearchCollege
