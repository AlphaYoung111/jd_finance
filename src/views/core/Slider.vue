<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick" :class="sclass">
      <swiper-slide v-for="item in items" :key="item.src" class="slide-item">
        <router-link :to="{name:item.href}">
          <img :src="item.src" alt />
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    cname: {
      type: String,
      default: ""
    },
    sclass: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => {
        return {
          autoplay: true,
          loop: true,
          pagination: {
            el: ".swiper-pagination"
          },
          notNextTick: false
        };
      }
    },
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~swiper/css/swiper.css";
.slide-item {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>