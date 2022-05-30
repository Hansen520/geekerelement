import { App } from 'vue';
import ElContainer from './Container.vue';
import ElHeader from './Header.vue';
import ElFooter from './Footer.vue';
import ElAside from './aside.vue';
import ElMain from './Main.vue';

export default {
  install(app: App) {
    // 为了图方便，我把所有的组件都写在一起了
    app.component(ElContainer.name, ElContainer);
    app.component(ElHeader.name, ElHeader);
    app.component(ElFooter.name, ElFooter);
    app.component(ElAside.name, ElAside);
    app.component(ElMain.name, ElMain);
  },
};

// 实际每个组件都会暴露出一个install方法
// import ElContainer from './Container.vue'

// /* istanbul ignore next */
// ElContainer.install = function (app) {
//   app.component(ElContainer.name, ElContainer)
// }

// export default ElContainer
