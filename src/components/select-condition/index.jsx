import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import PropTypes from "prop-types";

import "./index.scss";

export default class BookCard extends Component {
  static options = {
    addGlobalClass: true
  };

  static defaultProps = {
    data: {},
    showArrow: true,
    onLongPress: () => {}
  };

  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.url
    }),
    showArrow: PropTypes.bool,
    onLongPress: PropTypes.func
  };

  render() {
    return (

    )
  }
}
