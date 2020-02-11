<template>
  <div class="page skills">
    <h1 class="title">技能</h1>
    <div class="skills-body">
      <div class="tag-panel">
        <div class="tag familiar">C语言</div>
        <div class="tag expert">Webpack</div>
      </div>
      <div class="tag-panel">
        <div class="tag familiar">Bootstrap</div>
        <div class="tag familiar">jQuery</div>
        <div class="tag expert">Vue.js</div>
        <div class="tag expert">Git</div>
        <div class="tag expert">Scss</div>
      </div>
      <div class="tag-panel">
        <div class="tag expert">HTML5</div>
        <div class="tag expert">JavaScript(ES5/ES6+)</div>
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
        color: #fff;
        display: flex;
        background-color: #096254;
        padding: 10px;
        margin: 0 10px;
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
  .skills-body {
    
  }
}
</style>
