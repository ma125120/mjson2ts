import { QueryActivityBuyQualificationRequest, ResponseQueryActivityBuyQualificationResponse } from '../../api'
import request from '../../request'

/**
* 检测购买资格接口
*/
export default function(param: QueryActivityBuyQualificationRequest) {
	return request<QueryActivityBuyQualificationRequest, ResponseQueryActivityBuyQualificationResponse>('/task/buy/qualification', 'post', param)
}