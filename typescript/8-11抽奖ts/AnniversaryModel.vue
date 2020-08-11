<template>
     <Modal v-model="modeshow"
            width="700"
            footer-hide
            class-name="prizemodal"
            @on-visible-change="modalstatus()"
            :z-index='9999'
            :styles="{top: '20px'}"
            :closable='false'
        >
        <div style="text-align:center">
            <div class="close2" @click="modalstatus2()"></div>
            <!-- <p>1周年庆大活动，幸运大转盘</p>
            <p>活动时间：08.18 00:00～08.20 24:00，奖品兑换时间：08.18 00:00～08.31 24:00</p>
            <p>参与对象：公司管理员，活动周期只能参与一次</p> -->
            <div class="container1">
                <div class="lucky-wheel1">
                <div class="lucky-title1"></div>
                <div style="color: rgb(243,109,86);font-size:18px;">08.18 ～ 08.20 </div>
                <div class="wheel-main1">
                    <div class="wheel-pointer1" @click="beginRotate()"></div>
                    <div class="wheel-bg1" :style="rotateStyle">
                    <div class="prize-list1">
                        <div
                        class="prize-item1"
                        v-for="(item,index) in getPrizeList"
                        :key="index"
                        :style="item.style"
                        >
                        <div class="prize-pic1">
                            <img :src="item.icon" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="main1">
                    <div class="main-bg1"></div>
                    <div class="bg-p1"></div>
                    <div style="margin-top:30px;color: #ffeb39; font-size:16px">抽奖次数：{{count}}
                      <a style="margin-left:140px;display:black;background: #ffeb39;color: rgb(243,109,86);padding: 4px 10px;padding-bottom: 4px;border:1px #ffeb39 solid;border-radius:4px"
                         @click="prizebtn()">
                           <a style="font-size:14px;line-height: 24px; color:rgb(243,109,86)">
                           我的奖品
                           </a>
                      </a>
                    </div>
                    <!-- <div style="line-height:35px">中奖用户</div> -->
                    <!-- <marquee style="width:400px"><a style="font-size:20px;margin-left:20px" :key="key" v-for='(item,key) in this.email'>{{item}}</a></marquee> -->
                    <div class="tip1">
                        <div class="tip-title1">中奖用户</div>
                        <div class="tip-content1" style="padding: 0px;padding-top: 10px">
                            <marquee style="width:100%" loop="-1" scrollamount="1"><a style="font-size:16px;margin-left:20px;color:#fff8c5" :key="key" v-for='(item,key) in this.email'>{{item}}</a></marquee>
                        </div>
                    </div>
                    <div class="tip1">
                        <div class="tip-title1">活动规则</div>
                        <div class="tip-content1">
                            <p>1.每家公司只能参与一次，奖品兑现时间：2020.08.18～2020.08.31，过期视为放弃权益</p>
                            <p>2.协作版预付一年代金券，只能作为代金券应用于预付一年的协作版，不可折现，并且最多抵扣2个月的协作版费用</p>
                            <p>3.自动化按月代金券，只能作为代金券购买按月模式的自动化，不可折现</p>
                            <p>4.最终解释权归AdsPower所有</p>
                        </div>
                    </div>
                </div>
                <div class="toast1" v-show="prize">
                  <div class="toast-container1">
                      <img :src="toastIcon" class="toast-picture1" />
                      <div class="close1" @click="closeToast()"></div>
                      <div class="toast-title1" v-html="toastTitle"></div>
                      <div class="toast-btn1">
                      <div class="toast-cancel1" @click="closeToast">关闭</div>
                      </div>
                  </div>
                </div>
                <div class="toast-mask1" v-show="prize"></div>

                <div class="toast1" v-show="yourPrize">
                  <div class="toast-container1">
                      <!-- <img :src="toastIcon" class="toast-picture1" /> -->
                      <div class="close1" @click="closeToast()"></div>
                      <div class="toast-title1" v-if ='haveprize'>您的奖品<br><img :src ='getprizename' /><br>兑现码:{{getprizecode}}</div>
                      <div class="toast-title1" v-else > 暂时未有中奖信息哦 </div>
                      <div class="toast-btn1">
                      <div class="toast-cancel1" @click="closeToast()">关闭</div>
                      </div>
                  </div>
                </div>

                <div class="toast1" v-show="noOpportunity">
                  <div class="toast-container1">
                      <!-- <img :src="toastIcon" class="toast-picture1" /> -->
                      <div class="close1" @click="closeToast()"></div>
                      <div class="toast-title1">每家公司只能抽奖1次哦，您已抽奖，可在我的获奖查看奖品哦</div>
                      <div class="toast-btn1">
                      <div class="toast-cancel1" @click="closeToast()">关闭</div>
                      </div>
                  </div>
                </div>

                <div class="toast1" v-show="noPower">
                  <div class="toast-container1">
                      <!-- <img :src="toastIcon" class="toast-picture1" /> -->
                      <div class="close1" @click="closeToast()"></div>
                      <div class="toast-title1">只有管理员才可以抽奖哦，请联系管理员抽奖啦</div>
                      <div class="toast-btn1">
                      <div class="toast-cancel1" @click="closeToast()">关闭</div>
                      </div>
                  </div>
                </div>

                <div class="toast1" v-show="noOpen">
                  <div class="toast-container1">
                      <!-- <img :src="toastIcon" class="toast-picture1" /> -->
                      <div class="close1" @click="closeToast()"></div>
                      <div class="toast-title1">非活动时间，暂时不能抽奖哦</div>
                      <div class="toast-btn1">
                      <div class="toast-cancel1" @click="closeToast()">关闭</div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    </Modal>
