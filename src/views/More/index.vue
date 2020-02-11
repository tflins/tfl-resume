<template>
  <div class="page articles">
    <h1 class="title">了解更多</h1>
    <div class="more-body">
      <div class="contact">
        <a href="http://tflin.com/" target="_blank" class="blog">个人博客</a> |
        <a href="https://github.com/tflins" target="_blank" class="github">Github</a>
      </div>
      <a href="http://tflin.com/about/me.pdf" download="前端开发工程师_谭丰林.pdf" class="resume">下载PDF简历</a>
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
.articles {
  background-image: linear-gradient(to top, #a0ce79 0%, #167c64 100%);

  .more-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;

    .contact {
      font-size: 30px;
      color: #ddd;

      a {
        color: #ddd;
        &:hover {
        color: #167c64;
      }
      }
    }

    .resume {
      font-size: 30px;
      color: #ddd;
      text-decoration: underline;

      margin-top: 20px;

      &:hover {
        color: #167c64;
      }
    }
  }
}
</style>
