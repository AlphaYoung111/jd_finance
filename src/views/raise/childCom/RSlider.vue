<template lang="html">
    <Panel  class="panel">
        <section class="content">
            <swiper :options="options">
                <swiper-slide>百万白条券免费送，速来领取！！ <em>></em> </swiper-slide>
                <swiper-slide>签到领流量，1元500M！<em>></em> </swiper-slide>
            </swiper>
        </section>
    </Panel>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import Panel from "@/views/core/Panel";
export default {
  components: {
    Panel,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      options: {
        autoplay: true,
        loop: true,
        direction: "vertical"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  // margin-top: 120px !important;
  .content {
    height: 72px;
    line-height: 72px;
    overflow: hidden;
    padding-left: 178px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left
      top no-repeat;
    background-size: auto 100%;
  }
}
.swiper-container-vertical {
  height: 72px;
  .swiper-slide {
    font-family: PingFangSC-Medium;
    font-size: 28px;
    color: #333;
    em {
      color: #ddd;
      float: right;
      margin-right: 20px;
    }
  }
}
</style>

