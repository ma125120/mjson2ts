import { InvitationTaskCreateRequest, ResponseInvitationTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 创建拉新任务
*/
export default function(param: InvitationTaskCreateRequest) {
	return request<InvitationTaskCreateRequest, ResponseInvitationTaskViewResponse>('/task/invitation/create', 'post', param)
}