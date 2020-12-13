<template>
  <div id="app">
    <div class="t-full-page">
      <div class="t-page">
        <home class="home section"></home>
      </div>
      <div class="t-page">
        <introductions class="section introductions"></introductions>
      </div>
      <div class="t-page">
        <skills class="section skills"></skills>
      </div>
      <div class="t-page">
        <work-experience class="section work-experience"></work-experience>
      </div>
      <div class="t-page">
        <projects class="section projects"></projects>
      </div>
      <div class="t-page">
        <more class="section more"></more>
      </div>
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

  data() {
    return {
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        navigation: true,
        sectionsColor: [
          '#41b883',
          '#ff5f45',
          '#0798ec',
          '#fec401',
          '#1bcee6',
          '#ee1a59',
          '#2c3e4f',
          '#ba5be9',
          '#b4b8ab'
        ]
      }
    }
  },

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
