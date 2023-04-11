"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var comparableCircle_1 = require("./comparableCircle");
var circles = [];
var circle1 = new comparableCircle_1.comparableCircle(10);
var circle2 = new comparableCircle_1.comparableCircle(20);
var circle3 = new comparableCircle_1.comparableCircle(30);
var result = circle1.compareTo(circle3);
if (result == 1) {
    console.log("vong tron hien tai lon hon");
}
else {
    console.log("vong tron hien tai nho hon");
}
