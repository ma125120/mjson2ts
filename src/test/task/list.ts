import { TaskListRequest, ResponsePageTaskListResponse } from '../api'
import request from '../request'

/**
* 任务列表
*/
export default function(param: TaskListRequest) {
	return request<TaskListRequest, ResponsePageTaskListResponse>('/task/list', 'post', param)
}