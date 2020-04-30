<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播 -->
    <r-slider></r-slider>
    <!-- 每日签到 -->
    <Daily></Daily>
    <!-- 推荐 -->
    <In></In>
    <!-- 更多福利 -->
    <More></More>
    <!-- 底部 -->
    <Footer></Footer>
    <!-- 选项卡 -->
    <NavBar></NavBar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import RSlider from "./childCom/RSlider";
import Daily from "./childCom/Daily";
import In from "./childCom/In";
import More from "./childCom/More";


export default {
  components: {
    Header,
    Footer,
    NavBar,

    RSlider,
    Daily,
    In,
    More
  }
};
</script>
<style lang="scss" scoped>

</style>