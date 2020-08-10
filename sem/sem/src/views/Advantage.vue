<template>
    <div id='bodyfour'>
        <p class="title">产品优势</p>
        <div class="superiority">
            <div class="superiority-item">
                <img class="superiority-item-img" src="@/assets/icon_07.png">
                <div class="superiority-item-text">
                    <p class='superiority-title'>数据加密传输</p>
                    <p class='superiority-content'>使用的浏览器是一个私有开发，并受到完全保护，不会发送隐藏请求和跟踪不必要的信息</p>
                </div>
            </div>
            <div class="superiority-item">
                <img class="superiority-item-img" src="@/assets/icon_08.png">
                <div class="superiority-item-text">
                    <p class='superiority-title'>超快访问速度</p>
                    <p class='superiority-content'>服务器全球化节点部署，为用户提供快速响应的访问</p>
                </div>
            </div>
            <div class="superiority-item">
                <img class="superiority-item-img" src="@/assets/icon_09.png">
                <div class="superiority-item-text">
                    <p class='superiority-title'>支持个性化定制</p>
                    <p class='superiority-content'>满足企业个性化的需求，为您打造独一无二的定制方案</p>
                </div>
            </div>
            <div class="superiority-item">
                <img class="superiority-item-img" src="@/assets/icon_10.png">
                <div class="superiority-item-text">
                    <p class='superiority-title'>专属优质客服</p>
                    <p class='superiority-content'>快速响应，解决每位客户的问题，帮助提高您的工作效率</p>
                </div>
            </div>
        </div>
        <a @click="toHome()" class='superiority-btn'>开始免费体验</a>
    </div>
</template>
<script>
export default {
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
      }
  }
}
</script>