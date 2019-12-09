import Vue from 'vue';
// import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate/dist/vee-validate.full.esm';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

// Add validation rules here.
extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word.',
});
extend('username', {
  validate: value => value === 'example',
  message: 'This is not the magic word.',
});

// Register the ValidationProvider.
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// Vue.component('FormItem', FormItem);
// Vue.component('i-input', Input);
// Vue.component('Icon', Icon);
// Vue.component('Form', Form);
// Vue.component('i-button', Button);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
