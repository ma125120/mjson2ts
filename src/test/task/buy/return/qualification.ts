import { QueryActivityBuyQualificationRequest, ResponseQueryActivityBuyQualificationResponse } from '../../../api'
import request from '../../../request'

/**
* 下单时异常还资格接口
*/
export default function(param: QueryActivityBuyQualificationRequest) {
	return request<QueryActivityBuyQualificationRequest, ResponseQueryActivityBuyQualificationResponse>('/task/buy/return/qualification', 'post', param)
}