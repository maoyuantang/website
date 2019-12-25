/*
 * @Author: tmy
 * @Date: 2019-12-04 09:24:02
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-24 15:58:45
 * @Description: Do not edit
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

import '@/assets/css/reset.css';
import '@/utils/elementUI';
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
router.afterEach(() => {
    window.scrollTo(0, 0);
});
