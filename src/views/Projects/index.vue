<template>
  <div class="page projects">
    <h1 class="title">项目经验</h1>
    <div class="projects-body">
      <div class="card-container">
        <div class="item-card">
          <p
            class="description"
          >一个为深圳大学学生开发的网址导航，收集了大部分学生常用或者难找的网站。前端使用 Vue.js 开发，后端使用 PHP 和 MySQL 搭建，用户首次访问即缓存网站数据在 LocalStorage 里面。</p>
          <div class="tool">
            <button>
              <a href>项目地址</a>
            </button>
          </div>
        </div>
        <div class="item-card">
          <p
            class="description"
          >一个为深圳大学学生开发的网址导航，收集了大部分学生常用或者难找的网站。前端使用 Vue.js 开发，后端使用 PHP 和 MySQL 搭建，用户首次访问即缓存网站数据在 LocalStorage 里面。</p>
          <div class="tool">
            <button>
              <a href>项目地址</a>
            </button>
          </div>
        </div>
        <div class="item-card">
          <p
            class="description"
          >一个为深圳大学学生开发的网址导航，收集了大部分学生常用或者难找的网站。前端使用 Vue.js 开发，后端使用 PHP 和 MySQL 搭建，用户首次访问即缓存网站数据在 LocalStorage 里面。</p>
          <div class="tool">
            <button>
              <a href>项目地址</a>
            </button>
          </div>
        </div>
      </div>
      <div class="footer">
        <a href>
          <button class="more-btn">
            <i class="iconfont icon-git"></i>
            前往 Github 查看更多
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {}
}
</script>
  
<style rel="stylesheet/scss" lang="scss" scoped>
.projects {
  background-image: linear-gradient(
    to right,
    #3ab5b0 0%,
    #3d99be 31%,
    #56317a 100%
  );

  .projects-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .card-container {
      width: 65%;

      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      .item-card {
        position: relative;
        margin: 0 10px;
        padding: 10px;
        width: 280px;
        height: 400px;
        background: linear-gradient(to bottom, #fff, #f0f0f0);
        border-radius: 6px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        transition: all 300ms ease;

        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }

    .footer {
      margin-top: 50px;
      width: 40%;
      border: 1px solid rgba(255, 255, 255, 0.3);
      height: 50px;
      .more-btn {
        width: 100%;
        height: 100%;
        background-color: #fff;
        border-radius: 4px;
        padding: 5px;

        &:hover {
				opacity: 1;
        background: rgba(255,255,255,.2);
			}
      }
    }
  }
}
</style>
