<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import request from '@/utils/request'
// request({
//   method: 'GET',
//   url: '/front/ad/getAdList'
// }).then(res => {
//   console.log(res)
// })

export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
  @import '~@/styles/variables.scss';

  .text {
    color: $warning-color;
  }
</style>
