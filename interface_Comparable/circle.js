"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this._radius;
    };
    Circle.prototype.setRadius = function (value) {
        this._radius = value;
    };
    Circle.prototype.toString = function () {
        return "cai hinh tron nay co ban khinh" + this.getRadius();
    };
    return Circle;
}());
exports.Circle = Circle;
