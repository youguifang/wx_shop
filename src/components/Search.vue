<template>
    <!-- 搜索框 -->
    <div class="search">
      <div class="search-input">
        <icon class="search-icon" type="search" size="32rpx"></icon>搜索
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lan="scss">
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
</style>