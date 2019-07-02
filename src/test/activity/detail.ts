import { ActivityOperateReq, ResponseActivityDetailResponse } from '../api'
import request from '../request'

/**
* 活动详情
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, ResponseActivityDetailResponse>('/activity/detail', 'post', param)
}