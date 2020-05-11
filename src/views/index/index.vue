<template>
  <div class="appIndex">
    <div class="search">
      <span class="citi">
        北京
        <img src="../../assets/images/sanjiao.png" alt="">
      </span>

      <van-search
        v-model="value"
        shape="round"
        placeholder="请输入小区名称"
      >
        <template #left-icon>
          <img src="../../assets/images/searchIcon.png" class="searchIcon" alt="">
        </template>
      </van-search>

      <span class="user">
        <img src="../../assets/images/searchUser.png" alt="">
      </span>
    </div>
    <div class="swiper">
      <van-swipe height="120" :show-indicators="false" :autoplay="3000">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppIndex',
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    console.log(process.env)
  }
}
</script>
<style lang="scss" scoped>
.appIndex {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .search {
    height: 40px;
    display: flex;
    align-items: center;
    .citi {
      img {
        width: 8px;
        height: 8px;
      }
    }
    .user {
      img {
        width: 22px;
        height: 22px;
        vertical-align: bottom;
      }
    }
    .van-search {
      padding: 0 17px;
      height: 100%;
      flex: 1;
      font-size: 12px;
      color: #999999;
      .van-search__content {
        border: 1px solid #EBEBEB;
        background: #fff;
      }
      .van-icon {
        color: #999999;
      }
    }
    .searchIcon {
      width: 16px;
      height: 16px;
      vertical-align: sub;
    }
  }
  .swiper {
    margin-top: 12px;
  }
}
</style>
