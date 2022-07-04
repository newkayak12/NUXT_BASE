import Vue from 'vue'
import Vuelidate from "vuelidate";
import {ObserveVisibility} from "vue-observe-visibility";
import Lodash from 'lodash'
Vue.use(Vuelidate)
Vue.directive('v-observe', ObserveVisibility)


export default (app, inject) => {
  inject('_', Lodash)
}
