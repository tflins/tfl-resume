<template>
  <div class="page introductions">
    <h1 class="title">自我介绍</h1>
    <div class="page-body">
      <div class="self-description">
        <p>2019届计算机专业毕业生，擅长 JavaScript 和 Node.js，熟练使用 Vue.js 全家桶进行开发及 Nuxt.js 进行前端同构，目前在威锋网任前端开发工程师</p>
      </div>

      <self-informations></self-informations>
    </div>
  </div>
</template>

<script>
import SelfInformations from '@/components/SelfInformations'

export default {
  components: {
    SelfInformations
  }
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

    .self-description {
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
    }
  }
}

@media (max-width: 480px) {
  .introductions {
    background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    .page-body {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;

      .self-description {
        background-color: #fff;
        width: 65%;

        text-align: justify;
        padding: 20px;
        margin-top: 40px;
        border-radius: 4px;

        p {
          font-size: 14px;
          color: #444;
        }
      }
    }
  }
}
</style>
