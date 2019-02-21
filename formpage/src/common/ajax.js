/**
 * Created by songali on 19/2/21.
 */
// 该文件用于统一ajax请求入口 建议异步请求应先在此处做相应配置
import axios from 'axios'

const urls = {
  TESTGET: '/testCreateOrder/my',
  TESTPOST: '/testCreateOrder/another'
}

const getTest = (rawparam) => {
  let params = {
    name: 'aleee'
  }
  let url = urls.TESTGET
  return axios.get(url, {params})
}

const postTest = () => {
  let params = {
    name: 'aleee'
  }
  let options = {
    method: 'POST',
    headers: { 'x-csrf-token': 'mytokkksnnnfnnn' },
    data: params,
    url: urls.TESTPOST
  }
  return axios(options)
}

export {
  getTest,
  postTest
}