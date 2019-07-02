import { PuzzleTaskUpdateRequest, ResponsePuzzleTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 编辑解谜任务
*/
export default function(param: PuzzleTaskUpdateRequest) {
	return request<PuzzleTaskUpdateRequest, ResponsePuzzleTaskViewResponse>('/task/puzzle/update', 'post', param)
}