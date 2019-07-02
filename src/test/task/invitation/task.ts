import { QueryInvitationTaskRequest, ResponseQueryInvitationTaskResponse } from '../../api'
import request from '../../request'

/**
* 获取拉新任务接口
*/
export default function(param: QueryInvitationTaskRequest) {
	return request<QueryInvitationTaskRequest, ResponseQueryInvitationTaskResponse>('/task/invitation/task', 'post', param)
}