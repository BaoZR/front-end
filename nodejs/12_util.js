/**
 * util.callbackify(original) 将 async 异步函数
 * （或者一个返回值为 Promise 的函数）转换成遵循异常优先的回调风格的函数，
 * 例如将 (err, value) => ... 回调作为最后一个参数。 在回调函数中，
 * 第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。
 */

const util = require('util');

async function fn(){
    return 'hello world'
}

let callbackFunction = util.callbackify(fn);

callbackFunction((err, ret)=>{
    if(err) throw err;
    console.log(ret);
})

function fn2(){
    return Promise.reject(null);
}

callbackFunction = util.callbackify(fn2);

/**
 * null 在回调函数中作为一个参数有其特殊的意义，
 * 如果回调函数的首个参数为 Promise 拒绝的原因且带有返回值，且值可以转换成布尔值 false，
 * 这个值会被封装在 Error 对象里，可以通过属性 reason 获取。
 */
callbackFunction((err, ret)=>{
    err && err.hasOwnProperty('reason') && err.reason == null;
    console.log(err);
    console.log(err.hasOwnProperty('reason'))
    console.log(err.reason === null)
})



