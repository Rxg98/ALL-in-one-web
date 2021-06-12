import request from '@/utils/request'
import qs from 'qs'

export const login = data => {
  return request({
    method: 'POST',
    url: '/front/user/login',
    data: qs.stringify(data)
  })
}
