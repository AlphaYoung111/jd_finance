<template>
  <Panel class="panel">
    <section class="content">
      <Slider :items="items" cname="slider"></Slider>
    </section>
  </Panel>
</template>
<script>
import Panel from "@/views/core/Panel";
import Slider from "@/views/core/Slider";

export default {
  components: {
    Panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/element.scss";
  .panel{
    @include panel;
    >h4{
      display: none;
    }
    .content{
      .slider{
        // margin-top: 120px;
        img{
          width: 100%;
        }
      }
    }
  }
</style>