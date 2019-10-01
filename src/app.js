import Vue from 'vue';
import Buttom from './button';
import Icon from './icon';


Vue.component('g-button',Buttom)
Vue.component('g-icon',Icon)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})
