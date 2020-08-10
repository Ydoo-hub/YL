<template>
    <div id="navdiv">
        <div class="navleft">
            <img src="@/assets/logo.jpg" class="logoimg" width="168px" height="28px">
        </div>
        <div class="navright">
            <a @click='toHome()' class="active">首页</a>
            <a @click="toVideo()" class="other">视频教学</a>
            <a href="https://help.acczing.com/" class="other">帮助中心</a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navdiv',
  methods:{
      toHome(){
          const code = localStorage.getItem('code');
          const source = localStorage.getItem('source')
          if(code&&source){
            window.location.href = 'https://www.acczing.com/?code='+ code + '&source=' + source;
          }else if(code && !source){
              window.location.href = 'https://www.acczing.com/?code='+ code;
          }else if(!code && source){
              window.location.href = 'https://www.acczing.com/?source='+ source;
          }else{
              window.location.href = 'https://www.acczing.com/';
          }
      },
      toVideo(){
          const code = localStorage.getItem('code');
          const source = localStorage.getItem('source')
          if(code&&source){
            window.location.href = 'https://acczing.com/video/?code='+ code + '&source=' + source;
          }else if(code && !source){
              window.location.href = 'https://acczing.com/video/?code='+ code;
          }else if(!code && source){
              window.location.href = 'https://acczing.com/video/?source='+ source;
          }else{
              window.location.href = 'https://acczing.com/video/';
          }
      },
  }
}
</script>
