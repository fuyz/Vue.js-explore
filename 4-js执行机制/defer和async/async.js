// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOMContentLoaded')
// })
setTimeout(() => {
    for (let i = 0; i < 500; i++) {
        console.log('async settimeout looping')
    }
    console.log('async setTimeout: loop finished')
}, 0)
new Promise((resolve) => {
    console.log('async enter promise')
    let a = 1
    while (a < 500) {
        a++
        console.log('async Promise looping')
    }
    console.log('async Promise: loop finished')
    resolve()
}).then(res => {
    let a = 1
    while (a < 500) {
        a++
        console.log('async Promise succeed looping')
    }
    console.log('async promise success')
})