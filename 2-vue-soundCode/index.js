var a = 'aaa';
var arr = [1, 2, 3];
var arr2 = ['1', 'f'];
// 拷贝数组的原型到原型链上
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
// 需要重写的方法名
var methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
];
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    });
}
methodsToPatch.forEach(function (method) {
    // 保存数组原有方法
    var original = arrayProto[method];
    // 重写方法
    def(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // 调用数组原有方法
        var result = original.apply(this, args);
        // 取出__ob__属性上的observer实例
        var ob = this.__ob__;
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        // inserted 代表新增的数据，将这部分数据也处理成响应式数据
        if (inserted)
            ob.observeArray(inserted);
        // 通知dep收集的所有watcher，数组值发生了改变
        ob.dep.notify();
        return result;
    });
});
