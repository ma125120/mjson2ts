import { ActivityRelevanceTaskRequest, ResponseActivityRelevanceTaskResponse } from '../api'
import request from '../request'

/**
* 任务统计
*/
export default function(param: ActivityRelevanceTaskRequest) {
	return request<ActivityRelevanceTaskRequest, ResponseActivityRelevanceTaskResponse>('/task/statistics', 'post', param)
}