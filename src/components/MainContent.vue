<template lang="html">
  <div class="main-content">
    <!--主要内容面板-->
    <div class="panel cancel-margin-right">
      <div class="panel-header">
        <ul>
          <li v-for="(li, index) in liItems" :key="index"
              v-text="li.text"
              :class="['nav-li', { status: li.isChecked }]"
              @click="changeChecked(li.text)">
          </li>
        </ul>
      </div>
      <div class="panel-content">
        <div class="div-li">
          <div class="li-left">

          </div>
          <div class="li-right flex-end"></div>
        </div>
      </div>
      <div class="footer-ul">分页栏</div>
     </div>
    <!--右侧面板-->
     <div class="sidebar hide">
       右侧面板
     </div>
  </div>

</template>

<script>
export default {
  name: 'MainContent',
  data () {
    return {
      firstEllipsis: false,
      lastEllipsis: true,
      isFirstHover: false,
      isLastHover: true,
      nowPageNum: 1,
      tabType: 'all',
      maxPage: 450,
      liItems: [
        { text: '全部', isChecked: true, tab: 'all' },
        { text: '精华', isChecked: false, tab: 'good' },
        { text: '分享', isChecked: false, tab: 'share' },
        { text: '问答', isChecked: false, tab: 'ask' },
        { text: '招聘', isChecked: false, tab: 'job' }
      ]
    }
  },
  methods: {
    changeChecked (checkedText) {

    }
  }
}
</script>

<style scoped lang="less">
  .main-content{
    position: relative;
    border: 2px solid black;
    margin: 5px 5px;
    height: 660px;

    .panel{
      margin-right: 330px;

      .panel-header {
        padding-left: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        border: 2px solid red;
        height: 45px;

        ul{
          height: 40px;
          display: flex;
          align-items: center;

          .nav-li {
            color: #80bd01;
            padding: 1px 4px 0 4px;
            border-radius: 3px;
            margin: 0 10px;
            cursor: pointer;
          }
          .nav-li.status {
            background: #80bd01;
            color: #fff;
          }
        }
      }

      .panel-content {
        background: #fff;
        border: 2px solid blue;
        height: 555px;

        .div-li{
          padding: 10px;
          border-top: 1px solid #f0f0f0;
          position: relative;

          &:hover {
            background-color: #f6f6f6;
          }

          .li-left {
            display: flex;
            align-items: center;

          }

          .li-right {
            width: 78px;
            display: flex;
            align-items: center;
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);

          }

        }
      }

      .footer-ul {
        background: #fff;
        height: 40px;
        padding: 10px 0 0 10px;
        border-radius: 0 0 3px 3px;
        border: 2px solid yellow;
        height: 35px;
      }

    }

    .sidebar {
      height: 650px;
      width: 290px;
      position: absolute;;
      right:0;
      top: 0;
      border: 2px solid yellow;
    }
  }

</style>
