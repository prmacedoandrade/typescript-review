import { Shape } from "./Shape";

export class Retangle extends Shape {

    constructor(theX: number, theY: number, private _with: number, private _lenght: number) {
        super(theX, theY);
    }

    public get with(): number {
        return this._with;
    }
    public set with(value: number) {
        this._with = value;
    }

    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this._with}, lenght=${this._with}`;
    }


}    