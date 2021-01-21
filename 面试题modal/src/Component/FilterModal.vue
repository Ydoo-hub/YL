<template>
    <el-dialog 
        title="设置过滤条件" 
        :visible.sync="showModal"
        :close-on-click-modal="false"
    >
        <el-form>
            <el-form-item 
                label="过滤字段" 
                :label-width="formLabelWidth"
            >
                <el-dropdown trigger="click" @command="choose"  id="chooseStyle">
                    <span class="el-dropdown-link">
                        {{value}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command='名字'>名字</el-dropdown-item>
                        <el-dropdown-item command='地区'>地区</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-form-item>
            <el-form-item 
                label="过滤形式"
                :label-width="formLabelWidth"
            >
                <template>
                    <el-radio v-model="radio" label="1">关键词搜索</el-radio>
                    <el-radio v-model="radio" label="2">列表多选</el-radio>
                </template>
            </el-form-item>
            <el-form-item 
                label="关键词" 
                :label-width="formLabelWidth"
            >
                <el-input 
                    v-model="keyword" 
                    autocomplete="off"
                    :disabled="isKey"
                    placeholder="请输入关键词"
                >
                </el-input>
            </el-form-item>
            <el-form-item 
                label="列表选项" 
                :label-width="formLabelWidth"
            >
                <template>
                    <el-checkbox-group
                        v-model="checkList"
                    >
                        <el-checkbox
                            :label="index"
                            v-for="(item, index) of list"
                            :key="index"
                            :disabled="!isKey"
                        >
                            {{item['name']}}
                        </el-checkbox>
                    </el-checkbox-group>
                </template>
            </el-form-item>
        </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveList()">保存</el-button>
        <el-button @click="showModal = false">取 消</el-button>
    </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'FilterModal',
    props: {
        show: Boolean,
        eidtData: Number,
        delData: Number
    },
    data() {
        return {
            addressList: [],
            nameList: [],
            checkList: [],
            list: [],
            showlist: [{
                key: '名字关键词',
                show: '',
            },{
                key: '名字',
                value: [],
                show: []
            },{
                key: '地方关键词',
                show: '',
            },{
                key: '地方',
                value: [],
                show: []
            }],
            formLabelWidth: '100px',
            keyword: '',
            value: '名字',
            radio: '1',
            isKey: false,
            showModal: false
        };
    },
    mounted() {
        this.getAddressList();
        this.getNameList();
        this.showModal = this.show;
    },
    methods: {
        async getAddressList() {
            let res = await this.$axios.post('/api/address.json', {});
            this.addressList = res.data;
        },
        async getNameList() {
            let res = await this.$axios.post('/api/name.json', {});
            this.nameList = res.data;
            this.list = res.data;
        },
        choose(value) {
            this.value = value;
        },
        saveList() {
            const arr = [];
            if(this.value === '名字') {
                if (this.keyword !== '') {
                    this.showlist[0].show = this.keyword;
                }
                if (this.checkList.length !== 0) {
                    this.checkList.forEach((item) => {
                        arr.push(this.nameList[item].name);
                    })
                    this.showlist[1].show = arr;
                    this.showlist[1].value = this.checkList;
                }
            } else {
                if (this.keyword !== '') {
                    this.showlist[2].show = this.keyword;
                }
                if (this.checkList.length !== 0) {
                    this.checkList.forEach((item) => {
                        arr.push(this.addressList[item].name);
                    })
                    this.showlist[3].show = arr;
                    this.showlist[3].value = this.checkList;
                }
            }
            this.$emit('getFilterList', this.showlist);
            this.sendApi();
            this.showModal = false;
        },
        reset() {
            this.list = this.nameList;
            this.keyword = '';
            this.value = '名字';
            this.radio = '1';
            this.isKey = false;
            this.checkList = [];
            this.$emit('update:eidtData', -1);
            this.$emit('update:delData', -1);
        },
        showEditDate() {
            if(this.eidtData >= 2) {
                this.value = '地方';
                this.keyword = this.showlist[2].show;
                this.checkList = this.showlist[3].value;
            } else {
                this.keyword = this.showlist[0].show;
                this.checkList = this.showlist[1].value;
            }
        },
        sendApi() {
            let keyword, keywordValue, chooseValue;
            const data = []
            if(this.value === '名字') {
                keyword = 'name';
                        
            } else {
                keyword = 'address';
            }
            keywordValue = this.keyword;
            chooseValue = this.checkList;   
            keywordValue !== '' ? data.push({ "key": keyword, "op":"match", "value": keywordValue }) : '' ;
            chooseValue.length !== 0 ? data.push({ "key": keyword, "op":"list", "value": chooseValue }) : '' ;
            console.log('以下为发送的数据:')
            console.log(data);
            this.$axios.post("/api/data.json", { 
                "conds": data
            });
        }
    },
    watch: {
        radio:function(val) {
            val === '1' ? this.isKey = false : this.isKey = true;
        },
        showModal:function(val) {
            if(!val) {
                this.$emit('update:show',val);
                // 下面初始默认值
                this.reset();
            }
        },
        show:function(val) {
            this.showModal = val;
        },
        value:function(val) {
            val === '名字' ? this.list = this.nameList : this.list = this.addressList;
            this.radio = '1'
            this.checkList = [];
            this.keyword = '';
            if(this.eidtData >= 0 && val === '名字') {
                this.keyword = this.showlist[0].show;
                this.checkList = this.showlist[1].value;
            } else {
                this.keyword = this.showlist[2].show;
                this.checkList = this.showlist[3].value;
            }
        },
        eidtData:function(index) {
            if (index !== -1 ) {
                this.showEditDate();
            }
        },
        delData:function(index) {
            if (index !== -1 ) {
                if (index % 2 === 0) { 
                    this.showlist[index].show = '' 
                } else { 
                    this.showlist[index].value = [];
                    this.showlist[index].show = [];
                }
                this.$emit('getFilterList', this.showlist);
            }
        }
    }
}
</script>
<style scoped>
.el-popper[x-placement^=bottom] {
    margin-top: -2px;
}
</style>