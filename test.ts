type ActivityDetailMobileResponse = {
	 // 活动范围 1:小程序 2:app 3:小程序和app
	activityRange: 'APPLET' | 'APP' | 'APP_AND_APPLET'

	 // 小程序url
	appletUrl: string

	 // 入口封面
	entranceCover: string

	 // 第一页数据
	firstPage: PageActivityMobileListResp

	 // 热度
	heat: number

	 // 发售Id
	id: string

	 // 主图
	mainPicture: string

	 // 发售规则
	rule: string

	 // 分享数据
	shareFriends: WxShareModel

	 // 分享人
	shareUser: InvitationShareUserResponse

	 // 活动状态
	status: 'NOT_STARTED' | 'PROCESSING' | 'OVER'

	 // 发售副标题
	subTitle: string

	 // 发售标题
	title: string

	 // 视频封面
	video: string

}

type ActivityDetailResponse = {
	 // 活动范围 1:小程序 2:app 3:小程序和app
	activityRange: 'APPLET' | 'APP' | 'APP_AND_APPLET'

	 // appurl
	appUrl: string

	 // 小程序url
	appletUrl: string

	 // 发售结束时间
	end: string

	 // undefined
	entranceCover: string

	 // 发售Id
	id: string

	 // 是否上线
	isOnline: boolean

	 // 主图
	mainPicture: string

	 // 活动下线时间
	offlineAt: string

	 // 活动上线时间
	onlineAt: string

	 // 发售规则
	rule: string

	 // 对话列表
	scene: SceneAdminDetailResponse[]

	 // spu
	spus: 活动SPU信息[]

	 // 发售开始时间
	start: string

	 // 状态
	status: 'NOT_STARTED' | 'PROCESSING' | 'OVER'

	 // 发售副标题
	subTitle: string

	 // 任务列表
	tasks: TaskListResponse[]

	 // 发售标题
	title: string

	 // 视频
	video: string

}

type ActivityListReq = {
	 // 当前页
	current: number

	 // 搜索关键字 发售Id|标题
	keyword: string

	 // 活动范围
	range: 'APPLET' | 'APP' | 'APP_AND_APPLET'

	 // 分页条数
	size: number

	 // 活动状态
	status: string

}

type ActivityListResponse = {
	 // 小程序链接
	appletUrl: string

	 // 创建时间
	createdAt: string

	 // 发售结束时间
	end: string

	 // 封面
	entranceCover: string

	 // 发售Id
	id: string

	 // 是否上线
	isOnline: boolean

	 // 主图
	mainPicture: string

	 // 活动下线时间
	offlineAt: string

	 // 活动上线时间
	onlineAt: string

	 // 发售开始时间
	start: string

	 // 活动状态 
	status: 'NOT_STARTED' | 'PROCESSING' | 'OVER'

	 // 副标题
	subTitle: string

	 // 发售标题
	title: string

	 // 视频
	video: string

}

type ActivityMobileListResp = {
	 // 小程序分享链接
	appletUrl: string

	 // 结束时间
	end: string

	 // 封面
	entranceCover: string

	 // 人气
	heat: number

	 // id
	id: string

	 // 主图
	mainPicture: string

	 // 分享数据
	shareFriends: WxShareModel

	 // 开始时间
	start: string

	 // 活动状态
	status: 'NOT_STARTED' | 'PROCESSING' | 'OVER'

	 // 副标题
	subTitle: string

	 // 标题
	title: string

	 // 视频
	video: string

}

type ActivityOperateReq = {
	 // 发售Id
	id: string

	 // shareCode
	shareCode: string

}

type ActivityRelevanceInvitationTaskDTO = {
	 // 任务结束时间
	endTime: string

	 // 新家人数
	increasedNumber: number

	 // 拉新任务类型
	invitaionTaskType: string

	 // 邀请人数
	inviteesNumber: number

}

type ActivityRelevancePuzzleTaskDTO = {
	 // 回答正确数
	answerRightNumber: number

	 // 任务结束时间
	endTime: string

	 // 参与人数
	joinNumber: number

	 // 发放比列
	proportion: string

	 // {1 : 名额未发放 , 2 : 名额有剩余 , 3 : 名额发放完成}
	quotaStatus: number

}

type ActivityRelevanceTaskDTO = {
	 // undefined
	invitationTaskStatistics: ActivityRelevanceInvitationTaskDTO

	 // undefined
	puzzleTaskStatistics: ActivityRelevancePuzzleTaskDTO

	 // undefined
	taskCode: string

	 // 任务Id
	taskID: string

	 // 任务名称
	taskName: string

	 // 任务状态
	taskStatus: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务类型
	taskType: string

}

type ActivityRelevanceTaskRequest = {
	 // 活动id
	activityId: string

}

type ActivityRelevanceTaskResponse = {
	 // undefined
	activityRelevanceTasks: ActivityRelevanceTaskDTO[]

}

