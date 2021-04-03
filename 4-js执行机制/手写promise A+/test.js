let MyPromise = require('./MyPromise')

let p = new MyPromise((resolve, reject) => {
    resolve(1)
    // reject('err')


    // 六、捕获错误及 then 链式调用其他状态代码补充-1
    // throw new Error('')

    // 测试二、在 Promise 类中加入异步逻辑
    /* setTimeout(() => {
        resolve('2s 后返回成功')
    }, 2000) */

})

// 测试 三、在Promise then 方法多次调用添加多个处理函数
/* p.then(res => {
    console.log(2)
    console.log('resolve:', res)
})
p.then(res => {
    console.log(3)
    console.log('resolve:', res)
}) */

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


// MyPromise.resolve().then(() => {
//     console.log(0);
//     // return 3123
//     return MyPromise.resolve(MyPromise.resolve(2));
//     // return new MyPromise(resolve => {
//     //     resolve(44)
//     // });
// }).then((res) => {
//     console.log(res)
// })

// MyPromise.reject(new Error('错误信息')).then(() => {
//     console.log(0);
// }, err => {
//     console.log(err)
//     // return MyPromise.resolve(MyPromise.resolve(2));
//     // return MyPromise.reject(new Error('错误信息2'));
//     return MyPromise.reject(new Error('错误 '))
//     // return new MyPromise(resolve => {
//     //     resolve(44)
//     // });
// }).then((res) => {
//     console.log(res)
// }, err => {
//     console.log('err2', err)
// })


// .catch(err => {
//     console.warn(err)
// })


// let p2 = p.then(res => {
//     console.warn(1)
// 测试五、then 方法链式调用识别 Promise 是否返回自己
// return p2
// 六、捕获错误及 then 链式调用其他状态代码补充-2
// throw new Error('错误')
// return 'fyz'
// return new MyPromise((resolve, reject) => {
//     // resolve('success')
//     reject('fail')
// })
// })

// 八、then 中的参数变为可选
// p.then().then().then().then(value => {
//     debugger
//     console.log(value)
// })

/* p.then(value => {
    console.log(2)
    console.log('resolve', value)
}, reason => {
    console.log(3)
    console.log(reason)
}) */

// let p2 = p.then(res => {
//     console.log(1)
    // console.log('resolve1:', res)
    // return 'fyz'
    // return new MyPromise((resolve, reject) => {
    //     resolve('inner')
    //     // reject('inner err')
    // })
    // queueMicrotask(() => {
    //     debugger
    //     return p2
    // })
// }).then(res => {
//     console.log(11)
//     console.log('链式返回reject2:', res)
//     // throw new Error('错误信息')
// }).then(res => {
//     console.log(111)
//     console.log('链式返回reject3:', res)
// }).catch(err => {
//     console.warn(err)
// })

// .catch(err => {
//     console.log('err:', err)
// })

// , reason => {
//     console.log('reject:', reason)
// }
