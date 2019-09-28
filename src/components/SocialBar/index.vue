<template>
  <div class="social">

    <social-item
      v-for="(v, i) in socialList"
      :key="i"
      :link="v.link"
      :icon-name="v.iconName"
    ></social-item>

  </div>
</template>

<script>
import SocialItem from './SocialItem'

export default {
  data() {
    return {
      // 社交信息列表
      socialList: [
        {
          link: 'http://tflin.com',
          iconName: 'icon-boke3'
        },
        {
          link: 'https://github.com/tflins',
          iconName: 'icon-git'
        }
      ]
    }
  },

  components: {
    SocialItem
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.social {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80px;
}
</style>
