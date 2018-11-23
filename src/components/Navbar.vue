<template lang="html">
  <div class="navbar">
    <div class="container">
          页面导航区
      <ul class="right-ul">
        <li @click="jumpToMain">首页</li>
        <li @click="jumpToRegister">注册</li>
        <li @click="jumpToLogin">登录</li>
      </ul>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    jumpToMain () {
      this.$router.push('/')
    },
    jumpToRegister () {
      this.$router.push('/register')
    },
    jumpToLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="less">
  .navbar{
    width: 100%;
    background: #eac;
    font-size: 20px;
    height: 56px;
    border: 2px solid black;

    .container{
      width: 90%;
      height: 50px;
      margin: 0 auto;
      max-width: 1400px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .right-ul {
      display: flex;
      align-items: center;
      color: #80bd01;
      li {
        cursor: pointer;
        padding: 0 15px;

        &:hover {
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 760px) {
    .navbar {
      width: 100%;
      background: #444;
      font-size: 13px;

      .container {
        width: 90%;
        height: auto;
        margin: 0 auto;
        max-width: 1400px;
        display: block;
        padding-top: 9px;

      }
    }
  }

  @media screen and (max-width: 430px) {
    .navbar {
      width: 100%;
      background: #444;
      font-size: 13px;

      .container {
        width: 90%;
        height: auto;
        margin: 0 auto;
        max-width: 1400px;
        display: block;
        padding-top: 9px;
      }
    }
  }

</style>
