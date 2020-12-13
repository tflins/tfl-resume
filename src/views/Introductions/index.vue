<template>
  <div class="page introductions">
    <h1 class="title">自我介绍</h1>
    <div class="page-body">
      <div class="self-description">
        <p v-html="desc"></p>
      </div>

      <self-informations></self-informations>
    </div>
  </div>
</template>

<script>
import SelfInformations from '@/components/SelfInformations'

export default {

  data() {
    return {
      title: '自我介绍',
      desc: '进阶中的前端工程师，擅长 Typescript 和 Node.js，熟练使用 Vue.js 全家桶进行开发及 Nuxt.js 进行前端同构，目前在威锋网任前端开发工程师'
    }
  },

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
