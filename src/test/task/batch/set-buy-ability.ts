import { {},  } from '../../api'
import request from '../../request'

/**
* setBuyAbility
*/
export default function(param: {}) {
	return request<{}, >('/task/batch/set-buy-ability', 'post', param)
}