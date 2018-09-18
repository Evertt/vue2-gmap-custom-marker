import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBkOdVJktw6m9OoVMcX1ZU_yU54ODDfFlA',
      v: '3.26',
    },
    installComponents: false,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
