import { TaskViewRequest, ResponseWxShareModel } from '../../api'
import request from '../../request'

/**
* 获取分享model
*/
export default function(param: TaskViewRequest) {
	return request<TaskViewRequest, ResponseWxShareModel>('/activity/mobile/shareModel', 'post', param)
}