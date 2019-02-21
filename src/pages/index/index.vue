<template>
  <div>
    <!-- Search组件 -->
    <search></search>
    <!-- 首页轮播图 -->
    <div>
      <swiper
        indicator-dots
        autoplay
        class="slide"
        circular
      >
        <block v-for="(item, index) in imgUrl" :key="index">
          <swiper-item>
            <image mode="widthFix" :src="item.image_src" class="slide-image"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
    <!-- 菜单导航 -->
    <div class="menu">
      <img class="menu-item" v-for="(item, index) in menuList" :key="index" :src="item.image_src" />
    </div>
    <!-- 楼层 -->
    <div class="floor">
      <div class="floor-item" v-for="(item, index) in floors" :key="index">
        <div class="floor-head">
          <image
            mode="aspectFit"
            :src="item.floor_title.image_src"
          >
          </image>
        </div>
        <div class="floor-body">
          <div class="floor-body-left">
            <image
              :src="item.product_list[0].image_src">
            </image>
          </div>
          <div class="floor-body-right">
            <image
              v-for="(subItem, subIndex) in item.product_list" :key="subIndex" v-if="subIndex != 0"
              :src="subItem.image_src"
            >
            </image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utils/request.js'
import Search from '@/components/Search'
export default {
  components: {
    Search
  },
  data() {
    return {
      imgUrl: [],
      menuList: [],
      floors: []
    }
  },
  mounted () {
    // 首页轮播图的请求
    request("https://www.zhengzhicheng.cn/api/public/v1/home/swiperdata")
    .then(res => {
      console.log(res)
      this.imgUrl = res.data.message
    })
    // 首页菜单导航的请求
    request("https://www.zhengzhicheng.cn/api/public/v1/home/catitems")
    .then(res => {
     this.menuList = res.data.message
    })
    // 楼层的数据请求
    request("https://www.zhengzhicheng.cn/api/public/v1/home/floordata")
    .then(res => {
      console.log(res)
      this.floors = res.data.message
    })
  }
};
</script>

<style lang="scss">
.slide {
  height: 340rpx; 
}
.slide-image {
  width: 100%;
  height: 100%;
}
.menu {
  padding: 24rpx;
  display: flex;
  justify-content: space-around;
}
.menu-item {
  width: 128rpx;
  height: 140rpx;
}
.floor .floor-head {
  width: 100%;
  height: 88rpx;
  
}
.floor-head image {
  width: 100%;
  height: 88rpx;
}
.floor .floor-body {
  padding: 20rpx 16rpx 20rpx 16rpx;
  display: flex;
}
.floor-body .floor-body-left {
  width: 235rpx;
  height: 368rpx;
  margin-right: 10rpx;
}
.floor-body .floor-body-left image {
  width: 100%;
  height: 100%;
}
.floor-body .floor-body-right {
  width: 476rpx;
  height: 368rpx;
  display: flex;
  flex-wrap: wrap;
}
.floor-body .floor-body-right image {
  width: 233rpx;
  height: 180rpx;
  margin-bottom: 10rpx;
  // margin-right: 3rpx;
  &:nth-of-type(odd) {
    margin-right: 10rpx;
  }
}
</style>
