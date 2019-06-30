<template>
  <div class="page home">
    <div class="avatar">
      <img src="../../assets/avatar.jpg" alt="">
    </div>
    <h1 class="name">{{ name }}</h1>
    <p class="shortDescription">{{ shortDescription }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "谭丰林",
      shortDescription: '前端新人，请多多指教'
    }
  },
  components: {}
}
</script>
  
<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

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
    // color: #777;
    line-height: 60px;
  }
}
</style>
