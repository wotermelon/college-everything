/* eslint-disable import/prefer-default-export */
import { GET_LIST } from "./action-type";
// import API from '../../service/api'

export const getList = () => {
  return async dispatch => {
    // const result = await API.get()

    dispatch({
      type: GET_LIST,
      list: [{
        type: 'NEW',
        message: '最新资讯：2019高考  什么是平行志愿？1111111111111111111119高考  什么是平行志19高考  什么是平行志'
      }, {
        type: 'NEW',
        message: '最新资讯：2019高考  什么是平行志愿？'
      }]
    })
  }
}
