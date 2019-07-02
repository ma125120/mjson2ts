import { PuzzleParticipantCreateRequest, ResponsePuzzleParticipantViewResponse } from '../api'
import request from '../request'

/**
* 提交答案
*/
export default function(param: PuzzleParticipantCreateRequest) {
	return request<PuzzleParticipantCreateRequest, ResponsePuzzleParticipantViewResponse>('/participant/answer', 'post', param)
}