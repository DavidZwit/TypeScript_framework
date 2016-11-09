/**
 * Vector2 operations and handeling
 */
class Vector2 {
    x : number;
    y : number;

    constructor(x : number = 0, y : number = 0) {
        this.x = x || 0;
        this.y = y || 0;
    }

    static add (self : Vector2, other : Vector2) : Vector2 {
        return new Vector2(
            self.x + other.x, 
            self.y + other.y
        );
    }

    add (other : Vector2) {
        this.x += other.x;
        this.y += other.y;
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

    devideInt (value : number) {
        if (value != NaN) {
            this.x /= value;
            this.y /= value;
        }
    }

    multiplyInt (value : number) {
        if (value != NaN) {
            this.x *= value;
            this.y *= value;
        }
    }

    static multiplyInt (v1, value : number) : Vector2 {
        if (value != NaN) {
            return new Vector2(v1.x *= value,
                                v1.y *= value);
        }
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
