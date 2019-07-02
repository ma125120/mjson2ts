import { ActivityListReq, ResponsePageActivityListResponse } from '../api'
import request from '../request'

/**
* 活动列表
*/
export default function(param: ActivityListReq) {
	return request<ActivityListReq, ResponsePageActivityListResponse>('/activity/list', 'post', param)
}