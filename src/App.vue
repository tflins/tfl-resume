<template>
  <div id="app">
    <full-page :options="options">
      <home class="section home"></home>
      <introductions class="section introductions"></introductions>
      <skills class="section"></skills>
      <work-experience class="section"></work-experience>
      <projects class="section"></projects>
      <articles class="section"></articles>
    </full-page>
  </div>
</template>

<script>
import Home from "./views/Home";
import Introductions from "./views/Introductions";
import Skills from "./views/Skills";
import WorkExperience from "./views/WorkExperience";
import Projects from "./views/Projects";
import Articles from "./views/Articles";

export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        // scrollBar: true,
        menu: "#menu",
        navigation: true,
        // scrollBar: true,
        // navigation: true,
        // anchors: ["page1", "page2", "page3"],
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
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
    Articles
  }
}
</script>

<style lang="scss">
</style>
