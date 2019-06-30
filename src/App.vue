<template>
  <div id="app">
    <home></home>
    <introductions></introductions>
    <skills></skills>
    <work-experience></work-experience>
    <projects></projects>
    <articles></articles>
  </div>
</template>

<script>
import Home from './views/Home'
import Introductions from './views/Introductions'
import Skills from './views/Skills'
import WorkExperience from './views/WorkExperience'
import Projects from './views/Projects'
import Articles from './views/Articles'

export default {
  name: 'app',
  components: {
    Home,
    Introductions,
    Skills,
    WorkExperience,
    Projects,
    Articles
  }
}
</script>

<style lang="scss">
</style>
