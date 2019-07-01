<template>
  <div class="page home">
    <div class="avatar">
      <img src="../../assets/avatar.jpg" alt="">
    </div>
    <h1 class="name">{{ name }}</h1>
    <p class="shortDescription">{{ shortDescription }}</p>
    <div class="social">
      <a class="item" href="http://tflin.com" target="_blank">
        <i class="iconfont icon-boke3"></i>
      </a>
      <a class="item" href="https://github.com/tflins" target="_blank">
        <i class="iconfont icon-git"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "谭丰林",
      shortDescription: '要么坚持，要么放弃'
    }
  },
  components: {}
}
</script>
  
<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  


  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  color: aliceblue;

  .avatar {
    width: 150px;
    height: 150px;
    margin-top: -60px;

    border-radius: 50%;
    background-color: #fff;
    border: 5px solid #fff;
    box-shadow: 0 5px 10px rgba(0,0,0,.5);

    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .name {
    margin-top: 20px;
    line-height: 60px;
  }

  .shortDescription {
    color: #eee;
    line-height: 60px;
  }

  .social {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80px;

    .item {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 30px;

      border: 1px solid #fff;
      border-radius: 50%;

      .iconfont {
        font-size: 50px;
      }
    }

    .item:hover {
      color: #000;
      border: 1px solid #000;
    }

    a {
      color: #fff;
    }
  }
}
</style>
