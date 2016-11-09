/**
 * Vector2 operations and handeling
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x || 0;
        this.y = y || 0;
    }
    static add(self, other) {
        return new Vector2(self.x + other.x, self.y + other.y);
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    static sub(self, other) {
        return new Vector2(self.x - other.x, self.y - other.y);
    }
    sub(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    devideInt(value) {
        if (value != NaN) {
            this.x /= value;
            this.y /= value;
        }
    }
    multiplyInt(value) {
        if (value != NaN) {
            this.x *= value;
            this.y *= value;
        }
    }
    static multiplyInt(v1, value) {
        if (value != NaN) {
            return new Vector2(v1.x *= value, v1.y *= value);
        }
    }
}
/**
 * color handeling
 */
class Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
        this.r = r || 0;
        this.g = g || 0;
        this.b = b || 0;
        this.a = a || 0;
    }
    get toString() {
        return 'rgba(' + this.r * 225 + ',' + this.g * 225 + ',' + this.b * 225 + ',' + this.a + ')';
    }
    static add(self, other) {
        return new Color(self.r + other.r, self.g + other.g, self.b + other.b, self.a + other.a);
    }
    add(other) {
        this.r += other.r;
        this.g += other.g;
        this.b += other.b;
        this.a += other.a;
    }
    static sub(self, other) {
        return new Color(self.r - other.r, self.g - other.g, self.b - other.b, self.a - other.a);
    }
    sub(other) {
        this.r -= other.r;
        this.g -= other.g;
        this.b -= other.b;
        this.a -= other.a;
    }
}
//# sourceMappingURL=Vector.js.map