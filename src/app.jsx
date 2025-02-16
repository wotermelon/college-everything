import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/search-college/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#3a9cf3',
      selectedColor: '#3a9cf3',
      backgroundColor: '#ffffff',
      color: '#333333',
      list: [{
        pagePath: 'pages/index/index',
        selectedIconPath: './assets/image/tab/icon-search-active.png',
        iconPath: './assets/image/tab/icon-search.png',
        text: '查询'
      }, {
        pagePath: 'pages/index/index',
        selectedIconPath: './assets/image/tab/icon-info-active.png',
        iconPath: './assets/image/tab/icon-info.png',
        text: '资讯'
      }, {
        pagePath: 'pages/index/index',
        selectedIconPath: './assets/image/tab/icon-me-active.png',
        iconPath: './assets/image/tab/icon-me.png',
        text: '我的'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