type ActivitySaveReq = {
	 // 活动范围
	activityRange: 'APPLET' | 'APP' | 'APP_AND_APPLET'

	 // 结束时间
	end: string

	 // 入口封面
	entranceCover: string

	 // id 更新时必传
	id: string

	 // 主图
	mainPicture: string

	 // 下线时间
	offlineAt: string

	 // 上线时间
	onlineAt: string

	 // 发售规则
	rule: string

	 // 对话
	scene: SceneCreateReq[]

	 // spuId列表
	spuIds: number[]

	 // 开始时间
	start: string

	 // 副标题
	subTitle: string

	 // 标题
	title: string

	 // 视频封面
	video: string

}

type ActivityTaskViewRequest = {
	 // undefined
	activityId: string

}

type DialogAdminDetailResponse = {
	 // 对话内容
	content: string

	 // 对话内容类型 (1:纯文本; 2:图片; 3:视频; 4:语音; 5:任务; 6:商品;)
	contentType: 'TEXT' | 'IMAGE' | 'VIDEO' | 'VOICE' | 'TASK' | 'PRODUCT' | 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT'

	 // 对话id
	id: string

	 // 图片资源地址列表，对话内容类型为 2 时返回
	images: string[]

	 // 可选选项
	options: DialogAdminOptionDetailResponse[]

	 // 在场景中的序号
	sortNumber: number

	 // 商品列表，对话内容类型为 6 时返回
	spuList: DialogProductResponse[]

	 // 任务列表，对话内容类型为 5 时返回
	taskList: DialogTaskResponse[]

	 // 对话类型 (1:NPC; 2:旁白; 3:画外音;)
	type: 'NPC' | 'ASIDE' | 'VOICE_OVER' | 'USER_ANSWER'

	 // 视频封面图地址，对话内容类型为 3 时返回
	videoCover: string

	 // 视频资源地址，对话内容类型为 3 时返回
	videoSrc: string

	 // 语音资源地址，对话内容类型为 4 时返回
	voiceSrc: string

}

type DialogAdminOptionDetailResponse = {
	 // 选项内容
	content: string

	 // 选项内容类型 (1:纯文本; 2:上传图片; 3:用户输入; 4:默认纯文本;)
	contentType: 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT' | 'OPTION_DEFAULT_TEXT'

	 // 选项id
	id: string

	 // 选项标题
	title: string

}

type DialogAnswerSaveReq = {
	 // 所属活动id
	activityId: string

	 // 选项内容类型 (1:纯文本; 2:上传图片; 3:用户输入; 4:默认纯文本;)
	contentType: 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT' | 'OPTION_DEFAULT_TEXT'

	 // 所属对话id
	dialogId: string

	 // 用户输入文本，选项内容类型为 3 时必传
	inputText: string

	 // 所选选项id
	optionId: string

	 // 用户上传图片资源地址列表，选项内容类型为 2 时必传
	uploadImages: string[]

}

type DialogCreateReq = {
	 // 对话内容
	content: string

	 // 对话内容类型 (1:纯文本; 2:图片; 3:视频; 4:语音; 5:任务; 6:商品;)
	contentType: 'TEXT' | 'IMAGE' | 'VIDEO' | 'VOICE' | 'TASK' | 'PRODUCT' | 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT'

	 // 图片资源地址列表，对话内容类型为 2 时必传
	images: string[]

	 // 回复选项，不填则为用户不出现回复
	options: DialogOptionCreateReq[]

	 // 在场景中的序号
	sortNumber: number

	 // 商品列表，对话内容类型为 6 时必传
	spuList: DialogProductReq[]

	 // 任务列表，对话内容类型为 5 时必传
	taskList: DialogTaskReq[]

	 // 对话类型 (1:NPC; 2:旁白; 3:画外音;)
	type: 'NPC' | 'ASIDE' | 'VOICE_OVER' | 'USER_ANSWER'

	 // 视频封面图地址，对话内容类型为 3 时必传
	videoCover: string

	 // 视频资源地址，对话内容类型为 3 时必传
	videoSrc: string

	 // 语音资源地址，对话内容类型为 4 时必传
	voiceSrc: string

}

