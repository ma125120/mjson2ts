import { ActivityOperateReq, Responseboolean } from '../api'
import request from '../request'

/**
* 活动上线
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, Responseboolean>('/activity/online', 'post', param)
}