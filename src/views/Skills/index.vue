<template>
  <div class="page skills">
    <h1 class="title">技能</h1>
    <div class="skills-body">
      <div class="tag-panel">
        <div class="tag familiar">C语言</div>
        <div class="tag expert">Webpack</div>
      </div>
      <div class="tag-panel">
        <div class="tag familiar">jQuery</div>
        <div class="tag expert">Vue.js</div>
        <div class="tag expert">Git</div>
        <div class="tag expert">Scss</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">HTML5</div>
        <div class="tag expert">JavaScript</div>
        <div class="tag expert">Nuxt.js</div>
        <div class="tag expert">CSS</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">Node.js</div>
        <div class="tag familiar">Koa2</div>
        <div class="tag familiar">Express</div>
      </div>
      <div class="tag-panel">
        <div class="tag familiar">PhotoShop</div>
        <div class="tag familiar">Mongodb</div>
      </div>
    </div>

    <div class="skills-body-m">
      <div class="tag-panel">
        <div class="tag familiar">C语言</div>
        <div class="tag familiar">Mongodb</div>
        <div class="tag familiar">PhotoShop</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">Vue.js</div>
        <div class="tag expert">Git</div>
        <div class="tag expert">Scss</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">HTML5</div>
        <div class="tag expert">JavaScript</div>
        <div class="tag expert">Nuxt.js</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">Node.js</div>
        <div class="tag familiar">Koa2</div>
        <div class="tag familiar">Express</div>
      </div>
      <div class="tag-panel">
        <div class="tag familiar">jQuery</div>
        <div class="tag expert">CSS</div>
        <div class="tag expert">Webpack</div>
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
.skills {
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);

  .skills-body-m {
    display: none;
  }

  .skills-body {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 40px;

    .tag-panel {
      display: flex;
      flex-direction: row;
      width: 60%;
      text-align: center;
      // align-items: center;
      // justify-content: space-around;
      justify-content: center;

      margin: 20px 0;

      .tag {
        min-width: 45px;
        color: #fff;
        text-align: center;
        background-color: #096254;
        padding: 10px;
        margin: 0 40px;
        border-radius: 4px;
      }

      .expert {
        opacity: 1;
      }

      .familiar {
        opacity: 0.7;
      }
    }
  }
}

@media (max-width: 480px) {
  .skills {
    .skills-body {
      display: none;
    }
    .skills-body-m {
      display: block;

      display: flex;
      flex-direction: column;
      align-items: center;

      margin-top: 40px;

      .tag-panel {
        display: flex;
        flex-direction: row;
        width: 60%;
        text-align: center;
        // align-items: center;
        // justify-content: space-around;
        justify-content: center;

        margin: 20px 0;

        .tag {
          min-width: 66px;
          font-size: 14px;
          color: #fff;
          text-align: center;
          background-color: #096254;
          padding: 10px;
          margin: 0 5px;
          border-radius: 4px;
        }

        .expert {
          opacity: 1;
        }

        .familiar {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>
