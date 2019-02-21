<template>
  <view>
    <!-- Search组件 -->
    <search></search>
    <!-- 分类内容 -->
    <view class="cate">
      <view class="cate-left">
        <block v-for="(item, index) in navList" :key="index">
          <view>
            {{item}}
          </view>
        </block>
      </view>
      <view class="cate-right">右边</view>
    </view>
  </view>
</template>
<script>
import Search from '@/components/Search'
export default {
  components: {
    Search
  },
  data() {
    return {
      navList: ["大家电","小家电","其他的","大家电","小家电","其他的","大家电","小家电","其他的","大家电","小家电","其他的"]
    }
  }
}
</script>

<style lang="scss">
.cate {
  background-color: pink;
  position: fixed;
  top: 88rpx;
  left: 0;
  rigth: 0;
  bottom: 0;
  display: flex;

  &-left {
    width: 200rpx;
    background-color: red;
  }

  &-right {
    flex: 1;
    background-color: #fff;
  }

}
</style>
