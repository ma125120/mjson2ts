import { PuzzleParticipantCreateRequest, ResponsePuzzleParticipantViewResponse } from '../../api'
import request from '../../request'

/**
* 手机端提交答案
*/
export default function(param: PuzzleParticipantCreateRequest) {
	return request<PuzzleParticipantCreateRequest, ResponsePuzzleParticipantViewResponse>('/participant/mobile/answer', 'post', param)
}