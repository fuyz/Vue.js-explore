; (function (global) {
    function ModifyDivBg(Ele) {
        this.element = typeof Ele === 'string' ? document.querySelector(Ele) : Ele
    }
    ModifyDivBg.prototype.setBgColor = function (color) {
        this.element.style.backgroundColor = color
    }
    if (typeof module !== 'undefined' && module.exports) {
        // CMD
        module.exports = ModifyDivBg
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(function (require, factory) {
            'use strict';
            return ModifyDivBg
        })
    } else {
        global.ModifyDivBg = ModifyDivBg
    }

})(this)