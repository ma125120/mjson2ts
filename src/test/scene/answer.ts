import { DialogAnswerSaveReq, ResponseSceneDetailResponse } from '../api'
import request from '../request'

/**
* 保存答案
*/
export default function(param: DialogAnswerSaveReq[]) {
	return request<DialogAnswerSaveReq[], ResponseSceneDetailResponse>('/scene/answer', 'post', param)
}