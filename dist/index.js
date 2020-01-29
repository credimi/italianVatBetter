"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calcXY = function (nums) {
    return nums.reduce(function (result, num, i) {
        if (i % 2 === 0) {
            result[0] += num;
        }
        else {
            var check = num * 2;
            result[1] += check > 9 ? check - 9 : check;
        }
        return result;
    }, [0, 0]);
};
var calcT = function (input) {
    var _a = calcXY(input.split('').map(function (char) { return parseInt(char, 10); })), x = _a[0], y = _a[1];
    return (x + y) % 10;
};
var fakeVat = function (input) {
    if (input === void 0) { input = Math.random()
        .toString(10)
        .slice(-10); }
    if (input.length !== 10)
        throw new Error('10 chars string only');
    return input + ((10 - calcT(input)) % 10);
};
exports.fakeVat = fakeVat;
var verifyVat = function (input) { return input.length === 11 && calcT(input) === 0; };
exports.verifyVat = verifyVat;
