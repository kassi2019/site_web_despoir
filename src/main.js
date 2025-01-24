import { createApp } from 'vue'
import App from './App.vue'
import TheNoSidebar from "./layouts/TheNoSidebar.vue"
import TheDefault from "./layouts/TheDefault.vue"
import router from "./Route/index";
import store from './vuex/vuex1/index'
const app = createApp(App);
app.component('default-layout', TheDefault)
app.component('no-sidebar-layout', TheNoSidebar)
app.use(router);
app.use(store);
app.mount("#app");

// createApp(App).mount('#app')
