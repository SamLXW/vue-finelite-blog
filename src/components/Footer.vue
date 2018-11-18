<template lang="html">
  <div class="footer">
    <div class="footer-main">
        页面底部信息区
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="less">
  .footer{
    width: 100%;
    background: burlywood;
    border: 2px solid black;
    height: 100px;

    .footer-main{
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      color: black;
      padding: 20px 0;
      line-height: 2em;
    }

  }

</style>
