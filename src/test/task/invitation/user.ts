import { InvitationUserRequest, ResponseInvitationUserResponse } from '../../api'
import request from '../../request'

/**
* 邀请用户名单记录接口
*/
export default function(param: InvitationUserRequest) {
	return request<InvitationUserRequest, ResponseInvitationUserResponse>('/task/invitation/user', 'post', param)
}