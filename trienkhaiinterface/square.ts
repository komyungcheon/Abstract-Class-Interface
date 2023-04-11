import {Rectangle} from "./rectangle";
import {Resizeable} from "./resizeable";

 export class Square extends Rectangle implements  Resizeable {

constructor(name :string,width :number) {
    super(name,width,width);
}
 }