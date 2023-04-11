import {Rectangle} from "./rectangle";
import {Square} from "./square";
import {Resizeable} from "./resizeable";
import {Shape} from "./shape";
import  {Circle} from "./circle";
import {Cricle} from "../../Kethua/hecacdoituonghinhhoc/cricle";

let cricle =  new Circle("red", 5);
let rectangle = new Rectangle("chu nhat",10,20);
let square = new Square("hinh vuong",20);
let a : Shape[] = [cricle,rectangle,square];
console.log(a);
a.forEach(
    function (z) {
        console.log(z.show());
        console.log(z.area());
        z.resize(Math.random() * 100);
        console.log(z.area())
    }
)



