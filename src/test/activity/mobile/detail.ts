import { ActivityOperateReq, ResponseActivityDetailMobileResponse } from '../../api'
import request from '../../request'

/**
* 活动明细
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, ResponseActivityDetailMobileResponse>('/activity/mobile/detail', 'post', param)
}