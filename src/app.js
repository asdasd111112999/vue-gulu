import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import Buttongroup from './button-group';


Vue.component('g-button',Button)
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
/*单元测试开始*/
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)

const  expect = chai.expect
/*测试按钮的icon*/
{
    const  Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove();
    vm.$destroy()
}
/*测试按钮的loading状态*/
{
    const  Constructor = Vue.extend(Button);
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            loading:true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
/*测试按钮的默认方向*/
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const  Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
/*测试按钮的修改方向*/
{
    const div=document.createElement('div')
    document.body.appendChild(div)
    const  Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            position:'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
/*测试按钮的click事件*/
{
    const  Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'setting',
            position:'right'
        }
    })
    vm.$mount()
    let spy=chai.spy(function(){})
    vm.$on('click',spy)
    let button=vm.$el
    button.click()
    expect(spy).to.called()
}
