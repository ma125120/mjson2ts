import { PageBase, ResponsePageActivityMobileListResp } from '../../api'
import request from '../../request'

/**
* 分页查询
*/
export default function(param: PageBase) {
	return request<PageBase, ResponsePageActivityMobileListResp>('/activity/mobile/page', 'post', param)
}