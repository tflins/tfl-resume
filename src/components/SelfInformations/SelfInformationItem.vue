<template>
  <div class="info-item">
    <i :class="['iconfont', iconName]"></i>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '大学'
    },
    iconName: {
      type: String,
      default: 'icon-daxue'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.info-item {
  p {
    font-size: 14px;
    color: #444;
  }
  .iconfont {
    font-size: 40px;
  }
}

@media (max-width: 480px) {
  .info-item {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .iconfont {
      margin-right: 12px;
      font-size: 16px;
    }
  }
}
</style>
