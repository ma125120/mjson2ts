import { InvitationCodeRequest, Responsestring } from '../../api'
import request from '../../request'

/**
* 邀请码接口
*/
export default function(param: InvitationCodeRequest) {
	return request<InvitationCodeRequest, Responsestring>('/task/invitation/code', 'post', param)
}