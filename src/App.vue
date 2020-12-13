<template>
  <div id="app">
    <div class="t-full-page">
      <home class="home t-page"></home>
      <introductions class="t-page introductions"></introductions>
      <skills class="t-page skills"></skills>
      <work-experience class="t-page work-experience"></work-experience>
      <projects class="t-page projects"></projects>
      <more class="t-page more"></more>
    </div>
  </div>
</template>

<script>
import Home from './views/Home'
import Introductions from './views/Introductions'
import Skills from './views/Skills'

import WorkExperience from './views/WorkExperience'
import Projects from './views/Projects'
import More from './views/More'

import TFullPage from './lib/t-full-page'
import './lib/t-full-page.css'

export default {
  name: 'app',

  components: {
    Home,
    Introductions,
    Skills,
    WorkExperience,
    Projects,
    More
  },

  mounted() {
    this.$nextTick(() => {
      this.tFullPage = new TFullPage()
    })
  }
}
</script>

<style lang="scss">
</style>