</template>
<script lang="ts">
import {
    State, Action, Getter, namespace
} from 'vuex-class';
import {
    Component, Prop, Watch, Model, Vue, Emit
} from 'vue-property-decorator';
import { getGlobalVal } from '@/api/sys/config';
import { getCompanyPrize, getPrize } from '@/api/sys/admin/company';
import congratulation from '../../assets/img/congratulation.png';
import sorry from '../../assets/img/sorry.png';
import nian25n from '../../assets/img/25nian.png';

const CIRCLE_ANGLE = 360;
const config = {
    // 总旋转时间
    duration: 4000,
    // 旋转圈数
    circle: 8,
    mode: 'ease-in-out'
};

@Component
export default class AnniversaryModel extends Vue {
    @Prop({ default: false })
    private modeshow!: boolean;

    @Prop({ default: false })
    private prizeList!: any;

    @Prop({ default: false })
    private prizename!: any;

    @Prop({ default: false })
    private prizekey!: any;

    private modelshow: boolean = false;

    private haveprize: boolean = true;


    private nian25 = nian25n;

    private noOpen: boolean = false;

    private modal2: boolean = true;

    private duration: number = 3000;

    private count: number = 0;

    private rotateAngle: number = 0;

    private index: number = 0;

    private prize: any = null;

    private yourPrize: any = false;

    private angleList: any = [];

    private isRotating: boolean = false;

    private config: any = config;

    private prizenum: number = 0;

    private getprizekey: number = 0;

    private getprizename: string = '';

    private getprizecode: number = 0;

    private prizeindex: number = -1;

    private noOpportunity: boolean = false;

    private noPower: boolean = false;

