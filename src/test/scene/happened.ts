import { SceneHappenedReq, ResponseSceneDetailResponse } from '../api'
import request from '../request'

/**
* 获取已发生场景详情
*/
export default function(param: SceneHappenedReq) {
	return request<SceneHappenedReq, ResponseSceneDetailResponse>('/scene/happened', 'post', param)
}