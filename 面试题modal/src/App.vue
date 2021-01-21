<template>
	<div id="app">
		<div class="header">
		<img alt="Vue logo" src="./assets/logo.png" width="150" />
		</div>
		<div class="section">
			<el-button type="success" icon="el-icon-plus" size="small" round @click="onCreate">New Record</el-button>
				<el-button
					@click="showFilterModal"
					type="primary" 
					size="small" 
					round
				>
					添加过滤条件
				</el-button>
				<FilterModal
					:show.sync="show"
					:eidtData.sync="eidtData"
					:delData.sync="delData"
					@getFilterList="getFilterList"
				>
				</FilterModal>
		</div>
		<div class="section">
			<div class="filter">
				<div class="item" v-for="(item, index) of filterList" :key="index">
					<div v-if="item.show !== '' && item.show.length !== 0">
						<span
							@click="eidt(index)"
						>
							{{item.key}}:{{item.show.toString()}}
						</span>
						<i 
							class="el-icon-close close"
							@click="del(index)"
						>
						</i>
					</div>
				</div>
			</div>
			<el-table :data="tableData" height="250" border style="width: 100%">
				<el-table-column prop="id" label="ID" width="100"></el-table-column>
				<el-table-column prop="date" label="日期" width="180"></el-table-column>
				<el-table-column prop="name" label="姓名" width="180"></el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
			</el-table>
		</div>
		<pre>
			根据我的了解的需求意思,已经全部完成,
			点击保存的时候,调用了 /api/data.json 这个接口 所传递数据打印出来了
			a. 【选做需求】编写一个前端的过滤函数，根据设置的条件对表格对数据进行过滤显示
			思路:
				拿到所选择的数据,存放到一个对象
				{
					name: ['xx','xxx']; // 这存放 关键字 和 多选名字
					address: ['xxx','xxx'] // 这存放 关键字 和 多选地址
				}
			遍历的时候对比该对象里面的name 和 address

		</pre>
	</div>
</template>

<script>
import FilterModal from './Component/FilterModal'
export default {
	components: {
		FilterModal
	},
	name: "App",
	data() {
		return {
			tableData: [],
			show: false,
			filterList: [],
			eidtData: -1,
			delData: -1
		};
	},
	mounted() {
		this.loadTableList();
	},
	methods: {
		async loadTableList() {
			let res = await this.$axios.post('/api/data.json', {});
			this.tableData = res.data;
		},
		onCreate() {
			alert('这是打开添加记录窗口的事件处理函数');
		},
		showFilterModal() {
			this.show = true;
		},
		getFilterList(val) {
			this.filterList = val;
		},
		eidt(index) {
			this.eidtData = index;
			this.show = true;
		},
		del(index) {
			this.delData = index;
		}
	}
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}
.header {
  border-bottom: 1px #ccc solid;
}
.section {
  margin: 1em 0;
}
.filter{
	display: flex;
}
.filter .item div{
	border:1px solid #ccc;
	height: 18px;
	/* min-width: 120px; */
	margin-right: 20px;
	margin-bottom: 20px;
	border-radius: 6px;
	/* padding: 3px; */
	padding:3px 16px 3px 3px;
	position: relative;
	cursor: default;
	/* font-size:  */
}
.close {
	position: absolute;
	right: 2px;
	top: 6px;
	cursor:pointer;
}
</style>
