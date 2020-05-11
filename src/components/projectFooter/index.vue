<template>
  <div class="projectFooter">
    <van-tabbar v-model="active" active-color="#E02E24" @change="tabChange">
      <van-tabbar-item name="index">
        <span>首页</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.indexCur : icon.index" />
      </van-tabbar-item>
      <van-tabbar-item name="tuijian">
        <span>重点推荐</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.tuijianCur : icon.tuijian" />
      </van-tabbar-item>
      <van-tabbar-item name="kefu">
        <span>客服</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.kefuCur : icon.kefu" />
      </van-tabbar-item>
      <van-tabbar-item name="extra">
        <span>我的</span>
        <img slot="icon" slot-scope="props" :src="props.active ? icon.myCur : icon.my" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'ProjectFooter',
  data() {
    return {
      active: 'index',
      icon: {
        index: require("../../assets/images/index.png"),
        indexCur: require("../../assets/images/indexCur.png"),
        tuijian: require("../../assets/images/tuijian.png"),
        tuijianCur: require("../../assets/images/tuijianCur.png"),
        kefu: require("../../assets/images/kefu.png"),
        kefuCur: require("../../assets/images/kefuCur.png"),
        my: require("../../assets/images/my.png"),
        myCur: require("../../assets/images/myCur.png")
      }
    }
  },
  methods: {
    tabChange(cur) {
      switch(cur) {
        case 'index':
          this.$router.push('/index')
          break;
        case 'tuijian':
          this.$router.push('/tuijian')
          break;
        case 'kefu':
          this.$router.push('/kefu')
          break;
        case 'my':
          this.$router.push('/my')
          break;
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.projectFooter {
  height: 50px;
}
</style>
<style lang="scss">
@font-face {
  font-family: 'my-icon';
  src: url('../../assets/images/my.png') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
</style>