type DialogDetailResponse = {
	 // 对话/用户选项内容
	content: string

	 // 对话内容类型 (1:纯文本; 2:图片; 3:视频; 4:语音; 5:任务; 6:商品; 11:选项纯文本; 12:选项上传图片; 13:选项输入文字; 14:选项默认纯文本;)
	contentType: 'TEXT' | 'IMAGE' | 'VIDEO' | 'VOICE' | 'TASK' | 'PRODUCT' | 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT'

	 // 对话id
	dialogId: string

	 // 唯一id
	id: string

	 // 图片资源地址列表，对话内容类型为 2 时返回
	images: string[]

	 // 用户选项id，对话类型为用户时返回
	optionId: string

	 // 用户选项标题，对话类型为用户时返回
	optionTitle: string

	 // 可选选项，当该对话用户未回答时，返回
	options: DialogOptionDetailResponse[]

	 // 商品列表，对话内容类型为 6 时返回
	spuList: DialogProductResponse[]

	 // 任务列表，对话内容类型为 5 时返回
	taskList: DialogTaskResponse[]

	 // 对话系统类型 (1:NPC对话; 2:旁白; 3:画外音; 4:用户回复)
	type: 'NPC' | 'ASIDE' | 'VOICE_OVER' | 'USER_ANSWER'

	 // 用户
	user: DialogUserDetailResponse

	 // 视频封面图地址，对话内容类型为 3 时返回
	videoCover: string

	 // 视频资源地址，对话内容类型为 3 时返回
	videoSrc: string

	 // 语音资源地址，对话内容类型为 4 时返回
	voiceSrc: string

}

type DialogOptionCreateReq = {
	 // 选项内容
	content: string

	 // 选项内容类型 (1:纯文本; 2:上传图片; 3:用户输入; 4:默认纯文本;)
	contentType: 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT' | 'OPTION_DEFAULT_TEXT'

	 // 跳转的场景id，单场景不传
	skipSceneID: string

	 // 选项标题
	title: string

}

type DialogOptionDetailResponse = {
	 // 选项内容
	content: string

	 // 选项内容类型 (1:纯文本; 2:上传图片; 3:用户输入; 4:默认纯文本;)
	contentType: 'OPTION_TEXT' | 'OPTION_IMAGE' | 'OPTION_INPUT' | 'OPTION_DEFAULT_TEXT'

	 // 选项id
	id: string

	 // 选项标题
	title: string

}

type DialogProductReq = {
	 // 商品id，对话内容类型为 6 时必传
	spuId: number

}

type DialogProductResponse = {
	 // 商品封面图，对话内容类型为 6 时返回
	blackUrl: string

	 // 品牌名称，对话内容类型为 6 时返回
	brandName: string

	 // 商品名称，对话内容类型为 6 时返回
	englishName: string

	 // 系列名称，对话内容类型为 6 时返回
	seriesName: string

	 // 商品id，对话内容类型为 6 时返回
	spuId: number

}

type DialogTaskReq = {
	 // 任务ID，对话内容类型为 5 时必传
	taskId: string

	 // 任务类型，对话内容类型为 5 时必传
	type: 'INVITATION' | 'PUZZLE'

}

type DialogTaskResponse = {
	 // 任务完成时间
	finishAt: string

	 // undefined
	finished: boolean

	 // 任务名称，对话内容类型为 5 时返回
	name: string

	 // 任务ID，对话内容类型为 5 时返回
	taskId: string

	 // 任务类型，对话内容类型为 5 时返回
	type: 'INVITATION_NEW_USER' | 'INVITATION_NEW_USER_AND_OLD_USER' | 'PUZZLE' | 'INVITATION'

}

type DialogUserDetailResponse = {
	 // 用户头像url
	avatar: string

	 // 用户id
	id: string

	 // 用户别名
	nickName: string

	 // 用户真实姓名
	realName: string

}

type InvitationCodeRequest = {
	 // undefined
	activityId: string

	 // undefined
	taskCode: string

}

type InvitationParticipantDTO = {
	 // undefined
	id: string

	 // 用户列表
	invitationUsers: InvitationUserDTO[]

	 // 任务规定的邀请数
	inviteesNumber: number

	 // 用户线上被邀请者数
	onlineInvitationsCount: number

	 // 任务code
	taskCode: string

	 // 购买资格状态 [1、无资格 2、有资格 3、已使用]
	ticketStatus: 'UN_QUALIFICATION' | 'QUALIFICATION' | 'USED'

	 // 用户id
	userId: number

}

type InvitationShareUserResponse = {
	 // 分享人的头像
	shareHeadImage: string

	 // 分享人的昵称
	shareNickName: string

}

