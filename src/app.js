import Vue from 'vue';
import Buttom from './button';
import Icon from './icon';
import Buttongroup from './button-group';


Vue.component('g-button',Buttom)
Vue.component('g-button-group',Buttongroup)
Vue.component('g-icon',Icon)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false
    }
})
