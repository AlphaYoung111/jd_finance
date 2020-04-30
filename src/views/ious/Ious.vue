<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播 -->
    <i-slider></i-slider>
    <!-- 财富 -->
    <Welfare></Welfare>
    <!-- 服务 -->
    <Service></Service>
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

import ISlider from "./childCom/ISlider";
import Welfare from "./childCom/Welfare";
import Service from "./childCom/Service";

export default {
  components: {
    Header,
    Footer,
    NavBar,

    ISlider,
    Welfare,
    Service
  }
};
</script>
<style lang="scss" scoped>

</style>