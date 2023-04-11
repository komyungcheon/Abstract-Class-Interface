import {Resizeable} from "./resizeable";

export class Shape implements Resizeable {
 name : string;
 constructor(name :string) {
     this.name = name;
 }

    resize(percent: number) {
        throw new Error("Method not implemented.");
    }
 show():string{
     return  `i am  a shape .my name is ${this.name}`;
 }
    perimeter():number{
     return 1;
    }
    area():number{
     return 1
    }
}