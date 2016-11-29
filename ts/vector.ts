/**
 * Vector2 operations and handeling
 */

class Vector2 {
    private _x : number = 0;
    private _y : number = 0;

    constructor(x : number = 0, y : number = 0) {
        if (x) this.x = x;
        if (y) this.y = y;
    }

    toString () {
        return "Vector2 : " + this.x + this.y;
    }

    get x () { return this._x; }

    set x (_val) { this._x = _val; }

    get y () { return this._y; }

    set y (_val) { this._y = _val; }

    static get nan () {
        let returnVec = new Vector2();
        returnVec._x = NaN;
        returnVec._y = NaN;
        return returnVec;
    }

    zero () {
        this.x = 0;
        this.y = 0;
    }

    copy () {
        return new Vector2(this.x, this.y);
    }

    log () {
        console.log(this.x, this.y);
    }

    static get zero () : Vector2 {
        return new Vector2();
    }

    static add (self : Vector2, other : Vector2) : Vector2 {
        return new Vector2(
            self.x + other.x,
            self.y + other.y
        );
    }

    add (other : Vector2) : Vector2 {
        this.x += other.x;
        this.y += other.y;
        return this;
    }

    static sub (self : Vector2, other : Vector2) : Vector2 {
        return new Vector2(
            self.x - other.x,
            self.y - other.y
        );
    }

    sub (other : Vector2) {
        this.x -= other.x;
        this.y -= other.y;
    }

    static mul (v1 : Vector2, v2 : Vector2 ) : Vector2 {
        return new Vector2( v1.x * v2.x, v1.y * v2.y );
    }

    devideInt (value : number) {

        this.x /= value;
        this.y /= value;
    }

    multiplyInt (value : number) : Vector2 {
        this.x *= value;
        this.y *= value;
        return this;
    }

    static multiplyInt (v1 : Vector2, value : number) : Vector2 {
        return new Vector2(
            v1.x *= value,
            v1.y *= value
        );
    }

    static mag (v1 : Vector2, v2 : Vector2) : number {
        return Math.sqrt( Math.pow(v2.x - v1.x, 2) + Math.pow(v2.y - v1.y, 2) );
    }

    round () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }

}


/**
 * color handeling
 */
class Color {

    r : number;
    g : number;
    b : number;
    a : number

    constructor(r: number = 0, g : number = 0, b : number = 0, a : number=0) {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 0;
    }

    get toString () : string {
        return 'rgba(' + this.r * 225 + ',' + this.g * 225 + ',' + this.b * 225 + ',' + this.a + ')';
    }

    static add (self : Color, other : Color) : Color {
        return new Color(
            self.r + other.r,
            self.g + other.g,
            self.b + other.b,
            self.a + other.a
        );
    }

    add (other : Color) {
        this.r += other.r;
        this.g += other.g;
        this.b += other.b;
        this.a += other.a;
    }

    static sub (self : Color, other : Color) : Color {
        return new Color(
            self.r - other.r,
            self.g - other.g,
            self.b - other.b,
            self.a - other.a
        );
    }

    sub (other : Color) {
        this.r -= other.r;
        this.g -= other.g;
        this.b -= other.b;
        this.a -= other.a;
    }
}
