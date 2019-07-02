import { Request, ResponseListActivityDetailMobileResponse } from '../../api'
import request from '../../request'

/**
* 获取用户最新参与的活动
*/
export default function(param: Request) {
	return request<Request, ResponseListActivityDetailMobileResponse>('/activity/mobile/userActivity', 'post', param)
}