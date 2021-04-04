const { reject } = require('./MyPromise')
let MyPromise = require('./MyPromise')

let p = new MyPromise((resolve, reject) => {
    // resolve('成功')
    reject('错误')


    // 六、捕获错误及 then 链式调用其他状态代码补充-1
    // throw new Error('')

    // 测试二、在 Promise 类中加入异步逻辑
    /* setTimeout(() => {
        resolve('2s 后返回成功')
    }, 2000) */

})

// 测试 三、在Promise then 方法多次调用添加多个处理函数
// p.then(res => {
//     console.log(2)
//     console.log('resolve:', res)
// })
// p.then(res => {
//     console.log(3)
//     console.log('resolve:', res)
// })

// 测试四、实现 then 方法的链式调用
// p.then(res => {
//     console.log(1)
// }).then(res => {
//     console.log(2)
//     console.log('链式返回reject2:', res)
//     // throw new Error('错误信息')
// }).then(res => {
//     console.log(3)
//     console.log('链式返回reject3:', res)
// }).then(res => {
//     console.log(4)
//     console.log('链式返回reject3:', res)
// }).then(res => {
//     console.log(5)
//     console.log('链式返回reject3:', res)
// })


// p.then(res => {
//     console.log(1)
//     throw new Error('错误1')
// }, err => {
//     console.log('err1', err)
//     // throw new Error('错误1')
// }).then(res => {
//     console.log(2)
//     console.log('链式返回reject2:', res)
//     // throw new Error('错误信息')
// }, err => {
//     console.log('err2', err)
//     return 'err2'
//     // throw new Error('错误2')
// }).then(res => {
//     console.log(3)
//     console.log('链式返回reject3:', res)
// }, err => {
//     console.log('err3', err)
//     // throw new Error('错误3')
// })


/* let p2 = p.then(res => {
    console.log(1)
    // 测试五、then 方法链式调用识别 Promise 是否返回自己
    // return p2

    // 六、捕获错误及 then 链式调用其他状态代码补充
    // throw new Error('错误')
    // return 'fyz'
    // 测试返回MyPromise
    // return new MyPromise((resolve, reject) => {
    //     resolve('success')
    //     // reject('fail')
    // })
    // 测试返回MyPromise 静态方法
    // return MyPromise.reject(new Error('Cw错误'))
    // return MyPromise.resolve('成功')
})
p2.then(res => {
    console.log('success', res)
}, err => {
    console.error('err', err);
}) */

// 八、then 中的参数变为可选
// p.then().then().then().then(value => {
//     console.log(value)
// })
// p.then().then().then().then(value => {
//     console.log(value)
// }, err => {
//     console.log('err', err)
// })

// 测试九、实现 resolve 与 reject 的静态调用
/* MyPromise.resolve().then(() => {
    console.log(0);
    // return 3123
    // return MyPromise.resolve(2);
    // return MyPromise.reject(2);
}).then((res) => {
    console.log(res)
}, err => {
    console.log('err', err)
}) */

// 线上十、catch 方法调用
p.then(() => {
    console.log(0);
}).catch(err => {
    console.log('err2', err)
    // return 1
    throw new Error('错误')
}).then((res) => {
    console.log(res)
}, err => {
    console.log('err4', err)
})
// p.catch(err => {
//     console.log('err3', err)
//     // throw new Error('错误')
// })
// p.then(() => {
//     console.log(0);
// }).then(res => {
//     console.log('res2', res)
//     // return 1
//     // throw new Error('错误')
// })


// p = new Promise((resolve, reject) => {
//     // resolve(1)
//     reject(0)
// })

// p.then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log('err2', err)
// }).then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log('err3', err)
// })

// p.catch(err => {
//     console.log('err4', err)
// })

// pp = Promise.resolve(1)
// pp.then(res => {
//     console.log('success', res)
// })