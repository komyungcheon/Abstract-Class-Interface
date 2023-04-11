"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tiger_1 = require("./tiger");
var chicken_1 = require("./chicken");
var apple_1 = require("../AbstractClass/apple");
var orange_1 = require("../AbstractClass/orange");
// import {fruit} from "../AbstractClass/fruit";
console.log('---Animals-----');
var animals = [];
// animals[0] = new Tiger();
// animals[1] = new Chicken();
// animals.forEach((item, index) => {
//     console.log(item.makeSound())
// })
var tiger = new tiger_1.Tiger();
var chicken = new chicken_1.Chicken();
animals.push(tiger, chicken);
animals.forEach(function (index) {
    console.log(index.makeSound());
    if (index instanceof chicken_1.Chicken) {
        console.log(index.howToEat());
    }
});
var apple = new apple_1.Apple();
var orange = new orange_1.Orange();
var fruits = [];
fruits.push(apple, orange);
fruits.forEach(function (index) {
    console.log(index.howToEat());
});
