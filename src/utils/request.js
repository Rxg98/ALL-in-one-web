import axios from 'axios'

const request = axios.create({
})

function getBaseURL (url) {
  if (url.startsWith('/boss')) {
    return 'http://eduboss.lagou.com'
  } else {
    return 'http://edufront.lagou.com'
  }
}

// 请求拦截器
request.interceptors.request.use(function (config) {
  config.baseURL = getBaseURL(config.url)
  return config
})

export default request
