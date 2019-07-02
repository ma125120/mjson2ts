import { InvitationTaskUpdateRequest, ResponseInvitationTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 编辑拉新任务
*/
export default function(param: InvitationTaskUpdateRequest) {
	return request<InvitationTaskUpdateRequest, ResponseInvitationTaskViewResponse>('/task/invitation/update', 'post', param)
}