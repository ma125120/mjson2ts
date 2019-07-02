import { ActivityTaskViewRequest, ResponseTaskResponse } from '../../api'
import request from '../../request'

/**
* C端-获取任务列表接口
*/
export default function(param: ActivityTaskViewRequest) {
	return request<ActivityTaskViewRequest, ResponseTaskResponse>('/task/task/list', 'post', param)
}