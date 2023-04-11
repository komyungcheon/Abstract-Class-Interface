import {Tiger} from "./tiger";
import {Chicken} from "./chicken";
import {Apple} from "../AbstractClass/apple";
import {Orange} from "../AbstractClass/orange";
// import {fruit} from "../AbstractClass/fruit";


console.log('---Animals-----')

let animals = [];
// animals[0] = new Tiger();
// animals[1] = new Chicken();
// animals.forEach((item, index) => {
//     console.log(item.makeSound())
// })
let tiger =  new Tiger();
let chicken = new Chicken();
animals.push(tiger,chicken);
animals.forEach(index => {
        console.log(index.makeSound())
        if (index instanceof Chicken) {
            console.log(index.howToEat())
        }
    }
)
let apple = new Apple();
let orange = new Orange();
let fruits = [];
fruits.push(apple,orange);
fruits.forEach(index => {
    console.log(index.howToEat())
})









