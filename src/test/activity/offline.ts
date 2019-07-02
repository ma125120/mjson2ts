import { ActivityOperateReq, Responseboolean } from '../api'
import request from '../request'

/**
* 活动结束
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, Responseboolean>('/activity/offline', 'post', param)
}