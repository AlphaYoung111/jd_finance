<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播+小图标 -->
    <m-slider></m-slider>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 选项卡 -->
    <NavBar></NavBar>
  </div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

import MSlider from './childCom/MSlider'

export default {
  components:{
    Header,
    Footer,
    NavBar,

    MSlider,

  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/reset.scss';

</style>