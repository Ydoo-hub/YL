<template>
    <div v-if ='show'>
        <div
            class="Znq"
            @click="isShow()"
        >
            <!-- <Poptip
                content="周年庆"
                placement="top"
                trigger="hover"
            >
            </Poptip> -->
            <img src='@/assets/img/gift.png' height='20px' style="padding-top: 4px"><a style="position: relative;top:-2px;left:4px;color:#f35713">周年庆</a>
            <!-- <img src='@/assets/img/lucky_title.png' width="100px"/> -->
        </div>
        <div id='abb'>
            <AnniversaryModel
                :modeshow.sync ='modeshow'
                :prizeList ='prizeList'
                :prizename ='prizename'
                :prizekey ='prizekey'
                @closemodal ='close()'
            >
            </AnniversaryModel>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import AnniversaryModel from './AnniversaryModel.vue';
import { getGlobalVal } from '@/api/sys/config';
import baonian50 from '../../assets/img/50nian.png';
import baonian25 from '../../assets/img/25nian.png';
import baonian100 from '../../assets/img/100nian.png';
import baonian200 from '../../assets/img/200nian.png';
import zidongyue50 from '../../assets/img/50zidong.png';
import hyh from '../../assets/img/hyh.png';
import zidongyue150 from '../../assets/img/150zidong.png';
import zidongyue100 from '../../assets/img/100zidong.png';

@Component({
    name: 'update',
    components: {
        AnniversaryModel
    }
})
export default class Anniversary extends Vue {
    private modeshow: boolean = false;

    private show: boolean = true;

    private prizename: any = [];

    private prizekey: any = [];

    private prizeList: any = [
        {
            icon: zidongyue150, // 奖品图片
            key: 'proxy150', // 奖品名称
            name: '',
            isPrize: 1 // 该奖项是否为奖品
        },
        {
            icon: baonian50,
            key: 'year50',
            name: '',
            isPrize: 1
        },
        {
            icon: zidongyue100,
            key: 'proxy100',
            name: '',
            isPrize: 1
        },
        {
            icon: baonian100,
            key: 'year100',
            name: '',
            isPrize: 1
        },
        {
            icon: hyh,
            key: 'year25',
            name: '',
            isPrize: 0
        },
        {
            icon: zidongyue50,
            key: 'proxy50',
            name: '',
            isPrize: 1
        },
        {
            icon: hyh,
            key: 'year25_invaild',
            name: '',
            isPrize: 0
        },
        {
            icon: baonian200,
            key: 'year200',
            name: '',
            isPrize: 1
        }
    ];

    // @Watch('$route')
    // private onRouteChanged(route: any, oldRoute: any): void {
    //     if (['/login', '/registration', '/registration_success', 'active_user', '/forgetpassword'].includes(this.$route.path)) {
    //         this.show = false;
    //     } else {
    //         this.show = true;
    //     }
    // }

    private isShow() {
        if (this.prizeList[1].name === '') {
            const prizetip: any = [];
            getGlobalVal('PRIZE_LIST')
                .then((res: any) => {
                    //  console.log(res.data.data.list.PRIZE_LIST)
                    // this.prizename = Object.keys(res.data.data.list.PRIZE_LIST);
                    // for (const key of Object.keys(res.data.data.list.PRIZE_LIST)) {
                    //     prizetip.push(res.data.data.list.PRIZE_LIST[key]);
                    // }
                    for (let j = 0, len = this.prizeList.length; j < len;) {
                        this.prizeList[j].name = res.data.data.list.PRIZE_LIST[this.prizeList[j].key];
                        this.prizename.push(this.prizeList[j].name);
                        this.prizekey.push(this.prizeList[j].key);
                        j += 1;
                    }
                    this.modeshow = !this.modeshow;
                })
                .catch((e: any) => {
                    //
                });
        } else {
            this.modeshow = !this.modeshow;
        }
    }

    private close() {
        this.modeshow = false;
    }
}
</script>
<style lang="less" scoped>
.Znq {
    cursor: pointer;
    position: fixed;
    bottom: 6%;
    right: 30px;
    padding: 6px 14px;
    font-size: 14px;
    color: #f35713;
    background: #fff;
    border-radius: 22px;
    z-index: 666;
    box-shadow: 0 0 10px rgba(177, 55, 4, 0.5);
    border: 1px solid #fadddd;
    &:hover{
        background: #fff;
        box-shadow: 0 0 8px rgba(177, 55, 4, 0.6);
    }
    &:active{
        bottom: calc(6% + 1px);
    }
}
</style>
