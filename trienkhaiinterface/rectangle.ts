import {Shape} from "./shape";
import {Resizeable} from "./resizeable";


export class Rectangle extends Shape implements Resizeable{
    resize(percent: number) {
    }
    width : number;
    height : number;
    constructor(name :string,width : number,height :number) {
        super(name);
        this.width = width;
        this.height = height;
    }
    perimeter():number{
        return 2*(this.width + this.height)
    }
    area():number{
        return this.width*this.height;
    }
}