import Vue from 'vue';
import App from './App.vue';
import './styles/index.scss';
import store from './store/'
import router from './router'
import './permission'

Vue.config.productionTip = false;



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
