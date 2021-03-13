let a: string = 'aaa'
let a2: number = 2
let arr: number[] = [1,2,3]
let arr2: string[] = ['1', 'f']

// 拷贝数组的原型到原型链上
const arrayProto = Array.prototype
const arrayMethods = Object.create(arrayProto)

// 需要重写的方法名
const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

function def(obj: Object, key: string, val: any, enumerable?: boolean) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}

methodsToPatch.forEach(function (method) {
    // 保存数组原有方法
    const original = arrayProto[method]
    // 重写方法
    def(arrayMethods, method, function mutator(...args) {
        // 调用数组原有方法
        const result = original.apply(this, args)
        // 取出__ob__属性上的observer实例
        const ob = this.__ob__
        let inserted
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        // inserted 代表新增的数据，将这部分数据也处理成响应式数据
        if (inserted) ob.observeArray(inserted)
        // 通知dep收集的所有watcher，数组值发生了改变
        ob.dep.notify()
        return result
    })

})