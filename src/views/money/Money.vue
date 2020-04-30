<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播 -->
    <m-slider></m-slider>
    <!-- 广告 -->
    <ad-a></ad-a>
    <!-- 理财 -->
    <m-money></m-money>
    <!-- 广告 -->
    <ad-b></ad-b>
    <!-- 金融 -->
    <Finance></Finance>
    <!-- 广告 -->
    <ad-c></ad-c>
    <!-- 底部 -->
    <Footer style_name="m_footer"></Footer>
    <!-- 选项卡 -->
    <NavBar></NavBar>
  </div>
</template>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

import MSlider from "./childCom/MSlider";
import AdA from "./childCom/AdA";
import MMoney from "./childCom/MMoney";
import AdB from "./childCom/AdB";
import Finance from "./childCom/Finance";
import AdC from "./childCom/AdC";

export default {
  components: {
    Header,
    Footer,
    NavBar,

    MSlider,
    AdA,
    MMoney,
    AdB,
    Finance,
    AdC
  }
};
</script>
<style lang="scss" scoped>
.m_footer {
  margin-top: 0 !important;
  > h4 {
    display: none;
  }
  ul {
    > li:first-child {
      display: none !important;
    }
  }
}
</style>