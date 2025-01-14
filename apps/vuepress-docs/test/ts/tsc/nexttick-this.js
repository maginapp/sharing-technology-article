"use strict";
exports.__esModule = true;
exports.nextTick = void 0;
function nextTick(fn) {
    var p = Promise.resolve();
    return fn ? p.then(this ? fn.bind(this) : fn) : p;
}
exports.nextTick = nextTick;
