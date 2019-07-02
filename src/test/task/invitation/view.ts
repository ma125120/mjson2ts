import { TaskViewRequest, ResponseInvitationTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 查看拉新任务
*/
export default function(param: TaskViewRequest) {
	return request<TaskViewRequest, ResponseInvitationTaskViewResponse>('/task/invitation/view', 'post', param)
}