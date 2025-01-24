import createApp from "vue";
import Vuex from "vuex";

import ModuleParametrageMenu from './vuex1/index'

createApp.use(Vuex);

export default new Vuex.Store({
    modules: {
      parametrageMenu: ModuleParametrageMenu,

    }
  })
