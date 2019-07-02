import { PageBase, ResponseActivityDetailMobileResponse } from '../../api'
import request from '../../request'

/**
* 获取当前优先级最高的活动
*/
export default function(param: PageBase) {
	return request<PageBase, ResponseActivityDetailMobileResponse>('/activity/mobile/highestPriority', 'post', param)
}