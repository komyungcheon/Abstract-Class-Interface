import {Circle} from "./circle";
import {comparableCircle} from "./comparableCircle";

let circles = [];
let circle1 = new comparableCircle(10);
let circle2 = new comparableCircle(20);
let circle3 = new comparableCircle(30);

let result = circle1.compareTo(circle3);
if(result == 1){
    console.log("vong tron hien tai lon hon")
}else {
    console.log("vong tron hien tai nho hon")
}