    private email: any = ['恭喜 v***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 b***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 f***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 f***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 v***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 b***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 z***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 g***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 3***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 c***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 p***@***.com 用户抽中 $100协作版预付一年代金券',
        '恭喜 o***@***.net 用户抽中 $50自动化按月代金券',
        '恭喜 y***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 r***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 p***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 s***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 c***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 x***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 b***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 s***@***.net 用户抽中 $100自动化按月代金券',
        '恭喜 t***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 k***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 6***@***.net 用户抽中 $50自动化按月代金券',
        '恭喜 p***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 x***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 5***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 b***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 d***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 4***@***.com 用户抽中 $100协作版预付一年代金券',
        '恭喜 y***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 u***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 v***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 o***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 u***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 p***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 m***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 y***@***.com 用户抽中 $50自动化按月代金券',
        '恭喜 x***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 w***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 h***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 5***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 m***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 2***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 y***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 j***@***.com 用户抽中 $100协作版预付一年代金券',
        '恭喜 w***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 c***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 3***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 3***@***.com 用户抽中 $100协作版预付一年代金券',
        '恭喜 n***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 b***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 z***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 g***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 3***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 c***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 p***@***.com 用户抽中 $100协作版预付一年代金券',
        '恭喜 o***@***.net 用户抽中 $50自动化按月代金券',
        '恭喜 y***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 r***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 p***@***.com 用户抽中 $200协作版预付一年代金券',
        '恭喜 s***@***.com 用户抽中 $50协作版预付一年代金券',
        '恭喜 c***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 x***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 b***@***.net 用户抽中 $200协作版预付一年代金券',
        '恭喜 6***@***.net 用户抽中 $50自动化按月代金券',
        '恭喜 p***@***.net 用户抽中 $50协作版预付一年代金券',
        '恭喜 x***@***.com 用户抽中 $100自动化按月代金券',
        '恭喜 5***@***.net 用户抽中 $100协作版预付一年代金券',
        '恭喜 b***@***.net 用户抽中 $150自动化按月代金券',
        '恭喜 d***@***.com 用户抽中 $150自动化按月代金券',
        '恭喜 4***@***.com 用户抽中 $100协作版预付一年代金券'
    ];

    private modalstatus() {
        if (this.modeshow === false) {
            this.$emit('closemodal');
        }
        this.yourPrize = false;
        this.noOpportunity = false;
        this.noPower = false;
        this.noOpen = false;
    }

    private modalstatus2() {
        this.modeshow = false;
        if (this.modeshow === false) {
            this.$emit('closemodal');
        }
        this.yourPrize = false;
        this.noOpportunity = false;
        this.noPower = false;
        this.noOpen = false;
    }

    private getprize() {
        getCompanyPrize()
            .then((res: any) => {
                if (res.data.data.list.times === '1') {
                    this.haveprize = false;
                } else {
                    this.haveprize = true;
                }
                this.count = Number(res.data.data.list.times);
                this.getprizecode = res.data.data.list.redeem_code;
                for (let a = 0; a < this.prizeList.length;) {
                    if (res.data.data.list.prize_key === this.prizeList[a].key) {
                        this.getprizename = this.prizeList[a].icon;
                        if (res.data.data.list.prize_key === 'year25') {
                            this.getprizename = this.nian25;
                        }
                    }
                    a += 1;
                }
            })
            .catch((err: any) => {
                //
            });
    }

    private mounted() {
        this.getprize();
    }

    private created() {
        // 初始化一些值
        this.angleList = [];
        // 是否正在旋转
        this.isRotating = false;
        // 基本配置
        this.config = config;
        // 获取奖品列表
        this.initPrizeList();
    }

    // get getmodeshow() {
    //     return this.modeshow;
    // }

    get rotateStyle() {
        return `
          -webkit-transition: transform ${this.config.duration}ms ${this.config.mode};
          transition: transform ${this.config.duration}ms ${this.config.mode};
          -webkit-transform: rotate(${this.rotateAngle}deg);
          transform: rotate(${this.rotateAngle}deg);`;
    }

    get toastTitle() {
        return this.prize && this.prize.isPrize === 1 ? `恭喜你获得了 <img src='${this.getprizename}'><br>兑现码：${this.getprizecode}` : `很遗憾，没有中奖哦<br>赠送您$25协作版预付一年代金券<br> <img src='${this.getprizename}'><br>兑现码: ${this.getprizecode} `;
    }

    get getPrizeList() {
        return this.prizeList;
    }

    get toastIcon() {
        return this.prize && this.prize.isPrize === 1
            ? congratulation
            : sorry;
    }

    private initPrizeList() {
        // 这里可以发起请求，从服务端获取奖品列表
        // 这里使用模拟数据
        this.formatPrizeList(this.prizeList);
    }

