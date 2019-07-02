import { TaskViewRequest, ResponsePuzzleTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 查看解谜任务
*/
export default function(param: TaskViewRequest) {
	return request<TaskViewRequest, ResponsePuzzleTaskViewResponse>('/task/puzzle/view', 'post', param)
}