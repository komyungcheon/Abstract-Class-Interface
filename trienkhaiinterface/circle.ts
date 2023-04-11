import {Resizeable} from "./resizeable";
import {Shape} from "./shape";

export class Circle extends Shape implements Resizeable{
    radius: number;
    constructor(name: string,radius: number) {
        super(name);
        this.radius = radius;
    }
    show(): string {
        return super.show();
    }

    resize(percent: number) {
        this.radius += percent/100*this.radius;
    }
    area():number {

        return   this.radius*this.radius*Math.PI
    }
    perimeter():number{
        return   this.radius*2*Math.PI;
    }
}
// let circle = new Circle(7);
// console.log(circle);
// console.log(circle.area())
//
