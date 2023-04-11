export class Circle{
 private _radius : number;
 constructor(radius : number) {
     this._radius = radius;
 }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    toString() :string{
     return "cai hinh tron nay co ban khinh" + this.getRadius()
    }
}
