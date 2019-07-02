import { TaskViewRequest, Responseboolean } from '../api'
import request from '../request'

/**
* 删除任务
*/
export default function(param: TaskViewRequest) {
	return request<TaskViewRequest, Responseboolean>('/task/delete', 'post', param)
}