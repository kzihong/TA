import Diary from "./components/Diary.vue"
import WarmWall from "./components/WarmWall.vue"
import TrashCan from "./components/TrashCan.vue"

import DiaryDetail from "./components/DiaryDetail.vue"
import DiaryRelease from "./components/DiaryRelease.vue"
import WarmWallDetail from "./components/WarmWallDetail.vue"
import WarmWallRelease from "./components/WarmWallRelease.vue"
export default[
	{
		path:"/diary",
		component:Diary
	},
	{
		path:"/diary/detail",
		component:DiaryDetail
	},
	{
		path:"/diary/release",
		component:DiaryRelease
	},
	{
		path:"/warm_wall",
		component:WarmWall
	},
	{
		path:"/warm_wall/detail",
		component:WarmWallDetail
	},
	{
		path:"/warm_wall/release",
		component:WarmWallRelease
	},
	{
		path:"/trash_can",
		component:TrashCan
	},
	{
		path:"*",
		redirect:"/diary"
	}
]