<template>
  <div class="page work-experience">
    <h1 class="title">实习经历</h1>
    <div class="work-body">
      <div class="item">
        <h2 class="job">北京优炫软件 成都研发部 前端开发工程师</h2>
        <p class="time">2018年10月 - 2019年4月</p>
        <p class="content">
          参与开发了公司的 SIMO一体化运维系统，前期主要工作是修复公司项目 SIMO 一体化运维系统的缺陷，中期独立负责开发公司产品的移动端混合 APP 的前端页面及功能，
后期再次调回 SIMO 项目组，开发并封装新功能的弹窗，实习期间绩效评定全优。
        </p>
        <p class="skills">
          相关技术：jQuery、Bootstrap、D3.js、ECharts.js
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>
  
<style rel="stylesheet/scss" lang="scss" scoped>
.work-experience {
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);

  .work-body {
    margin-top: 40px;
    color: #eee;
    display: flex;
    justify-content: center;
    .item {
      width: 65%;
      text-align: center;

      .time {
        opacity: 0.7;
        margin-top: 10px;
      }

      .content {
        margin-top: 10px;
        line-height: 1.9;
      }

      .skills {
        margin-top: 10px;
      }
    }
  }
}
</style>
