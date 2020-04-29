<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- 轮播+小图标 -->
    <h-slider></h-slider>
    <!-- 新手特权 -->
    <Novice></Novice>
    <!-- 急速借贷 -->
    <Borrow></Borrow>
    <!-- 理财 -->
    <HMoney></HMoney>
    <!-- 产品 -->
    <Product></Product>
    <!-- 生活 -->
    <Life></Life>
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

import HSlider from './childCom/HSlider'
import Novice from './childCom/Novice'
import Borrow from './childCom/Borrow'
import HMoney from './childCom/HMoney'
import Product from './childCom/Product'
import Life from './childCom/Life'
export default {
  components:{
    Header,
    Footer,
    NavBar,

    HSlider,
    Novice,
    Borrow,
    HMoney,
    Product,
    Life
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/reset.scss';

</style>