<template>
  <a
    class="item"
    :href="link"
    target="_blank"
  >
    <i :class="className"></i>
  </a>
</template>

<script>
export default {
  props: {
    // 跳转链接
    link: {
      type: String,
      default: 'http://tflin.com/resume/'
    },
    // 显示图标
    iconName: {
      type: String,
      default: 'icon-daxue'
    }
  },

  computed: {
    className() {
      return `iconfont ${this.iconName}`
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
</style>
