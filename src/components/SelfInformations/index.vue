<template>
  <div class="self-informations">
    <div
      class="info-row"
      v-for="(row, index) in selfInformationsData"
      :key="index"
    >
      <self-information-item
        v-for="(v, i) in row"
        :key="i"
        :text="v.text"
        :icon-name="v.iconName"
      ></self-information-item>
    </div>
  </div>
</template>

<script>
import SelfInformationItem from './SelfInformationItem'

export default {
  data() {
    return {
      selfInformationsData: [
        [
          { text: '1997.03.09', iconName: 'icon-shengri' },
          { text: '北方民族大学·计算机', iconName: 'icon-daxue' },
          { text: '广东·深圳', iconName: 'icon-icon-location' }
        ],
        [
          { text: 'tflins@163.com', iconName: 'icon-email' },
          { text: '+86 18209684180', iconName: 'icon-dianhua' }
        ]
      ]
    }
  },
  components: {
    SelfInformationItem
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.self-informations {
  background-color: #fff;
  width: 65%;

  text-align: center;
  padding: 20px;
  margin-top: 40px;
  border-radius: 4px;

  .info-row {
    margin: 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (max-width: 480px) {
  .self-informations {
    background-color: #fff;
    width: 65%;

    text-align: justify;
    padding: 20px;
    margin-top: 40px;
    border-radius: 4px;

    p {
      font-size: 14px;
      color: #444;
    }

    .info-row {
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
