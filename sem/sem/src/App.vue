<template>
  <div id="app">
    <Nav></Nav>
    <Register></Register>
    <Core></Core>
    <What></What>
    <Advantage></Advantage>
    <div id="contact">
      <div  class="qqbox">
        <a target="_blank"><img src='@/assets/qq_icon.png'/></a>
      </div>
      <Poptip id='poptipbox1' placement="right" width="340">
        <a @click="opencode()"><img src='@/assets/Wechat_icon.png'/></a>
        <div slot="content" class="code">
          <div class='codeitem'>
            <img src='@/assets/code1.png'/>
          </div>
          <div class='codeitem'>
            <img src='@/assets/code2.png' />
          </div>
          <div class='kefucontent'>
            <p class='kefucontent'>微信1：<a v-clipboard="" @click="copyOk" style="text-decoration: underline; color:#283c64">adspowerkefu</a></p>
          </div>
          <div class='kefucontent'>
            <p class='kefucontent'>微信2：<a v-clipboard="" @click="copyOk" style="text-decoration: underline; color:#283c64">adspowerkefu1</a></p>
          </div>
        </div>
      </Poptip>
      <Poptip id='poptipbox2' placement="right" width="270">
        <a @click="opencode()"><img src='@/assets/Wechat_icon.png'/></a>
        <div slot="content" class="code">
          <div class='codeitem'>
            <img class="codewidth" src='@/assets/code1.png'/>
          </div>
          <div class='codeitem'>
            <img class="codewidth" src='@/assets/code2.png' />
          </div>
          <div class='kefucontent'>
            <p class='kefucontent'><a v-clipboard="adspowerkefu" @click="copyOk" style="text-decoration: underline; color:#283c64">88888888</a></p>
          </div>
          <div class='kefucontent'>
            <p class='kefucontent'><a v-clipboard="adspowerkefu1" @click="copyOk" style="text-decoration: underline; color:#283c64">88888888</a></p>
          </div>
        </div>
      </Poptip>
    </div>
  </div>
</template>
<script>
import Nav from '@/views/Nav.vue'
import Register from '@/views/Register.vue'
import Core from '@/views/Core.vue'
import Advantage from '@/views/Advantage.vue'
import What from '@/views/What.vue'

import '@/css/index.scss'
import '@/css/media.scss'
import '@/css/media2.scss'
import '@/css/media4.scss'
import '@/css/media3.scss'
import '@/css/media5.scss'
import '@/css/media6.scss'

export default {
  components:{
    Nav,
    Register,
    Core,
    Advantage,
    What,
  },
  data() {
         return {
           codeShow:false,
           adspowerkefu: '',
           adspowerkefu1: ''
         }
  },
  methods:{
    opencode(){
      this.codeShow = !this.codeShow;
    },
    copyOk(){
      this.$Message.success('复制成功');
    }
  }
}
</script>
<style lang="less">

#nav a.router-link-exact-active {
  color: #42b983;
}
.ivu-poptip-body{
  padding-top: 12px!important;
  padding-right: 8px!important;
  padding-left: 8px!important;
}

</style>
