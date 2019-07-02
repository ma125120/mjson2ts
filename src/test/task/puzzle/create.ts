import { PuzzleTaskCreateRequest, ResponsePuzzleTaskViewResponse } from '../../api'
import request from '../../request'

/**
* 创建解谜任务
*/
export default function(param: PuzzleTaskCreateRequest) {
	return request<PuzzleTaskCreateRequest, ResponsePuzzleTaskViewResponse>('/task/puzzle/create', 'post', param)
}