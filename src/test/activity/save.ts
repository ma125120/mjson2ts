import { ActivitySaveReq, Responseboolean } from '../api'
import request from '../request'

/**
* 保存活动
*/
export default function(param: ActivitySaveReq) {
	return request<ActivitySaveReq, Responseboolean>('/activity/save', 'post', param)
}