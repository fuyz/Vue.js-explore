
// 新建 MyPromise 类

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
    constructor(executor) {
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    // 成功之后的值
    value = null
    // 失败之后的原因
    reason = null
    // 储存状态的变量，初始值是 pending
    status = PENDING
    // 存储成功回调函数
    // onFulfilledCallback = null;
    onFulfilledCallbacks = []
    // 存储失败回调函数
    // onRejectedCallback = null;
    onRejectedCallbacks = []

    resolve = (value) => {
        // debugger
        if (this.status === PENDING) {
            this.status = FULFILLED
            this.value = value
            // this.onFulfilledCallback && this.onFulfilledCallback(value)
            while (this.onFulfilledCallbacks.length) {
                this.onFulfilledCallbacks.shift()(value)
            }
        }
    }

    reject = (reason) => {
        // debugger
        if (this.status === PENDING) {
            this.status = REJECTED
            this.reason = reason
            // this.onRejectedCallback && this.onRejectedCallback(reason)
            while (this.onRejectedCallbacks.length) {
                this.onRejectedCallbacks.shift()(reason)
            }
        }

    }

    then(onFulfilled, onRejected) {
        // 如果不传，就使用默认函数
        // onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        // onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        let p2 = new MyPromise((resolve, reject) => {

            let fulfilledMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        // 获取成功回调函数的执行结果
                        const x = onFulfilled(this.value);
                        // 传入 resolvePromise 集中处理
                        resolvePromise(p2, x, resolve, reject);
                    } catch (error) {
                        reject(error)
                    }
                })
            }

            let rejectedMicrotask = () => {
                queueMicrotask(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(p2, x, resolve, reject)
                    } catch (err) {
                        reject(err)
                    }
                })
            }

            if (this.status === FULFILLED) {
                fulfilledMicrotask()
            } else if (this.status === REJECTED) {
                rejectedMicrotask()
            } else if (this.status === PENDING) {
                // this.onFulfilledCallback = onFulfilled
                // this.onFulfilledCallbacks.push(onFulfilled)
                this.onFulfilledCallbacks.push(() => {
                    fulfilledMicrotask()
                })
                // this.onRejectedCallback = onRejected
                // this.onRejectedCallbacks.push(onRejected)
                this.onRejectedCallbacks.push(() => {
                    rejectedMicrotask()
                })
            }
        })
        return p2
    }

    static resolve(p) {
        if (p instanceof MyPromise) {
            return p
        }
        return new MyPromise(resolve => {
            resolve(p)
        })
    }
    static reject(p) {
        // if (p instanceof Error) {
        //     return MyPromise.reject(p)
        // }
        return new MyPromise((resolve, reject) => {
            reject(p)
        })
    }

    catch(onRejected) {
        onRejected()
    }

}

function resolvePromise(p2, x, resolve, reject) {
    // debugger
    if (x === p2) {
        return reject(new Error('Chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        resolve(x)
    }
}
function rejectPromise(p2, x, resolve, reject) {
    if (x === p2) {
        return reject(new Error('Chaining cycle detected for promise #<Promise>'))
    }
    if (x instanceof MyPromise) {
        x.then(resolve, reject)
    } else {
        reject(x)
    }
}


// let p = new MyPromise((resolve, reject) => {
//     resolve(1)
// })

// p.then(res => {
//     console.log(1)
//     console.log('resolve:', res)
// })

module.exports = MyPromise

