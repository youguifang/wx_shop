<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="search-input">
        <icon class="search-icon" type="search" size="32rpx"></icon>搜索
      </div>
    </div>
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
  </div>
</template>
<script>
import request from '../../utils/request.js'
export default {
  data() {
    return {
      imgUrl: [],
      menuList: []
    }
  },
  mounted () {
    // 首页轮播图的请求
    request("https://itjustfun.cn/api/public/v1/home/swiperdata")
    .then(res => {
      this.imgUrl = res.data.data
    })
    // 首页菜单导航的请求
    request("https://itjustfun.cn/api/public/v1/home/catitems")
    .then(res => {
     this.menuList = res.data.data
    })
  }
};
</script>

<style>
.search {
  padding: 16rpx 30rpx;
  background-color: #eb4450;
}
.search-input {
  height: 60rpx;
  background-color: #fff;
  border-radius: 3px;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-icon {
  margin-right: 16rpx;
}
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
</style>
