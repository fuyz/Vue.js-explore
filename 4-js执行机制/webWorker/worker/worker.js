onmessage = function (e) {
    console.log('Worker: Message received from main script');
    const result = e.data[0] * e.data[1];
    if (isNaN(result)) {
        postMessage('Please write two numbers');
    } else {
        const workerResult = 'Result: ' + result;
        console.log('Worker: Posting message back to main script');
        postMessage(workerResult);
    }

    // 分离阻塞页面渲染的js  到worker线程
    console.warn('start...')
    let a = 1
    new Promise((resolve) => {
        console.warn('enter promise')
        while (a < 1000000000) {
            a++
        }
        resolve()
    }).then(res => {
        console.warn('promise success')
    })
    console.warn('end...')
}