    // 格式化奖品列表，计算每个奖品的位置
    private formatPrizeList(list: any) {
        // 记录每个奖的位置
        const angleList: any = [];
        const l = list.length;
        // 计算单个奖项所占的角度
        const average = CIRCLE_ANGLE / l;
        const half = average / 2;
        // 循环计算给每个奖项添加style属性
        list.forEach((item: any, i: any) => {
            // 每个奖项旋转的位置为 当前 i * 平均值 + 平均值 / 2
            const angle = -((i * average) + half);
            // 增加 style
            item.style = `-webkit-transform: rotate(${angle}deg);
                          transform: rotate(${angle}deg);`;
            // 记录每个奖项的角度范围
            angleList.push((i * average) + half);
        });
        this.angleList = angleList;
    }

    private beginRotate() {
        this.getprize();
        if (this.count === 0) {
            this.noOpportunity = true;
            return;
        }
        // 开始抽奖
        // 这里这里向服务端发起请求，得到要获得的奖
        // 可以返回下标，也可以返回奖品 id，通过查询 奖品列表，最终得到下标
        // 随机获取下标
        // this.index = this.random(this.prizeList.length - 1);
        getPrize()
            .then((res: any) => {
                this.index = this.prizekey.indexOf(res.data.data.list.prize_key);
                this.getprizecode = res.data.data.list.redeem_code;
                // this.index = this.prizeindex;
                // this.count--;
                this.count = this.count - 1;
                // 开始旋转
                this.rotating();
                this.getprize();
                // getCompanyPrize()
                //     .then((re: any) => {
                //         this.count = re.data.data.list.times;
                //         this.getprizekey = re.data.data.list.prize_key;
                //         this.getprizecode = re.data.data.list.redeem_code;
                //     })
                //     .catch((err: any) => {
                //         //
                //     });
            })
            .catch((err: any) => {
                if (err.code === 4201) {
                    this.noPower = true;
                }
                if (err.code === 4204) {
                    this.noOpen = true;
                }
            });
    }

    private random(max: number, min: number = 0) {
        return parseInt(String(Math.random() * (max - min + 1) + min), 10);
    }

    private rotating() {
        if (this.isRotating) {
            return;
        }
        this.isRotating = true;
        const angle = this.rotateAngle + this.config.circle * CIRCLE_ANGLE + this.angleList[this.index] - (this.rotateAngle % CIRCLE_ANGLE);
        this.rotateAngle = angle;
        setTimeout(() => {
            this.rotateOver();
        }, config.duration + 1000);
    }

    private rotateOver() {
        this.isRotating = false;
        this.prize = this.prizeList[this.index];
    }

    private closeToast() {
        this.prize = null;
        this.yourPrize = false;
        this.noOpportunity = false;
        this.noPower = false;
        this.noOpen = false;
    }

    private prizebtn() {
        this.getprize();
        this.yourPrize = true;
    }
}
</script>
<style lang="less">
.Ann-box{
    display: block;
    position: absolute;
    left: calc(50% - 400px);
    top: 80px;
    min-width: 800px;
    min-height: 900px;
    z-index: 999;
    background: #ccc;
    border-radius: 20px;
    padding:20px
}
.ivu-modal-close{
}
.prizemodal{
   z-index: 999;
  .ivu-modal-body{
      padding: 0px;
  }
}
/* .ivu-modal-footer{
    display: none;
}
.ivu-modal-body{
    background: #cccccc;
} */
.container1 {
  width: 100%;
}
.lucky-wheel1 {
  width: 100%;
  background: rgb(252, 207, 133) url('../../assets/img/color_pillar.png') no-repeat
    center bottom;
  background-size: 100%;
  padding-top: 20px;
  z-index: 666;
}
.lucky-title1 {
  width: 300px;
  height: 95px;
  margin-left: calc(50% - 150px);
  background: url('../../assets/img/lucky_title.png') no-repeat center top;
  background-size: 100%;
}
.wheel-main1 {
  margin: 0 auto;
  position: relative;
  top:20px;
  width: 385px;
  height: 385px;
}
.wheel-bg1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/draw_wheel.png') no-repeat center top;
  background-size: 100%;
  color: #fff;
}
.wheel-pointer1 {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  width: 105px;
  height: 105px;
  background: url('../../assets/img/draw_btn.png') no-repeat center top;
  background-size: 100%;
  transform: translate3d(-50%, -50%, 0);
}
.wheel-bg1 div {
  text-align: center;
}
.prize-list1 {
  width: 100%;
  height: 100%;
  position: relative;
}
.prize-list1 .prize-item1 {
  position: absolute;
  width: 95px;
  height: 150px;
  top: 0;
  left: 50%;
  margin-top: 42px;
  margin-left: -46.5px;
  transform-origin: 50% 100%;
}

