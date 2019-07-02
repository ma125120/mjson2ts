import { TaskViewRequest, Responseboolean } from '../api'
import request from '../request'

/**
* 批量发放资格
*/
export default function(param: TaskViewRequest) {
	return request<TaskViewRequest, Responseboolean>('/task/batch', 'post', param)
}