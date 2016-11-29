class Canvas {
    get width() { return this.m_canvasSize.x; }
    get height() { return this.m_canvasSize.y; }
    set width(val) {
        this.c.style.width = val + "px";
        this.m_canvasSize.x = val;
    }
    set height(val) {
        this.c.style.height = val + "px";
        this.m_canvasSize.y = val;
    }
    clear() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = 'rgba(50, 50, 50, ' + this.fade + ')';
        this.ctx.fill();
    }
    constructor(name, size, fade = .2) {
        this.c = document.getElementById(name);
        this.ctx = this.c.getContext('2d');
        this.width = size.x;
        this.height = size.y;
        this.c.style.outline = 'dashed';
        this.fade = fade;
    }
}
//# sourceMappingURL=Canvas.js.map