type InvitationTaskCreateRequest = {
	 // 活动Id
	activityId: string

	 // 结束时间
	endTime: string

	 // 邀请类型
	invitationType: 'NEWUSER' | 'NEWUSERANDOLDUSER'

	 // 邀请人数
	inviteesNumber: number

	 // 任务名称
	name: string

	 // 购买资格商品
	relatedProducts: RelatedProductsRequest[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务时间设置
	syncActivityTime: boolean

}

type InvitationTaskDTO = {
	 // 是否已经购买过，任务级别的，只要用户在任务中随意购买一件商品，其他商品均不能购买 【0->无  1->已购买】
	bugQualifications: number

	 // 拉新结束时间
	endTime: string

	 // 当前用户邀请名单信息
	invitationParticipant: InvitationParticipantDTO

	 // 邀请类型 【NEWUSER->新用户 , NEWUSERANDOLDUSER->新老用户】
	invitationType: 'NEWUSER' | 'NEWUSERANDOLDUSER'

	 // 邀请人数
	inviteesNumber: number

	 // 拉新任务名称
	name: string

	 // 关联商品信息
	relevanceSpus: RelevanceSpuDTO[]

	 // 拉新任务规则
	rule: string

	 // 提供mini app端分享邀请code码
	shareInvitationCode: string

	 // 拉新分享路径
	shareInvitationPath: string

	 // 拉新开始时间
	startTime: string

	 // 任务状态 【1、待开始 2、已开始 3、已结束
	status: 'WAITING' | 'STARTED' | 'ENDED'

}

type InvitationTaskUpdateRequest = {
	 // 活动Id
	activityId: string

	 // 删除的SPU Ids
	delSpuIds: number[]

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 邀请类型
	invitationType: 'NEWUSER' | 'NEWUSERANDOLDUSER'

	 // 邀请人数
	inviteesNumber: number

	 // 任务名称
	name: string

	 // 购买资格商品
	relatedProducts: RelatedProductsRequest[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务时间设置
	syncActivityTime: boolean

}

type InvitationTaskViewResponse = {
	 // 关联活动结束时间
	activityEndTime: string

	 // 关联活动Id
	activityId: string

	 // 关联活动名称
	activityName: string

	 // 关联活动开始时间
	activityStartTime: string

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 邀请类型
	invitationType: 'NEWUSER' | 'NEWUSERANDOLDUSER'

	 // 邀请人数
	inviteesNumber: number

	 // 任务名称
	name: string

	 // 购买资格商品
	relatedProducts: RelatedProductsResponse[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务状态
	status: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务时间设置
	syncActivityTime: boolean

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type InvitationUserDTO = {
	 // 被邀请头像
	headImage: string

	 // 被邀请时间
	invitedAt: string

	 // 被邀请id
	invitedUserId: number

	 // 被邀请名称
	nickName: string

	 // 任务id
	taskCode: string

	 // 用户id
	userId: number

	 // 用户类型 【1、新用户 2、老用户】
	userTypeEnum: 'NEW' | 'OLD'

}

type InvitationUserRequest = {
	 // undefined
	activityCode: string

	 // undefined
	headImage: string

	 // undefined
	invitedUserId: number

	 // undefined
	nickName: string

	 // undefined
	sponsorHeadImage: string

	 // undefined
	sponsorNickName: string

	 // undefined
	taskCode: string

	 // undefined
	userId: number

	 // undefined
	userTypeEnum: 'NEW' | 'OLD'

}

type InvitationUserResponse = {
	 // 当前成功的记录ID号
	id: string

}

type PageBase = {
	 // 当前页
	current: number

	 // 分页条数
	size: number

}

type PageActivityListResponse = {
	 // 当前页
	current: number

	 // undefined
	pages: number

	 // 数据
	records: ActivityListResponse[]

	 // 分页大小
	size: number

	 // 总条数
	total: number

}

type PageActivityMobileListResp = {
	 // 当前页
	current: number

	 // undefined
	pages: number

	 // 数据
	records: ActivityMobileListResp[]

	 // 分页大小
	size: number

	 // 总条数
	total: number

}

type PageTaskListResponse = {
	 // 当前页
	current: number

	 // undefined
	pages: number

	 // 数据
	records: TaskListResponse[]

	 // 分页大小
	size: number

	 // 总条数
	total: number

}

type ProSpuShowDTO = {
	 // 创建时间
	createdAt: string

	 // 创建人
	createdBy: number

	 // 0-在用，1-删除
	delFlag: number

	 // id主键
	id: number

	 // 1-默认，2-新增
	isDefault: number

	 // 1-logo大图，2-白底图，3-其他，4-海报，5-细节图
	moduleCode: number

	 // 1-logo大图，2-白底图，3-其他，4-海报，5-细节图
	moduleName: string

	 // 信号名称
	name: string

	 // spu编号
	spuId: number

	 // 更新时间
	updatedAt: string

	 // 更新人
	updatedBy: number

	 // 图片url
	url: string

	 // undefined
	urls: string[]

}

type PuzzleParticipantCreateRequest = {
	 // 活动Id
	activityId: string

	 // 答案
	answer: string

	 // 任务Id
	taskId: string

}

type PuzzleParticipantDTO = {
	 // 活动Id
	activityId: string

	 // 答案
	answer: string

	 // 创建人
	createBy: string

	 // 创建时间
	createTime: string

	 // 是否与答案匹配成功 [1、未匹配 2、已匹配]
	matched: number

	 // 匹配失败数
	matchedFailNumber: number

	 // 匹配数量
	matchedNumber: number

	 // 答案提交次数
	numberOfTimes: number

	 // 问题匹配占比
	proportion: number

	 // 排名名次
	rankingNumber: number

	 // 任务Id
	taskId: string

	 // 购买资格状态 [1、无资格 2、有资格 3、己使用]
	ticketStatus: number

	 // 更新人
	updateBy: string

	 // 更新时间
	updateTime: string

	 // 用户Id
	userId: string

}

type PuzzleParticipantViewRequest = {
	 // 任务Id
	taskId: string

	 // 用户Id
	userId: string

}

type PuzzleParticipantViewResponse = {
	 // undefined
	puzzleTaskDTO: PuzzleTaskDTO

}

type PuzzleTaskCreateRequest = {
	 // 活动Id
	activityId: string

	 // 结束时间
	endTime: string

	 // 任务名称
	name: string

	 // 正确答案
	puzzleAnswer: string

	 // 解谜发放方式
	puzzleIssuanceMethod: 'TIMED' | 'MANUAL'

	 // 解谜发放人数
	puzzleIssuanceNumber: number

	 // 解谜发放时间
	puzzleIssuanceTime: string

	 // 解谜文案
	puzzleQuestion: string

	 // 解谜提示
	puzzleTips: string[]

	 // 购买资格商品
	relatedProducts: RelatedProductsRequest[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务时间设置
	syncActivityTime: boolean

}

type PuzzleTaskDTO = {
	 // 关联活动结束时间
	activityEndTime: string

	 // 关联活动Id
	activityId: string

	 // 关联活动名称
	activityName: string

	 // 关联活动开始时间
	activityStartTime: string

	 // 是否已经购买过，任务级别的，只要用户在任务中随意购买一件商品，其他商品均不能购买 【0->无  1->已购买】
	bugQualifications: number

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 任务名称
	name: string

	 // 正确答案
	puzzleAnswer: string

	 // 解谜发放方式
	puzzleIssuanceMethod: 'TIMED' | 'MANUAL'

	 // 解谜发放人数
	puzzleIssuanceNumber: number

	 // 解谜发放时间
	puzzleIssuanceTime: string

	 // 参与人实体类对象
	puzzleParticipantDTO: PuzzleParticipantDTO

	 // 解谜文案
	puzzleQuestion: string

	 // 解谜提示
	puzzleTips: string[]

	 // 名额发放状态{1 : 名额未发放 , 2 : 名额有剩余 , 3 : 名额发放完成}
	quotaStatus: number

	 // 购买资格商品
	relatedProducts: RelatedProductsResponse[]

	 // 关联商品信息
	relevanceSpus: RelevanceSpuDTO[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务状态
	status: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务时间设置
	syncActivityTime: boolean

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type PuzzleTaskUpdateRequest = {
	 // 活动Id
	activityId: string

	 // 删除的SPU Ids
	delSpuIds: number[]

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 任务名称
	name: string

	 // 正确答案
	puzzleAnswer: string

	 // 解谜发放方式
	puzzleIssuanceMethod: 'TIMED' | 'MANUAL'

	 // 解谜发放人数
	puzzleIssuanceNumber: number

	 // 解谜发放时间
	puzzleIssuanceTime: string

	 // 解谜文案
	puzzleQuestion: string

	 // 解谜提示
	puzzleTips: string[]

	 // 购买资格商品
	relatedProducts: RelatedProductsRequest[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务时间设置
	syncActivityTime: boolean

}

type PuzzleTaskViewResponse = {
	 // 关联活动结束时间
	activityEndTime: string

	 // 关联活动Id
	activityId: string

	 // 关联活动名称
	activityName: string

	 // 关联活动开始时间
	activityStartTime: string

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 任务名称
	name: string

	 // 正确答案
	puzzleAnswer: string

	 // 解谜发放方式
	puzzleIssuanceMethod: 'TIMED' | 'MANUAL'

	 // 解谜发放人数
	puzzleIssuanceNumber: number

	 // 解谜发放时间
	puzzleIssuanceTime: string

	 // 解谜文案
	puzzleQuestion: string

	 // 解谜提示
	puzzleTips: string[]

	 // 购买资格商品
	relatedProducts: RelatedProductsResponse[]

	 // 任务规则
	rule: string

	 // 开始时间
	startTime: string

	 // 任务状态
	status: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务时间设置
	syncActivityTime: boolean

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type QueryActivityBuyQualificationRequest = {
	 // undefined
	activityId: string

	 // undefined
	spuId: number

	 // undefined
	taskId: string

	 // undefined
	taskType: 'INVITATION' | 'PUZZLE'

	 // undefined
	userId: number

}

type QueryActivityBuyQualificationResponse = {
	 // undefined
	canBuy: boolean

}

type QueryInvitationTaskRequest = {
	 // undefined
	activityId: string

	 // undefined
	taskId: string

}

type QueryInvitationTaskResponse = {
	 // 拉新任务对象
	invitationTask: InvitationTaskDTO

}

type RelatedProductSkuRequest = {
	 // SKU Id
	id: number

	 // SPU Id
	spuId: number

	 // 任务商品数量
	stock: number

}

type RelatedProductsRequest = {
	 // 购买资格
	buyAbility: boolean

	 // SKU 列表
	skuRespList: RelatedProductSkuRequest[]

	 // SPU Id
	spuId: number

	 // 是否可见
	visibility: boolean

}

type RelatedProductsResponse = {
	 // 品牌名
	brandName: string

	 // 购买资格
	buyAbility: boolean

	 // 最大售卖价格
	maxPrice: number

	 // 最小售卖价格
	minPrice: number

	 // 系列名
	seriesName: string

	 // SKU白底图
	skuImg: string

	 // 已关联的SKU数
	skuNum: number

	 // 关联的活动SKU信息
	skuRespList: object[]

	 // spuId
	spuId: number

	 // 商品名称
	spuName: string

	 // taskID
	taskId: string

	 // 是否可见
	visibility: boolean

}

type RelevanceSpuDTO = {
	 // 名牌名称
	brandName: string

	 // 是否购买资格 ture可购买
	buyAbility: boolean

	 // 可显示
	canDisplay: boolean

	 // 是否锁定
	locked: boolean

	 // 最大价
	maxPrice: number

	 // 最小价
	minPrice: number

	 // 是否是发售商品， 默认为true
	sale: boolean

	 // 系列名称
	seriesName: string

	 // 封面图
	skuImg: string

	 // sku数量
	skuNum: number

	 // 商品id
	spuId: number

	 // 产品名称
	spuName: string

	 // 商品关联的任务列表
	tasks: TaskProductTypeResp[]

}

type Request = {
	 // undefined
	data: object

	 // undefined
	header: RequestHeader

}

type RequestHeader = {
	 // undefined
	authToken: string

	 // undefined
	channel: string

	 // undefined
	client: string

	 // undefined
	deviceType: string

	 // undefined
	transactionId: string

}

type RequestActivityListReq = {
	 // undefined
	data: ActivityListReq

	 // undefined
	header: RequestHeader

}

type RequestActivityOperateReq = {
	 // undefined
	data: ActivityOperateReq

	 // undefined
	header: RequestHeader

}

type RequestActivityRelevanceTaskRequest = {
	 // undefined
	data: ActivityRelevanceTaskRequest

	 // undefined
	header: RequestHeader

}

type RequestActivitySaveReq = {
	 // undefined
	data: ActivitySaveReq

	 // undefined
	header: RequestHeader

}

type RequestActivityTaskViewRequest = {
	 // undefined
	data: ActivityTaskViewRequest

	 // undefined
	header: RequestHeader

}

type RequestInvitationCodeRequest = {
	 // undefined
	data: InvitationCodeRequest

	 // undefined
	header: RequestHeader

}

type RequestInvitationTaskCreateRequest = {
	 // undefined
	data: InvitationTaskCreateRequest

	 // undefined
	header: RequestHeader

}

type RequestInvitationTaskUpdateRequest = {
	 // undefined
	data: InvitationTaskUpdateRequest

	 // undefined
	header: RequestHeader

}

type RequestInvitationUserRequest = {
	 // undefined
	data: InvitationUserRequest

	 // undefined
	header: RequestHeader

}

type RequestListDialogAnswerSaveReq = {
	 // undefined
	data: DialogAnswerSaveReq[]

	 // undefined
	header: RequestHeader

}

type RequestPageBase = {
	 // undefined
	data: PageBase

	 // undefined
	header: RequestHeader

}

type RequestPuzzleParticipantCreateRequest = {
	 // undefined
	data: PuzzleParticipantCreateRequest

	 // undefined
	header: RequestHeader

}

type RequestPuzzleParticipantViewRequest = {
	 // undefined
	data: PuzzleParticipantViewRequest

	 // undefined
	header: RequestHeader

}

type RequestPuzzleTaskCreateRequest = {
	 // undefined
	data: PuzzleTaskCreateRequest

	 // undefined
	header: RequestHeader

}

type RequestPuzzleTaskUpdateRequest = {
	 // undefined
	data: PuzzleTaskUpdateRequest

	 // undefined
	header: RequestHeader

}

type RequestQueryActivityBuyQualificationRequest = {
	 // undefined
	data: QueryActivityBuyQualificationRequest

	 // undefined
	header: RequestHeader

}

type RequestQueryInvitationTaskRequest = {
	 // undefined
	data: QueryInvitationTaskRequest

	 // undefined
	header: RequestHeader

}

type RequestSceneHappenedReq = {
	 // undefined
	data: SceneHappenedReq

	 // undefined
	header: RequestHeader

}

type RequestTaskListRequest = {
	 // undefined
	data: TaskListRequest

	 // undefined
	header: RequestHeader

}

type RequestTaskViewRequest = {
	 // undefined
	data: TaskViewRequest

	 // undefined
	header: RequestHeader

}

type ResponseHeader = {
	 // undefined
	code: number

	 // undefined
	msg: string

	 // undefined
	transactionId: string

}

type ResponseActivityDetailMobileResponse = {
	 // undefined
	data: ActivityDetailMobileResponse

	 // undefined
	header: ResponseHeader

}

type ResponseActivityDetailResponse = {
	 // undefined
	data: ActivityDetailResponse

	 // undefined
	header: ResponseHeader

}

type ResponseActivityRelevanceTaskResponse = {
	 // undefined
	data: ActivityRelevanceTaskResponse

	 // undefined
	header: ResponseHeader

}

type ResponseInvitationTaskViewResponse = {
	 // undefined
	data: InvitationTaskViewResponse

	 // undefined
	header: ResponseHeader

}

type ResponseInvitationUserResponse = {
	 // undefined
	data: InvitationUserResponse

	 // undefined
	header: ResponseHeader

}

type ResponseListActivityDetailMobileResponse = {
	 // undefined
	data: ActivityDetailMobileResponse[]

	 // undefined
	header: ResponseHeader

}

type ResponseList活动SPU信息 = {
	 // undefined
	data: 活动SPU信息[]

	 // undefined
	header: ResponseHeader

}

type ResponsePageActivityListResponse = {
	 // undefined
	data: PageActivityListResponse

	 // undefined
	header: ResponseHeader

}

type ResponsePageActivityMobileListResp = {
	 // undefined
	data: PageActivityMobileListResp

	 // undefined
	header: ResponseHeader

}

type ResponsePageTaskListResponse = {
	 // undefined
	data: PageTaskListResponse

	 // undefined
	header: ResponseHeader

}

type ResponsePuzzleParticipantViewResponse = {
	 // undefined
	data: PuzzleParticipantViewResponse

	 // undefined
	header: ResponseHeader

}

type ResponsePuzzleTaskViewResponse = {
	 // undefined
	data: PuzzleTaskViewResponse

	 // undefined
	header: ResponseHeader

}

type ResponseQueryActivityBuyQualificationResponse = {
	 // undefined
	data: QueryActivityBuyQualificationResponse

	 // undefined
	header: ResponseHeader

}

type ResponseQueryInvitationTaskResponse = {
	 // undefined
	data: QueryInvitationTaskResponse

	 // undefined
	header: ResponseHeader

}

type ResponseSceneDetailResponse = {
	 // undefined
	data: SceneDetailResponse

	 // undefined
	header: ResponseHeader

}

type ResponseTaskProductListResponse = {
	 // undefined
	data: TaskProductListResponse

	 // undefined
	header: ResponseHeader

}

type ResponseTaskResponse = {
	 // undefined
	data: TaskResponse

	 // undefined
	header: ResponseHeader

}

type ResponseWxShareModel = {
	 // undefined
	data: WxShareModel

	 // undefined
	header: ResponseHeader

}

type Responseboolean = {
	 // undefined
	data: boolean

	 // undefined
	header: ResponseHeader

}

type Responsestring = {
	 // undefined
	data: string

	 // undefined
	header: ResponseHeader

}

type SKU信息 = {
	 // 属性数据
	basisList: SKU属性信息[]

	 // 品牌名
	brandName: string

	 // undefined
	createdAt: string

	 // undefined
	createdBy: number

	 // 删除 0-在用 1-删除
	delFlag: number

	 // SkuID
	id: number

	 // 仓库信息
	inventory: 库存信息

	 // 关联的服务
	jointServices: string

	 // 原始销售价格
	orgPrice: number

	 // 原始售卖状态 ---- 与调用者无关，展示请勿使用该字段
	orgStatus: number

	 // 原始的任务商品数量 --- 不要再这个字段上做任何操作
	orgStock: number

	 // 卖家ID
	sellerId: number

	 // 卖家名称
	sellerName: string

	 // 上架售卖价格
	sellingPrice: number

	 // 售卖状态(1.上架2.下架)
	sellingStatus: number

	 // 系列名
	seriesName: string

	 // (人工操作后的)SKU上架可售数
	skuAvailableNumber: number

	 // SKU白底图
	skuImg: string

	 // spuId
	spuId: number

	 // 商品名称
	spuName: string

	 // 任务商品数量（初始化库存数)
	stock: number

	 // undefined
	updatedAt: string

	 // undefined
	updatedBy: number

}

type SKU属性信息 = {
	 // 属性ID
	basisId: number

	 // 基础参数名称
	basisName: string

	 // 基础参数值
	basisValue: string

	 // undefined
	createdBy: number

	 // undefined
	delFlag: number

	 // undefined
	id: number

	 // skuId
	skuId: number

	 // 标准ID
	standardId: number

	 // 属性类型
	type: number

}

type SceneAdminDetailResponse = {
	 // 对话列表
	dialogs: DialogAdminDetailResponse[]

	 // 场景id
	id: string

}

type SceneCreateReq = {
	 // 对话列表
	dialogs: DialogCreateReq[]

}

type SceneDetailResponse = {
	 // 当前活动id
	activityId: string

	 // 对话内容
	dialogs: DialogDetailResponse[]

	 // 关联任务数量
	taskCount: number

}

type SceneHappenedReq = {
	 // 活动id
	activityId: string

}

type TaskDTO = {
	 // 拉新任务对象
	invitationTask: InvitationTaskDTO

	 // 拉新任务对象
	puzzleTaskDTO: PuzzleTaskDTO

	 // 任务id
	taskId: string

	 // 任务类型 [INVITATION : 拉新任务  PUZZLE ： 解谜任务]
	taskType: 'INVITATION' | 'PUZZLE'

}

type TaskListRequest = {
	 // 活动Id
	activityId: string

	 // 当前页
	current: number

	 // 任务Id/任务Code/任务名称
	name: string

	 // 分页条数
	size: number

	 // 任务状态
	status: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type TaskListResponse = {
	 // 关联活动名称
	activity: string

	 // 关联活动Id
	activityId: string

	 // 创建时间
	createTime: string

	 // 结束时间
	endTime: string

	 // 任务Id
	id: string

	 // 任务名称
	name: string

	 // 购买资格商品
	relatedProducts: RelatedProductsResponse[]

	 // 开始时间
	startTime: string

	 // 状态
	status: 'WAITING' | 'STARTED' | 'ENDED'

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type TaskProductListResponse = {
	 // 可见商品列表
	disRelevanceSpus: RelevanceSpuDTO[]

	 // 不可见商品列表
	nonDisrelevanceSpus: RelevanceSpuDTO[]

}

type TaskProductTypeResp = {
	 // 任务id
	taskId: string

	 // 任务类型 :[INVITATION : 拉新任务   PUZZLE ： 解谜任务 ]
	taskType: 'INVITATION' | 'PUZZLE'

}

type TaskResponse = {
	 // 活动状态
	activityStatus: 'NOT_STARTED' | 'PROCESSING' | 'OVER'

	 // 分享数据
	shareFriends: WxShareModel

	 // 任务列表
	taskDTOList: TaskDTO[]

}

type TaskViewRequest = {
	 // 任务Id
	id: string

	 // 任务类型
	type: 'INVITATION' | 'PUZZLE'

}

type WxShareModel = {
	 // 小程序节点高清大图，小于128k
	hdImageData: string

	 // 分享小程序的版本（0-正式，1-开发，2-体验）
	miniProgramType: number

	 // 小程序页面的路径
	path: string

	 // 分享标题
	title: string

	 // 类型
	type: string

	 // 小程序的原生id
	userName: string

	 // 网页的url地址 不能为空且长度不能超过10K
	webpageUrl: string

}

type 库存信息 = {
	 // 最大上架可售数
	availableStockNum: number

	 // undefined
	createdBy: number

	 // 删除 0-在用1-删除
	delFlag: number

	 // undefined
	id: number

	 // 上架可售数 --- 与前端无关，仅后台操作使用
	orgANum: number

	 // SKU上架可售数
	skuAvailableNumber: number

	 // SKU仓库中冻结库存数
	skuFreezeNumber: number

	 // SKU上架冻结数
	skuFreezingNumber: number

	 // skuId
	skuId: number

	 // SKU仓库中库存总数
	skuInventorySum: number

	 // SKU上架总数
	skuShelvesSum: number

	 // SKU仓库中可用库存数
	skuStockNumber: number

	 // SKU总数
	skuSum: number

	 // spuId
	spuId: number

}

type 活动SPU信息 = {
	 // undefined
	backItemId: number

	 // undefined
	backItemName: string

	 // undefined
	brandId: number

	 // 品牌名
	brandName: string

	 // 是否可以删除
	canDel: boolean

	 // 中文介绍
	chineseIntroduction: string

	 // 英文介绍
	englishIntroduction: string

	 // undefined
	isChineseName: number

	 // undefined
	isSubChineseName: number

	 // undefined
	isSubEnglishName: number

	 // 最大售卖价格
	maxPrice: number

	 // 最小售卖价格
	minPrice: number

	 // undefined
	seriesId: number

	 // 系列名
	seriesName: string

	 // SKU白底图
	skuImg: string

	 // 已关联的SKU数
	skuNum: number

	 // 关联的活动SKU信息
	skuRespList: SKU信息[]

	 // undefined
	spuChineseAlias: string

	 // SPU中文名
	spuChineseName: string

	 // undefined
	spuEnglishAlias: string

	 // spuId
	spuId: number

	 // 商品名称
	spuName: string

	 // SPU全部图
	spuShowDTOList: ProSpuShowDTO[]

	 // undefined
	spuSubChineseName: string

	 // undefined
	spuSubEnglishName: string

	 // undefined
	status: number

}
