; (function (global) {
    // 构造函数写法
    // function ModifyDiv(Ele) {
    //     this.element = typeof Ele === 'string' ? document.querySelector(Ele) : Ele
    // }
    // ModifyDivBg.prototype.setFontSize = function (fontSize) {
    //     this.element.style.fontSize = fontSize
    // }

    // class 类写法
    class ModifyDiv {
        constructor(Ele) {
            this.element = typeof Ele === 'string' ? document.querySelector(Ele) : Ele
        }
        setFontSize(fontSize) {
            this.element.style.fontSize = fontSize
        }
    }
    if (typeof module !== 'undefined' && module.exports) {// CMD
        module.exports = ModifyDiv
    } else if (typeof define === 'function' && define.amd) {// AMD
        define(function (require, factory) {
            'use strict';
            return ModifyDiv
        })
    } else {
        global.ModifyDiv = ModifyDiv
    }

})(this)