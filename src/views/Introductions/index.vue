<template>
  <div class="page introductions">
    <h1 class="title">自我介绍</h1>
    <div class="page-body">
      <div class="self-description">
        <p>2019届计算机专业毕业生，擅长 JavaScript 和 Node.js，熟练使用VUE全家桶。</p>
      </div>
      <div class="self-informations">
        <div class="info-row">
          <div class="info-item">
            <i class="iconfont icon-shengri"></i>
            <p>1997.03.09</p>
          </div>
          <div class="info-item">
            <i class="iconfont icon-daxue"></i>
            <p>北方民族大学·计算机</p>
          </div>
          <div class="info-item">
            <i class="iconfont icon-icon-location"></i>
            <p>广东·广州</p>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <i class="iconfont icon-email"></i>
            <p>tflins@163.com</p>
          </div>
          <div class="info-item">
            <i class="iconfont icon-dianhua"></i>
            <p>+86 18209684180</p>
          </div>
        </div>
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
.introductions {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
  .page-body {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .self-description,
    .self-informations {
      background-color: #fff;
      width: 65%;

      text-align: center;
      padding: 20px;
      margin-top: 40px;
      border-radius: 4px;

      p {
        font-size: 14px;
        color: #444;
      }

      .info-row {
        margin: 25px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .info-item {
          .iconfont {
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
