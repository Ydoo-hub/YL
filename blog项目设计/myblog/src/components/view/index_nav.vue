<template>
  <div>
    <!-- Start Home -->
    <div class="pageheader">
      <div class="container">
        <h2 class="title">Ydoo</h2>
        <p>个人博客&nbsp;&nbsp;&nbsp;v1</p>
      </div>
    </div>
    <!-- End Home -->
    <!-- Start Navigation -->
    <nav class="navbar navbar-default navbar-sticky bootsnav">

      <!-- Start Top Search -->
      <div class="top-search">
        <div class="container">
          <div class="input-group">
            <span class="input-group-addon searchi"><i class="fa fa-search"></i></span>
            <input type="text" class="form-control searchv" placeholder="Search">
            <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
          </div>
        </div>
      </div>
      <!-- End Top Search -->

      <div class="container">
        <!-- Start Atribute Navigation -->
        <div class="attr-nav">
          <ul>
            <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
          </ul>
        </div>
        <!-- End Atribute Navigation -->

        <!-- Start Header Navigation -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i class="fa fa-bars"></i>
          </button>
          <a class="navbar-brand" href="login.html"><img src="images/brand/logo-black.png" class="logo" alt=""></a>
        </div>
        <!-- End Header Navigation -->

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="navbar-menu">
          <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
            <li><a href="index.html">首页</a></li>
            <li><a href="about.html">关于我的博客</a></li>
            <li><a href="web.html">前端分享</a></li>
            <li><a href="data.html">数据结构</a></li>
            <li><a href="algorithm.html">算法</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div>
    </nav>
  </div>
</template>

<script>

  export default {
        name: "indexNav",
        $
    }
</script>

<style scoped>

</style>
