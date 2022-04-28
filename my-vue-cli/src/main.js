import { add } from './tools/add.js'
import './styles/index.scss'
import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: (h) => h(App),
  }).$mount('#app')

console.log(add(1, 2))
console.log('我是main.js')

class A {
    a;
    constructor(a) {
        this.a = a;
    }
}
let a1 = new A(10);
console.log(a1);
let pro = new Promise((resolve, reject)=>{ });
console.log(pro);

let set = new Set([1,2,3,3,7,8,4,7]);
console.log(set);
