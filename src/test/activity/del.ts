import { ActivityOperateReq, Responseboolean } from '../api'
import request from '../request'

/**
* 删除活动
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, Responseboolean>('/activity/del', 'post', param)
}