.prize-pic1 img {
  width: 6.0625rem;
  height: 4rem;
  margin-top: -0.5rem;
}
.prize-count1 {
  font-size: 0.875rem;
}
.prize-type1 {
  position: absolute;
  top: 50px;
  margin-left: calc(50% - 30px);
  width: 60px;
  font-size: 0.1rem;
}
.main1 {
  position: relative;
  width: 100%;
  min-height: 400px;
  background: rgb(243, 109, 86);
  padding-bottom: 20px;
}
.main-bg1 {
  width: 100%;
  height: 98px;
  position: absolute;
  top: -94px;
  left: 0;
  background: url('../../assets/img/luck_bg.png') no-repeat center top;
  background-size: 100%;
}
.bg-p1 {
  width: 100%;
  height: 3.5px;
  background: rgb(252, 207, 133);
}
.content1 {
  position: absolute;
  top: 0.175rem;
  left: 0;
  background: rgb(243, 109, 86);
  width: 100%;
  height: 50px;
  font-size: 1.125rem;
  color: #ffeb39;
  padding-left: 6.75rem;
}
.content1 div {
  text-align: left;
}
.tip1 {
  position: relative;
  margin: 2.5rem auto 0;
  width: 600px;
  border: 1px solid #fbc27f;
}
.tip-title1 {
  position: absolute;
  top: -1rem;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1rem;
  color: #fccc6e;
  background: rgb(243, 109, 86);
  padding: 0.3125rem 0.625rem;
}
.tip-content1 {
  text-align: left;
  padding: 1.5625rem 0.625rem;
  font-size: 0.875rem;
  color: #fff8c5;
  line-height: 1.5;
}
.toast-mask1 {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.toast1 {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 20000;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #fff;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  background-color: rgb(252, 244, 224);
}
.toast-container1 {
  position: relative;
  padding:0px 20px;
  width: 100%;
  height: 100%;
  border: 1px dotted #fccc6e;
}
.toast-picture1 {
  position: absolute;
  top: -6.5rem;
  left: 60px;
  width: 18.75rem;
  height: 8.5625rem;
}
.toast-pictrue-change1 {
  position: absolute;
  top: -1.5rem;
  left: -1.375rem;
  width: 17.5rem;
  height: 3.125rem;
}
.toast-title1 {
  padding: 2.8125rem 0;
  font-size: 18px;
  color: #fc7939;
  text-align: center;
}
.toast-btn1 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.9375rem;
}
.toast-btn1 div {
  background-image: -moz-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );

  background-image: -ms-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  background-image: -webkit-linear-gradient(
    -18deg,
    rgb(242, 148, 85) 0%,
    rgb(252, 124, 88) 51%,
    rgb(252, 124, 88) 99%
  );
  box-shadow: 0px 4px 0px 0px rgba(174, 34, 5, 0.7);
  width: 4.6875rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  text-align: center;
  line-height: 1.875rem;
  color: #fff;
}
.close1 {
  position: absolute;
  top: -0.9375rem;
  right: -0.9375rem;
  width: 2rem;
  height: 2rem;
  background: url('../../assets/img/close_store.png') no-repeat center top;
  background-size: 100%;
}
.close2 {
  position: absolute;
  top: -0.9375rem;
  right: -0.9375rem;
  width: 4rem;
  height: 4rem;
  background: url('../../assets/img/close_store.png') no-repeat center top;
  background-size: 100%;
}
.content2{
}
</style>
