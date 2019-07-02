import { PuzzleParticipantViewRequest, ResponsePuzzleParticipantViewResponse } from '../api'
import request from '../request'

/**
* 查询参与人记录
*/
export default function(param: PuzzleParticipantViewRequest) {
	return request<PuzzleParticipantViewRequest, ResponsePuzzleParticipantViewResponse>('/participant/query', 'post', param)
}