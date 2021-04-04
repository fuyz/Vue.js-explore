var promise1 = new Promise((resolve, reject) => {
    console.log('start')
    setTimeout(() => {
        console.log('2')
        resolve(1);
        console.log('3')
    }, 0);
});
promise1.then(res => {
    console.log('promise1微任务被执行了  1');
    setTimeout(() => {
        console.log('innner  timeout');
    }, 0)
    promise1.then(res => {
        setTimeout(() => {
            console.log('innner  timeout222');
        }, 0)
        console.log('promise1微任务被执行了 inner');
    });

});

promise1.then(res => {
    console.log('promise1微任务被执行了  2');
    promise1.then(res => {
        console.log('promise1微任务被执行了 innner 2');
    });
});
console.log('end')