<template>
  <div id="app">
    <full-page :options="options">
      <home class="section home"></home>
      <introductions class="section introductions"></introductions>
      <skills class="section skills"></skills>
      <work-experience class="section work-experience"></work-experience>
      <projects class="section projects"></projects>
      <more class="section more"></more>
    </full-page>
  </div>
</template>

<script>
import Home from './views/Home'
import Introductions from './views/Introductions'
import Skills from './views/Skills'

import WorkExperience from './views/WorkExperience'
import Projects from './views/Projects'
import More from './views/More'

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
  }
}
</script>

<style lang="scss">
</style>
