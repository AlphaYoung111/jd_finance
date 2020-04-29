<template>
  <Panel class="panel" title="新手特权">
    <section class="content">
      <div class="item">
        <h4>下载APP<span class="red">送888元礼包</span></h4>
        <p class="gray">新手专享</p>
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100"
          alt
        />
      </div>
      <div class="item">
        <ul>
          <li>
            <img
              src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=100&height=100"
              alt
            />
            <h4 class="red">领128元新手礼包</h4>
            <p class="gray">立即开通</p>
          </li>
          <li>
            <img
              src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100"
              alt
            />
            <h4>
              打白条
              <span class="red">享免息</span>
            </h4>
            <p class="gray">立即开通享豪礼</p>
          </li>
        </ul>
      </div>
    </section>
  </Panel>
</template>
<script>
import Panel from "@/views/core/Panel";
export default {
  components: {
    Panel
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/css/element.scss";
.panel {
  @include panel;
  .content {
    border-top: 1px solid #ddd;
    @include list(row);
    .item {
      width: 50%;
      font-weight: 900;
      box-sizing: border-box !important;
      &:first-child {
        padding: 32px 20px;
        text-align: center;
        border-right: 1px solid #ddd;
        img {
          width: 132px;
          height: 132px;
          margin: 20px auto;
        }
      }
      h4 {
        font-size: 26px;
        font-weight: 600;
        line-height: 40px;
      }
      .red {
        color: #f00;
        // font-size: 24px;
      }
      .gray {
        font-size: 22px;
        color: #999;
      }
      p {
        margin-top: 6px;
        font-size: 24px;
      }
      ul {
        width: 100%;
        li {
          height: 144px;
          width: 100%;
          padding: 36px 28px;
          box-sizing: border-box;
          &:first-child{
            border-bottom: 1px solid #ddd;
          } 
          h4 {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: left;
          }
          img {
            width: 80px;
            height: 80px;
            float: right;
          }
        }
      }
    }
  }
}
</style>