import { ActivityOperateReq, ResponseList活动SPU信息 } from '../api'
import request from '../request'

/**
* 获取活动商品池
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, ResponseList活动SPU信息>('/activity/activitySpus', 'post', param)
}