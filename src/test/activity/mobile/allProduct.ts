import { ActivityOperateReq, ResponseTaskProductListResponse } from '../../api'
import request from '../../request'

/**
* 获取所有商品
*/
export default function(param: ActivityOperateReq) {
	return request<ActivityOperateReq, ResponseTaskProductListResponse>('/activity/mobile/allProduct', 'post', param)
}