// document.addEventListener('DOMContentLoaded', (event) => {
//     console.log('defer DOMContentLoaded')
// })
console.warn(' defer1')
setTimeout(() => {
    for (let i = 0; i < 500; i++) {
        console.log(' defer settimeout looping')
    }
    console.log('defer setTimeout: loop finished')
}, 0)
new Promise((resolve) => {
    console.log('defer enter promise')
    let a = 1
    while (a < 500) {
        a++
        console.log('defer Promise looping')
    }
    console.log('Promise: loop finished')
    resolve()
}).then(res => {
    let a = 1
    while (a < 500) {
        a++
        console.log(' defer Promise succeed looping')
    }
    console.log('defer promise success')
})