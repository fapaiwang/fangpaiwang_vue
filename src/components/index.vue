<template>
  <div class="projectIndex">
    <div class="content">
      <router-view />
    </div>
    <projectFooter />
  </div>
</template>

<script>
import projectFooter from './projectFooter'
export default {
  name: 'ProjectIndex',
  components: {
    projectFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.projectIndex {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content {
    height: calc(100% - 50px);
  }
}
</style>
