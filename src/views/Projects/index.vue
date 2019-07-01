<template>
  <div class="page projects">
    <h1 class="title">项目经验</h1>
    <div class="projects-body">
      <div class="card-container">
        <div class="item-card">
          <h2 class="name">SIMO一体化智能运维系统</h2>
          <p class="description">实习期间参与的公司项目，实习前期负责修复 WEB 端缺陷，中期对告警详情模块进行了重构，后期负责开发新功能的弹窗并封装,方便调用。</p>
          <p class="description">
            实习期间修复了一百多个缺陷,重构后的告警详情可删除 15 个 js、html 文件,提高了响应速度,以及代码更易维护和扩
            展,并封装了多个功能模块的弹窗供别人使用,实习期间绩效评定全优。
          </p>
        </div>
        <div class="item-card">
          <h2 class="name">SIMO APP</h2>
          <p
            class="description"
          >实习期间参与的公司项目，SIMO一体化智能运维系统的移动端混合APP,使用Ajax进行数据交互达到前后端分离,采用MUI进行开发,REM方案对不同屏幕尺寸进行适配,采用HBuilder进行打包。</p>
          <p
            class="description"
          >负责根据UI图还原设计稿，根据后端提供的接口实现相应功能和渲染数据，使用Ajax封装与后端进行交互的API，总共完成可APP的告警模块,资源模块,和首页相关模块,用户可以根据WEB端的用户信息登录APP。</p>
        </div>
        <div class="item-card">
          <h2 class="name">欣音悦</h2>
          <p class="description">
            独立开发的以歌单分享为主的音乐播放的 webapp，前端使用Vue全家桶进行开发,后端使用Koa2框架,音乐数据来自QQ音乐,用户信息及歌单信息存入本地数据库
            MongoDB中，在用户登录上采用jwt进行token验证。
          </p>
          <a href="https://github.com/tflins/vue-music" target="_blank" class="tool">
              <i class="iconfont icon-lianjie"></i>
              项目地址
          </a>
        </div>
        <div class="item-card">
          <h2 class="name">原生 JavaScript lightbox 弹出层图片预览插件</h2>
          <p class="description">
            独立开发的个人项目,使用原生 JavaScript 基于原型的方式封装的弹出图片预览插件,自动适配图片大小,开箱既用不依赖任
            何框架或库,项目已开源至Github。
          </p>
          <a href="https://github.com/tflins/lightbox" target="_blank" class="tool">
              <i class="iconfont icon-lianjie"></i>
              项目地址
          </a>
        </div>
      </div>
      <div class="footer">
        <a href="https://github.com/tflins" target="_blank">
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
    return {};
  },
  components: {}
};
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
      width: 80%;

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

        overflow: hidden;

        .name {
          text-align: center;
        }

        .description {
          margin-top: 6px;
          font-size: 16px;
          line-height: 28px;
          text-indent: 2em;
          text-align: justify;
          flex: 1;
        }

        .tool {
          position: absolute;
          bottom: 10px;
          border: 1px solid #444;
          border-radius: 4px;
          background-color: #eee;
          width: 90%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #888;

          .iconfont {
            font-size: 16px;
          }

          &:hover {
            background-color: #888;
            color: #fff;
            a {
              color: #fff;
            }
          }
        }
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
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
}
</style>
