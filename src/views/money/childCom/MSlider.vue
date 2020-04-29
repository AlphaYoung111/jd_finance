<template>
  <Panel class="panel">
    <section class="content">
    <Slider></Slider>
    </section>
  </Panel>
</template>
<script>
import Panel from '@/views/core/Panel'
import Slider from "@/views/core/Slider";

export default {
  components:{
    Panel,
    Slider
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/css/element.scss';

</style>