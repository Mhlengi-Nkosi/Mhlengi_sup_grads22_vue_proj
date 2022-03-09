import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
 


import Vue from 'vue'
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
    render: h => h(App),
  }).$component('base-card', BaseCard)
  